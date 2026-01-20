import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const username = process.env.GITHUB_USERNAME || '2405Gaurav'
    const token = process.env.GITHUB_TOKEN

    if (!token) {
      return NextResponse.json({ contributions: [] }, { status: 200 })
    }

    const query = `
      query($login: String!) {
        user(login: $login) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                  color
                }
              }
            }
          }
        }
      }
    `

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { login: username },
      }),
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(`GitHub GraphQL API responded with ${response.status}`)
    }

    const json = await response.json()

    const weeks =
      json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks ?? []

    const contributions = weeks.flatMap((w: any) => w.contributionDays)

    const totalContributions =
      json?.data?.user?.contributionsCollection?.contributionCalendar
        ?.totalContributions ?? 0

    return NextResponse.json({ totalContributions, contributions })
  } catch (err) {
    console.error('GitHub contributions API error:', err)
    return NextResponse.json(
      { totalContributions: 0, contributions: [] },
      { status: 200 }
    )
  }
}
