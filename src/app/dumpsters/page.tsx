"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import ServiceFeatures from '@/components/home/ServiceFeatures';
import CallToAction from '@/components/home/CallToAction';

interface DumpsterInfoProps {
  title: string;
  image: string;
  weightLimit: string;
  dimensions: string;
  features: string[];
}

const DumpsterInfo = ({ title, image, weightLimit, dimensions, features }: DumpsterInfoProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center mb-12 pb-12 border-b border-gray-200">
      <div className="w-full md:w-1/2 relative h-64 md:h-72">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-poppins font-bold mb-4">{title}</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start space-x-2">
            <Check size={18} className="text-qw-green mt-1 flex-shrink-0" />
            <span>{weightLimit}</span>
          </li>
          <li className="flex items-start space-x-2">
            <Check size={18} className="text-qw-green mt-1 flex-shrink-0" />
            <span>{dimensions}</span>
          </li>
          {features.map((feature) => (
            <li key={`${title}-${feature}`} className="flex items-start space-x-2">
              <Check size={18} className="text-qw-green mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href="/contact-us">
          <Button className="bg-qw-green hover:bg-[#238643] text-white font-medium">
            BOOK NOW
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default function Dumpsters() {
  const dumpsterData = [
    {
      title: "10 Yard Roll-Off",
      image: "/questwasteWebsite/assets/10-yard-dumpster.jpeg",
      weightLimit: "1 Ton Weight Limit",
      dimensions: "Dimensions: 14x7.5x5",
      features: ["Home Cleanouts", "DIY Projects", "Outdoor Projects"]
    },
    {
      title: "20 Yard Roll-Off",
      image: "/questwasteWebsite/assets/20-yard-dumpster.jpeg",
      weightLimit: "2 Ton Weight Limit",
      dimensions: "Dimensions: 22x8x4.5",
      features: ["Home Cleanouts", "DIY Projects", "Outdoor Projects"]
    },
    {
      title: "30 Yard Roll-Off",
      image: "/questwasteWebsite/assets/30-yard-dumpster.jpeg",
      weightLimit: "3 Ton Weight Limit",
      dimensions: "Dimensions: 22x7.5x6",
      features: ["Home Cleanouts", "DIY Projects", "Outdoor Projects"]
    },
    {
      title: "40 Yard Roll-Off",
      image: "/questwasteWebsite/assets/40-yard-dumpster.jpeg",
      weightLimit: "3.5 Ton Weight Limit",
      dimensions: "Dimensions: 22x7.5x8",
      features: ["Home Cleanouts", "DIY Projects", "Outdoor Projects"]
    },
    {
      title: "10 Yard Dumpster Trailer",
      image: "/questwasteWebsite/assets/trailer-dumpster.jpeg",
      weightLimit: "1 Ton Weight Limit",
      dimensions: "Dimensions: 14x7.5x5",
      features: ["Home Cleanouts", "DIY Projects", "Outdoor Projects"]
    },
    {
      title: "15 Yard Dumpster Trailer",
      image: "/questwasteWebsite/assets/trailer-dumpster.jpeg",
      weightLimit: "1.5 Ton Weight Limit",
      dimensions: "Dimensions: 16x7.5x4.5",
      features: ["Home Cleanouts", "DIY Projects", "Outdoor Projects"]
    },
    {
      title: "20 Yard Dumpster Trailer",
      image: "/questwasteWebsite/assets/trailer-dumpster.jpeg",
      weightLimit: "2 Ton Weight Limit",
      dimensions: "Dimensions: 22x8x4.5",
      features: ["Home Cleanouts", "DIY Projects", "Outdoor Projects"]
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center overflow-hidden">
        <Image
          src="/questwasteWebsite/assets/image.jpg"
          alt="Dumpsters Hero"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            Dumpsters
          </h1>
        </div>
      </section>

      {/* Dumpster Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {dumpsterData.map((dumpster) => (
            <DumpsterInfo
              key={dumpster.title}
              title={dumpster.title}
              image={dumpster.image}
              weightLimit={dumpster.weightLimit}
              dimensions={dumpster.dimensions}
              features={dumpster.features}
            />
          ))}
        </div>
      </section>

      {/* Service Features */}
      <ServiceFeatures />

      {/* Call to Action */}
      <CallToAction />
    </MainLayout>
  );
}
