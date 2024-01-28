import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Mouhib Ben nasser",
  description: "Mouhib Ben Nasser's personal website",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://mouhib.me",
    siteName: "Mouhib Ben nasser",
    images: ["https://meowhibs.vercel.app/og-image.png"],
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
