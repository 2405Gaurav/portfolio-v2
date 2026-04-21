import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Replace with your GitHub username and repo name
    const owner = '2405Gaurav' // Your GitHub username
    const repo = 'portfolio-v2' // Your repository name

    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json',
    }
    // Optional: Add token for higher rate limits
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`
    }
    
    let response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers,
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    )

    // If token is expired (401), retry without auth
    if (response.status === 401) {
      response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}`,
        {
          headers: { 'Accept': 'application/vnd.github.v3+json' },
          next: { revalidate: 3600 }
        }
      )
    }

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`)
    }

    const data = await response.json()
    
    return NextResponse.json({ 
      repoStars: data.stargazers_count 
    })
  } catch (error) {
    console.error('GitHub API error:', error)
    // Return a fallback value instead of erroring
    return NextResponse.json({ repoStars: 0 }, { status: 200 })
  }
}