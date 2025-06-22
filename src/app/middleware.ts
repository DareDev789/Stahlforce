import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_LOCALES = ['zh', 'en'];
const DEFAULT_LOCALE = 'en';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🔒 Ignore les fichiers publics et API
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap.xml') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = PUBLIC_LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    // 🔍 Essaye de récupérer la langue via les cookies
    const cookieLocale = request.cookies.get('lang')?.value;

    // 🧠 Sinon fallback sur Accept-Language
    const acceptLang = request.headers.get('accept-language') || '';
    const headerLocale = acceptLang.startsWith('en') ? 'en' : DEFAULT_LOCALE;

    const preferredLocale = cookieLocale && PUBLIC_LOCALES.includes(cookieLocale)
      ? cookieLocale
      : headerLocale;

    const url = request.nextUrl.clone();
    url.pathname = `/${preferredLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}