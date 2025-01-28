import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-600">
              Himatrek International Tours LLC is your gateway to unforgettable adventures in the Himalayas and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-sm text-gray-600 hover:text-gray-900">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-sm text-gray-600 hover:text-gray-900">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-sm text-gray-600">123 Adventure Street, Kathmandu, Nepal</p>
            <p className="text-sm text-gray-600">Phone: +977 1234567890</p>
            <p className="text-sm text-gray-600">Email: info@himatrek.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-center text-gray-600">
            &copy; {new Date().getFullYear()} Himatrek International Tours LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

