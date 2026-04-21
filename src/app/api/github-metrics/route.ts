import { NextResponse } from 'next/server'

// Fetches comprehensive GitHub profile metrics for the about page
export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME || '2405Gaurav'
    const token = process.env.GITHUB_TOKEN

    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
    }
    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    // Fetch user profile + repos in parallel
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

    if (!userRes.ok || !reposRes.ok) {
      throw new Error('GitHub API request failed')
    }

    const user = await userRes.json()
    const repos = await reposRes.json()

    // Calculate total stars across all repos
    const totalStars = repos.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0)

    // Calculate total forks
    const totalForks = repos.reduce((acc: number, repo: any) => acc + (repo.forks_count || 0), 0)

    // Get top languages from repos
    const langMap: Record<string, number> = {}
    for (const repo of repos) {
      if (repo.language) {
        langMap[repo.language] = (langMap[repo.language] || 0) + 1
      }
    }
    const topLanguages = Object.entries(langMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }))

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
        const gqlData = await gqlRes.json()
        totalContributions = gqlData?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? 0
      } catch {
        // Silently fail for contributions
      }
    }

    return NextResponse.json({
      followers: user.followers || 0,
      following: user.following || 0,
      publicRepos: user.public_repos || 0,
      totalStars,
      totalForks,
      totalContributions,
      topLanguages,
      avatarUrl: user.avatar_url,
      bio: user.bio,
      createdAt: user.created_at,
    })
  } catch (error) {
    console.error('GitHub metrics API error:', error)
    return NextResponse.json({
      followers: 0,
      following: 0,
      publicRepos: 0,
      totalStars: 0,
      totalForks: 0,
      totalContributions: 0,
      topLanguages: [],
      avatarUrl: '',
      bio: '',
      createdAt: '',
    }, { status: 200 })
  }
}
