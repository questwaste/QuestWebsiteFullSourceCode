"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface DumpsterCardProps {
  title: string;
  image: string;
  weightLimit: string;
  dimensions: string;
  features: string[];
}

const DumpsterCard = ({ title, image, weightLimit, dimensions, features }: DumpsterCardProps) => {
  return (
    <Card className="border rounded-md overflow-hidden shadow-md">
      <div className="relative h-60 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-poppins font-bold mb-2">{title}</h3>
        <ul className="space-y-2">
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
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href="/contact-us" className="w-full">
          <Button className="w-full bg-qw-green hover:bg-[#238643] text-white font-medium">
            BOOK NOW
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

const DumpsterSizes = () => {
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
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Dumpster Sizes to Fit All Your Needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dumpsterData.map((dumpster) => (
            <DumpsterCard
              key={dumpster.title}
              title={dumpster.title}
              image={dumpster.image}
              weightLimit={dumpster.weightLimit}
              dimensions={dumpster.dimensions}
              features={dumpster.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DumpsterSizes;
