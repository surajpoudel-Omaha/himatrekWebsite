import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center"> 
            <Image
              src="/hima_logo.gif"
              alt="HIMATREK Logo"
              width={180}
              height={60}
              className="object-contain"
              />
          
          </div>
          <div>
            <h3 className="text-lg text-center font-semibold mb-4">About Us</h3>
            <p className="text-sm text-black">
            Himatrek International Travel and Tours LLC offers an extensive array of adventure and cultural experiences in the Himalayan region. 
            Our services span trekking, hiking, rafting, safaris, climbing, and sightseeing in Nepal, Tibet, Bhutan, and India. Specializing in less-traveled routes,  emphasize cultural immersion and exploration of unique landscapes.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-black hover:text-gray-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-sm text-black hover:text-gray-600">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-sm text-black hover:text-gray-600">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-black hover:text-gray-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-6 text-center">Contact Info</h3>
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-black mb-2">Nepal</h4>
                <div className="flex flex-col justify-center gap-4 text-sm text-black ">
                  <p>Sitapaila, Kathmandu, Nepal</p>
                  <p>Phone: +977 1-4034927</p>
                  <p>Email: info@himatreknepal.com</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-black mb-2">USA</h4>
                <div className="flex flex-col justify-center gap-4 text-sm text-black ">
                  <p>9410 S 178th Street Omaha, NE, USA</p>
                  <p>Phone: +1 531 721 8945</p>
                  <p>Email: info@himatrek.com</p>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-black mb-2">Germany</h4>
                <div className="flex flex-col justify-center gap-4 text-sm text-black">
                  <p>Hüssenerstr. 9 D-45886 Gelsenkirchen</p>
                  <p>Phone: +49 (0) 40 7224633</p>
                  <p>Email: info@himatrek.de</p>
                </div>
              </div>
            </div>
          </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-center text-black">
            &copy; {new Date().getFullYear()} Himatrek International Tours LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

