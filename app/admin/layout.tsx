import Link from "next/link"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}

