"use client";

import React from 'react';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import ServiceFeatures from '@/components/home/ServiceFeatures';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';

export default function AboutUs() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-80 flex items-center"
        style={{
          backgroundImage: 'url(/questwasteWebsite/assets/about-hero-background.jpeg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            About Us
          </h1>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 md:h-96">
              <Image
                src="/questwasteWebsite/assets/about-content-image.jpeg"
                alt="Dumpster Image"
                fill
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-poppins font-bold mb-6 text-qw-dark">
                About Quest Waste Solutions
              </h2>
              <p className="text-lg mb-6">
                Quest Waste Solutions is a forward-thinking rental company committed to sustainability and community impact. We provide eco-friendly waste management services to businesses of all sizes, from small local operations to large enterprises. Our mission is to reduce environmental impact while uplifting underprivileged communities, making a positive difference for both the planet and the people we serve.
              </p>
              <p className="text-lg">
                At Quest Waste Solutions, we offer complete pick up and drop off services, coming to you when you need us the most. Our on-time delivery and extended rental periods give our customers the confidence to complete their projects with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-qw-light-green bg-opacity-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-8">
            Serving the Lower 48
          </h2>
          <p className="text-lg max-w-4xl mx-auto text-center mb-8">
            Rent a dumpster in Metro Detroit, Palm Beach County, and our surrounding areas. Quest Waste Solutions offers roll-off dumpster services across the lower 48 states to support various projects. We provide reliable dumpster rentals for home renovations, construction debris, garage cleanouts, and all other waste removal needs—guaranteeing your satisfaction with every dumpster we deliver. Place your order today with our simple process!
          </p>
        </div>
      </section>

      {/* Service Features */}
      <ServiceFeatures />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CallToAction />
    </MainLayout>
  );
}
