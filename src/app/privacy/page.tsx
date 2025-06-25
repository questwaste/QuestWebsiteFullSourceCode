"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CallToAction from '@/components/home/CallToAction';

export default function Privacy() {
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
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-poppins font-bold mb-6">Quest Waste Solutions Privacy Policy</h2>

            <div className="prose max-w-none">
              <p className="mb-4">Last Updated: April 2024</p>

              <h3 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h3>
              <p className="mb-4">
                Quest Waste Solutions collects personal information when you register for our services, place an order, or fill out a form on our website. This information may include your name, email address, phone number, billing address, and service location.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h3>
              <p className="mb-4">
                We use the information we collect to provide and improve our services, process transactions, send periodic emails, and better understand your needs. We may also use this information to contact you regarding your service requests.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">3. Information Protection</h3>
              <p className="mb-4">
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">4. Cookies</h3>
              <p className="mb-4">
                Our website may use cookies to enhance your experience. Cookies are small files that a site transfers to your computer's hard drive through your web browser that enables the site to recognize your browser and capture and remember certain information.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">5. Third-Party Disclosure</h3>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as necessary to provide our services or as required by law.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">6. Changes to Privacy Policy</h3>
              <p className="mb-4">
                Quest Waste Solutions reserves the right to modify this privacy policy at any time. Changes will be effective immediately upon posting to our website. We encourage you to periodically review this page for the latest information.
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
