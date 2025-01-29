"use client"

import { useAuth } from "@/contexts/AuthContext"

export default function AdminDashboard() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return null
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome to the admin area. Use the sidebar to navigate.</p>
    </div>
  )
}

