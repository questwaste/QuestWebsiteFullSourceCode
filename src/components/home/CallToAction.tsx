"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/2135700253/2121199578.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.1
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-lg font-poppins text-qw-green mb-2">Need a Dumpster?</h3>
          <a href="tel:2485094431" className="text-4xl md:text-5xl font-poppins font-bold mb-4 hover:text-qw-green transition-colors">
            (248) 509-4431
          </a>
          <p className="text-lg font-lato mb-6 text-gray-700">Get Started on Your Project Today</p>
          <Link href="/contact-us">
            <Button className="bg-qw-green hover:bg-[#238643] text-white font-semibold px-8 py-3">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-1/3 h-24 z-0">
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-qw-green/20 fill-current">
          <path d="M0,100 C30,30 70,0 100,50 C150,120 170,0 200,100 L0,100 Z" />
        </svg>
      </div>
      <div className="absolute right-0 bottom-0 w-1/3 h-24 z-0 transform rotate-180">
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-qw-green/20 fill-current">
          <path d="M0,100 C30,30 70,0 100,50 C150,120 170,0 200,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default CallToAction;
