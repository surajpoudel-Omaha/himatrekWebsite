import "./globals.css"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AuthProvider } from "@/contexts/AuthContext"

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AuthProvider>
          <SiteHeader />
          <main className="flex-grow">{children}</main>
          <SiteFooter />
        </AuthProvider>
      </body>
    </html>
  )
}

