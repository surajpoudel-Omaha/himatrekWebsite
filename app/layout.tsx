import "./globals.css"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "HIMATREK - Trekking Adventures",
  description: "Experience the beauty of the Himalayas with HIMATREK",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}

