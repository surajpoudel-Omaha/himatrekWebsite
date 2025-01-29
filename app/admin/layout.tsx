"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated, logout } = useAuth()
  const router = useRouter()

  if (!isAuthenticated) {
    router.push("/login")
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/login")
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4">
        <nav className="space-y-2">
          <Link href="/admin" className="block py-2 px-4 rounded hover:bg-gray-200">
            Dashboard
          </Link>
          <Link href="/admin/destinations" className="block py-2 px-4 rounded hover:bg-gray-200">
            Manage Destinations
          </Link>
        </nav>
        <Button onClick={handleLogout} className="mt-4 w-full">
          Logout
        </Button>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}

