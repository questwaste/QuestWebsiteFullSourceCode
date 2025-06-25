"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getAssetPath } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[70vh] flex items-center"
      style={{
        background: "linear-gradient(0deg, rgba(0,0,0,0.35), rgba(0,0,0,0.15)), url(/questwasteWebsite/assets/home-hero-background.png) center center/cover no-repeat"
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4">
            On A Quest For<br />
            Eco-Friendly Waste Solutions
          </h1>
          <p className="text-lg mb-8 font-roboto">
            Your top choice for reliable dumpster rental services.
          </p>
          <Link href="/contact-us">
            <Button className="bg-qw-green hover:bg-[#238643] text-white uppercase font-semibold tracking-wider px-8 py-3 text-lg">
              BOOK NOW
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
