import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontSans } from "@/fonts";

export const metadata: Metadata = {
  title: "Mouhib Ben nasser",
  description: "Mouhib Ben Nasser's personal website",
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
      </body>
    </html>
  );
}
