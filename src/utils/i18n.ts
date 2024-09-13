import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';
import { Locale } from './i18n-config';

// prefix system
export const availableLocales: Locale[] = ['en', 'fr'];
export const defaultLocale: Locale = 'fr';

// check headers and filter language by preference
export const getPrefferedLocale = (request: NextRequest) => {
  const headers = {
    'accept-language': request.headers.get('accept-language')!,
  };
  const languages = new Negotiator({ headers }).languages();

  // return locale by preference , availables and by default
  return match(languages, availableLocales, defaultLocale);
};

// check if the locale exist and return the right URL if not
export const getLocaleUrlToRedirect = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = availableLocales.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getPrefferedLocale(request);

    return new URL(`/${locale}/${pathname}`, request.url);
  }
};
