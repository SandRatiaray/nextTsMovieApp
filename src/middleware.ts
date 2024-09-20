import { NextRequest, NextResponse } from 'next/server';
import { getLocaleUrlToRedirect } from './utils/i18n';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

export function middleware(request: NextRequestWithAuth) {
  const newLocaleUrl = getLocaleUrlToRedirect(request);

  if (newLocaleUrl) {
    return NextResponse.redirect(newLocaleUrl);
  }

  // start by 2 characters and followed by user
  if (/\/[a-z]{2}\/user.*/.test(request.nextUrl.pathname)) {
    return withAuth(request);
  }
}

export const config = {
  // exclude this url
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
