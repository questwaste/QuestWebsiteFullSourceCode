"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial = ({ quote, author }: TestimonialProps) => {
  return (
    <Card className="bg-gray-100 border-0 shadow-sm">
      <CardContent className="p-6">
        <Quote className="text-qw-green w-10 h-10 mb-4 opacity-80" />
        <p className="text-gray-800 font-lato mb-4">{quote}</p>
        <h4 className="font-poppins font-semibold text-qw-dark">{author}</h4>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonialData = [
    {
      quote: "Quest Waste Solutions has so many sizes to choose from, and it's a good thing for us homeowners.",
      author: "Daniel Cohen",
      id: "testimonial-daniel-cohen"
    },
    {
      quote: "These guys offer exceptional services and delivered the dumpster I ordered on the same day. Thanks to Quest Waste Solutions, I didn't have to wait a day longer with all the waste surrounding my house.",
      author: "Casey Lawson",
      id: "testimonial-casey-lawson"
    },
    {
      quote: "It was a pleasant surprise to pay what they quoted. Excellent service!",
      author: "Rachel Levy",
      id: "testimonial-rachel-levy"
    }
  ];

  return (
    <section className="py-16 bg-qw-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Words that Fuel Our Passion
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialData.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
