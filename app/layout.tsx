import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Book 30+ Calls & Close $50K+ Deals in Weeks – Genesis Systems",
  description:
    "Helping B2B SaaS founders and agency owners generate consistent leads, book more calls, and close more deals using AI-powered outreach systems.",
  generator: "v0.app",
  openGraph: {
    title: "Book 30+ Calls & Close $50K+ Deals in Weeks – Genesis Systems",
    description:
      "Helping B2B SaaS founders and agency owners generate consistent leads, book more calls, and close more deals using AI-powered outreach systems.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
