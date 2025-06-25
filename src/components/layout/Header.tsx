"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-black text-white relative z-[50]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-36 h-12">
            <Image
              src="https://ext.same-assets.com/783092499/1272876950.png"
              alt="Quest Waste Solutions Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-poppins">
          <Link href="/" className="hover:text-qw-green transition-colors">Home</Link>
          <Link href="/about-us" className="hover:text-qw-green transition-colors">About Us</Link>
          <Link href="/dumpsters" className="hover:text-qw-green transition-colors">Dumpsters</Link>
          <Link href="/blog" className="hover:text-qw-green transition-colors">Blog</Link>
          <Link href="/contact-us" className="hover:text-qw-green transition-colors">Contact Us</Link>
        </nav>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/contact-us">
            <Button className="bg-qw-green hover:bg-[#238643] text-white font-semibold">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation with high z-index and fixed overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex flex-col">
          <button
            className="self-end m-4 text-white"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          <nav className="flex flex-col space-y-6 p-8 font-poppins w-full items-center flex-1 justify-center">
            <Link
              href="/"
              className="hover:text-qw-green transition-colors text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="hover:text-qw-green transition-colors text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/dumpsters"
              className="hover:text-qw-green transition-colors text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Dumpsters
            </Link>
            <Link
              href="/blog"
              className="hover:text-qw-green transition-colors text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-qw-green transition-colors text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="bg-qw-green hover:bg-[#238643] text-white font-semibold px-10 w-full mt-4">
                Book Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
