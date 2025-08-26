export const defaultLocale = 'en'
export const locales = ['en', 'es', 'fr'] as const
export type Locale = (typeof locales)[number]

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/')
  const locale = segments[1]
  
  if (isValidLocale(locale)) {
    return locale
  }
  
  return defaultLocale
}
