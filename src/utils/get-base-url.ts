export const getBaseUrl = () => {
  // Check if running on Vercel preview
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview') {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
  }

  // Return configured site URL or fallback to localhost
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}