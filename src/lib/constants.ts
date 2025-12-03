export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
// eslint-disable-next-line unicorn/prefer-global-this -- using `typeof window` to safely detect non-browser environments; `globalThis` is always defined
export const IS_SERVER = typeof window === 'undefined'

export const GITHUB_USERNAME = '2405gaurav'

export const MY_NAME = 'Gaurav'

export const SITE_GITHUB_URL = 'https://github.com/2405Gaurav/portfolio-v2'
export const SITE_INSTAGRAM_URL = 'https://www.instagram.com/24_gauravthakur/?hl=en'
export const SITE_X_URL = 'https://x.com/GauravT55684844'
export const CODO = 'https://codolio.com/profile/EREN_01'


export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630
export const OG_IMAGE_TYPE = 'image/png'

export const AVATAR_MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
export const SUPPORTED_AVATAR_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const

export type AvatarMimeType = (typeof SUPPORTED_AVATAR_MIME_TYPES)[number]
