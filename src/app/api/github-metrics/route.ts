import { NextResponse } from 'next/server'

// Server-side route that fetches GitHub profile metrics
// Works without auth token (public API, lower rate limit) or with token for higher limits
export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME || '2405Gaurav'
    const token = process.env.GITHUB_TOKEN

    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
    }
    // Only use token if available — public API works without it (60 req/hr)
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    // Fetch user profile + repos in parallel via server-side calls
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
        headers,
        next: { revalidate: 3600 },
      }),
    ])

    // If authenticated request fails (401), retry without token
    if (userRes.status === 401 || reposRes.status === 401) {
      const publicHeaders = { 'Accept': 'application/vnd.github.v3+json' }
      const [pubUserRes, pubReposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, {
          headers: publicHeaders,
          next: { revalidate: 3600 },
        }),
        fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
          headers: publicHeaders,
          next: { revalidate: 3600 },
        }),
      ])
      return buildResponse(pubUserRes, pubReposRes, token, username)
    }

    return buildResponse(userRes, reposRes, token, username)
  } catch (error) {
    console.error('GitHub metrics API error:', error)
    return NextResponse.json(getFallback(), { status: 200 })
  }
}

async function buildResponse(
  userRes: Response,
  reposRes: Response,
  token: string | undefined,
  username: string
) {
  let followers = 0
  let publicRepos = 0
  let totalStars = 0
  const langMap: Record<string, number> = {}

  if (userRes.ok) {
    const userData = await userRes.json()
    followers = userData.followers || 0
    publicRepos = userData.public_repos || 0
  }

  if (reposRes.ok) {
    const repos = await reposRes.json()
    totalStars = repos.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0)
    for (const repo of repos) {
      if (repo.language) {
        langMap[repo.language] = (langMap[repo.language] || 0) + 1
      }
    }
  }

  // Fetch contribution count via GraphQL if token is available
  let totalContributions = 0
  if (token) {
    try {
      const gqlRes = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query($login: String!) {
              user(login: $login) {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                  }
                }
              }
            }
          `,
          variables: { login: username },
        }),
        next: { revalidate: 3600 },
      })
      if (gqlRes.ok) {
        const gqlData = await gqlRes.json()
        totalContributions =
          gqlData?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0
      }
    } catch {
      // GraphQL might fail if token expired — silently continue
    }
  }

  const topLanguages = Object.entries(langMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({ name, count }))

  return NextResponse.json({
    followers,
    publicRepos,
    totalStars,
    totalContributions,
    topLanguages,
  })
}

function getFallback() {
  return {
    followers: 0,
    publicRepos: 0,
    totalStars: 0,
    totalContributions: 0,
    topLanguages: [],
  }
}
