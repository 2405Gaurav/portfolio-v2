import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// Extend dayjs with relativeTime plugin
dayjs.extend(relativeTime)

type DateTimeFormatOptions = Intl.DateTimeFormatOptions

type Options = {
  relative?: boolean
  formatOptions?: DateTimeFormatOptions
}

type UseFormattedDate = {
  (date: Date | string | number, options?: Options): string
  (date?: Date | string | number, options?: Options): string | null
}

export const useFormattedDate: UseFormattedDate = (date, options: Options = {}) => {
  const {
    relative = false,
    formatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
  } = options

  if (!date) return null

  const now = new Date()
  const convertedDate = dayjs(date).toDate()

  if (relative) {
    const daysDiff = dayjs(now).diff(convertedDate, 'day')

    // If more than 7 days, show formatted date
    if (Math.abs(daysDiff) > 7) {
      return new Intl.DateTimeFormat('en-US', formatOptions).format(convertedDate)
    }
    
    // Otherwise show relative time (e.g., "2 days ago")
    return dayjs(convertedDate).fromNow()
  } else {
    return new Intl.DateTimeFormat('en-US', formatOptions).format(convertedDate)
  }
}