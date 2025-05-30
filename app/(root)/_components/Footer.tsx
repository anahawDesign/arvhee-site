import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import TikTokIcon from "@/components/ui/tiktokicon";

const Footer = () => (
  <footer className="bg-[var(--color-background)] text-[var(--color-accent)] py-12 px-4 border-t-2 border-[var(--color-secondary)]">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="max-w-xs mx-auto">
          <div className="flex items-center space-x-2 mb-4">
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
          <p className="text-[var(--color-text)]">
            Bringing authentic Filipino flavors to London, one freshly baked
            treat at a time.
          </p>
        </div>

        <div className="max-w-xs  mx-auto w-full">
          <h5 className="font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-[var(--color-text)]">
            <li>
              <Link href="#home" className="hover:text-[var(--color-accent)]">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#products"
                className="hover:text-[var(--color-accent)]"
              >
                Products
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-[var(--color-accent)]">
                About
              </Link>
            </li>
            <li>
              <Link href="#visit" className="hover:text-[var(--color-accent)]">
                Visit Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="max-w-xs  mx-auto w-full">
          <h5 className="font-semibold mb-4">Categories</h5>
          <ul className="space-y-2 text-[var(--color-text)]">
            <li>
              <Link href="#" className="hover:text-[var(--color-accent)]">
                Sweet Treats
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[var(--color-accent)]">
                Savory Bites
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[var(--color-accent)]">
                Mini Mart
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[var(--color-accent)]">
                Frozen Goods
              </Link>
            </li>
          </ul>
        </div>

        <div className="max-w-xs  mx-auto w-full">
          <h5 className="font-semibold mb-4">Connect</h5>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/arvhee_bakes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                variant="ghost"
                className="text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://www.facebook.com/p/ArVhee-Bakes-100063446330479/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                variant="ghost"
                className="text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
              >
                <Facebook className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://www.tiktok.com/@arvhee_bakes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                variant="ghost"
                className="text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
              >
                <TikTokIcon className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Separator className="my-8 bg-[var(--color-accent)]/20" />

      <div className="text-center text-[var(--color-text)]">
        <p>
          &copy; 2025 aRVhee Bakery. All rights reserved. Made with ❤️ in
          London.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
