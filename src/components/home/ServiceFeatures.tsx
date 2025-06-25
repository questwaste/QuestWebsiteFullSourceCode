"use client";

import type React from 'react';
import { ShieldCheck, DollarSign, Clock } from 'lucide-react';

interface ServiceFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceFeature = ({ title, description, icon }: ServiceFeatureProps) => {
  return (
    <div className="bg-qw-green text-white p-6 rounded-md">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-poppins font-bold ml-3">{title}</h3>
      </div>
      <p className="font-lato text-white/90">{description}</p>
    </div>
  );
};

const ServiceFeatures = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceFeature
            title="Reliable Service"
            description="Order your dumpster with ease. At Quest Waste Solutions, we have dumpster rentals of all sizes to handle your projects no matter how big or small. Call, text, or email today to get started."
            icon={<ShieldCheck size={32} className="text-white" />}
          />
          <ServiceFeature
            title="Affordable Rates"
            description="We strive to make renting a dumpster cost-effective and offer competitive rental rates. With complete pick up and drop off charges, we make cleaning up your projects simpler than ever."
            icon={<DollarSign size={32} className="text-white" />}
          />
          <ServiceFeature
            title="Flexible Rental Periods"
            description="At Quest Waste Solutions, we offer variable rental periods, making it easier than ever to rent a dumpster without worrying about running out of time for your residential or commercial projects."
            icon={<Clock size={32} className="text-white" />}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
