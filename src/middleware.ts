import { NextRequest, NextResponse } from 'next/server';
import { getLocaleUrlToRedirect } from './utils/i18n';

export function middleware(request: NextRequest) {
  const newLocaleUrl = getLocaleUrlToRedirect(request);

  if (newLocaleUrl) {
    return NextResponse.redirect(newLocaleUrl);
  }
}

export const config = {
  // exclude this url
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
