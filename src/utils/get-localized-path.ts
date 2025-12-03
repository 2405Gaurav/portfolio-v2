import { getBaseUrl } from './get-base-url'

type LocalizedDocument = {
  locale?: string
  pathname?: string
}

// Since you're not using locales, this can be simplified
export const getLocalizedPath = (doc: LocalizedDocument) => {
  const { pathname = '' } = doc
  const baseUrl = getBaseUrl()

  return `${baseUrl}${pathname}`
}

// Alternative: If you want to keep locale support for future use
export const getLocalizedPathWithLocale = (doc: LocalizedDocument) => {
  const { locale = 'en', pathname = '' } = doc
  const baseUrl = getBaseUrl()
  const defaultLocale = 'en'

  const localePath = locale === defaultLocale ? baseUrl : `${baseUrl}/${locale}`

  return `${localePath}${pathname}`
}