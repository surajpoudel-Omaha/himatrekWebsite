import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="https://sjc.microlink.io/CJ6kgOMNlJyZ6qGLLuS9GnFdqKWGKnRCn2o0ao5e1teehNA8EpXFcMfnM8RE38_0_QSx-r0xucA8uIL8iVfUUQ.jpeg"
            alt="HIMATREK Logo"
            width={180}
            height={60}
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            HOME
          </Link>
          <Link href="/destinations" className="transition-colors hover:text-primary">
            DESTINATION
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary">
            CONTACT US
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            ABOUT
          </Link>
          <Link href="/faq" className="transition-colors hover:text-primary">
            FREQUENTLY ASKED QUESTION
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4 mt-6">
              <Link href="/" className="text-sm font-medium">
                HOME
              </Link>
              <Link href="/destinations" className="text-sm font-medium">
                DESTINATION
              </Link>
              <Link href="/contact" className="text-sm font-medium">
                CONTACT US
              </Link>
              <Link href="/about" className="text-sm font-medium">
                ABOUT
              </Link>
              <Link href="/faq" className="text-sm font-medium">
                FREQUENTLY ASKED QUESTION
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

