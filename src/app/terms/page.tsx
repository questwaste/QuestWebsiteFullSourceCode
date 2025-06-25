"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CallToAction from '@/components/home/CallToAction';

export default function Terms() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-80 flex items-center"
        style={{
          backgroundImage: 'url(/questwasteWebsite/assets/hero-background.jpeg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-poppins font-bold mb-6">Quest Waste Solutions Terms of Service</h2>

            <div className="prose max-w-none">
              <p className="mb-4">Last Updated: April 2024</p>

              <h3 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h3>
              <p className="mb-4">
                By accessing or using Quest Waste Solutions' services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">2. Services</h3>
              <p className="mb-4">
                Quest Waste Solutions provides dumpster rental services for various residential and commercial needs. Our services include the delivery, pickup, and disposal of waste materials in accordance with local, state, and federal regulations.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">3. Pricing and Payments</h3>
              <p className="mb-4">
                Prices for our services are as quoted at the time of booking. Payment terms are specified during the booking process. Additional fees may apply for overweight containers, prohibited items, or extended rental periods beyond the agreed-upon timeframe.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">4. Prohibited Materials</h3>
              <p className="mb-4">
                Certain materials are prohibited from being placed in our dumpsters, including but not limited to: hazardous waste, toxic materials, flammable liquids, batteries, tires, paints, solvents, medical waste, and certain electronics. A complete list will be provided upon rental.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">5. Liability</h3>
              <p className="mb-4">
                Customers are responsible for ensuring that all materials placed in the dumpster comply with regulations. Quest Waste Solutions is not responsible for damages to property resulting from the placement of dumpsters at the customer's requested location.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">6. Changes to Terms</h3>
              <p className="mb-4">
                Quest Waste Solutions reserves the right to update these terms at any time. Changes will be effective upon posting to our website. Continued use of our services after such changes constitutes acceptance of the new terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </MainLayout>
  );
}
