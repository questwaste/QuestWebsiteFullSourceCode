"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-64 h-20">
                <Image
                  src="https://ext.same-assets.com/783092499/1272876950.png"
                  alt="Quest Waste Solutions Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm font-lato mt-2">On a Quest for Eco-Friendly Waste Solutions</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="hover:text-qw-green transition-colors">Home</Link>
              <Link href="/about-us" className="hover:text-qw-green transition-colors">About Us</Link>
              <Link href="/dumpsters" className="hover:text-qw-green transition-colors">Dumpsters</Link>
              <Link href="/contact-us" className="hover:text-qw-green transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4">Contact Info</h3>
            <ul className="flex flex-col space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-qw-green" />
                <span>HQ: Detroit, MI</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-qw-green" />
                <a href="tel:2485094431" className="hover:text-qw-green transition-colors">(248) 509-4431</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-qw-green" />
                <a href="mailto:support@questwaste.net" className="hover:text-qw-green transition-colors">support@questwaste.net</a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/QuestWasteSolutions" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <div className="bg-qw-green rounded-full p-2 hover:opacity-80 transition-opacity">
                  <Facebook size={20} className="text-white" />
                </div>
              </a>
              <a href="https://www.instagram.com/questwastesolutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <div className="bg-qw-green rounded-full p-2 hover:opacity-80 transition-opacity">
                  <Instagram size={20} className="text-white" />
                </div>
              </a>
              <a href="https://www.linkedin.com/company/quest-waste-solutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <div className="bg-qw-green rounded-full p-2 hover:opacity-80 transition-opacity">
                  <Linkedin size={20} className="text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-4 text-center text-sm">
          <p>© 2024 Quest Waste Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
