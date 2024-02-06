import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";

import { supportedLocales } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function getLocale(request: NextRequest) {
  // Check for a locale set in cookie
  const cookieLocale = request.cookies.get("NEXT_LOCALE");

  if (cookieLocale) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language") || "";
  const headers = { "accept-language": acceptLanguage };
  const languages = new Negotiator({ headers }).languages();
  const defaultLocale = "en-US";

  // Match the preferred language with the supported locales
  return (
    languages.find((lang: any) => supportedLocales.includes(lang)) ||
    defaultLocale
  );
}
