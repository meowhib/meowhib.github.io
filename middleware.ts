import { NextRequest, NextResponse } from "next/server";

import { supportedLocales } from "@/lib/constants";
import { getLocale } from "@/lib/utils";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with a known locale
  const pathnameHasValidLocale = supportedLocales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If the pathname already has a valid locale, no need to redirect
  if (pathnameHasValidLocale) {
    return NextResponse.next();
  }

  // Determine the user's preferred locale
  const locale = getLocale(request);

  // If the user's preferred language is not supported, redirect to the default locale
  if (!supportedLocales.includes(locale as string)) {
    // Ensure that the pathname is appended correctly
    const newPath = pathname === "/" ? "/en/" : `/en${pathname}`;
    return NextResponse.redirect(new URL(newPath, request.nextUrl));
  }

  // Redirect to the appropriate locale
  // Ensure that the pathname is appended correctly
  const newPath = pathname === "/" ? `/${locale}/` : `/${locale}${pathname}`;
  return NextResponse.redirect(new URL(newPath, request.nextUrl));
}

export const config = {
  matcher: "/((?!api|static|qr|.*\\..*|_next).*)",
};
