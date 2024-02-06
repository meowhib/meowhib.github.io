import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Mouhib Ben nasser | Meowhib",
  description: "Mouhib Ben Nasser's personal website",
  metadataBase: new URL("https://meowhib.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/twitter-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
