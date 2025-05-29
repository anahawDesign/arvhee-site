// app/(root)/_navbar/Navbar.tsx

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => (
  <header
    className="sticky top-0 z-50 shadow-sm"
    style={{
      background: "var(--color-background)",
      color: "var(--color-accent)",
    }}
  >
    <div className="container mx-auto px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Image
              src="/arvhee-logo.png" // Path in public folder
              alt="aRVhee Bakery Logo"
              width={100} // or any size that fits your navbar
              height={40}
              priority // ensures it loads ASAP
              className="object-contain" // optional: ensures logo scales nicely
            />
          </div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="#home"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            Home
          </Link>
          <Link
            href="#products"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            Products
          </Link>
          <Link
            href="#about"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            About
          </Link>
          <Link
            href="#visit"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            Visit Us
          </Link>
        </nav>
        <Button
          className="hover:bg-[var(--color-accent)]"
          style={{
            background: "var(--color-accent)",
            color: "var(--color-secondary)",
          }}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Cart (0)
        </Button>
      </div>
    </div>
  </header>
);

export default Navbar;
