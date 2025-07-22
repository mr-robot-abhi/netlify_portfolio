import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import CustomCursor from "@/components/custom-cursor"
import SmoothScroll from "@/components/smooth-scroll"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "mr-robot-abhi - Full-Stack Developer & Digital Architect",
  description: "Passionate full-stack developer specializing in React, Node.js, and modern web technologies. Building innovative digital solutions that inspire and transform ideas into reality.",
  keywords: ["Full-Stack Developer", "React", "Node.js", "JavaScript", "TypeScript", "Web Development", "Mobile Development"],
  authors: [{ name: "mr-robot-abhi" }],
  creator: "mr-robot-abhi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mr-robot-abhi.dev",
    title: "mr-robot-abhi - Full-Stack Developer & Digital Architect",
    description: "Passionate full-stack developer specializing in React, Node.js, and modern web technologies.",
    siteName: "mr-robot-abhi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "mr-robot-abhi - Full-Stack Developer & Digital Architect",
    description: "Passionate full-stack developer specializing in React, Node.js, and modern web technologies.",
    creator: "@mr_robot_abhi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}