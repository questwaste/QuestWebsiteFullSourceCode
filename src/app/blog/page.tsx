"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CalendarDays, User, ArrowRight } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import CallToAction from '@/components/home/CallToAction';

interface BlogPostProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  slug: string;
}

const BlogPostCard = ({ title, excerpt, image, author, date, slug }: BlogPostProps) => {
  return (
    <Card className="border rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <User size={16} />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <CalendarDays size={16} />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="text-xl font-poppins font-bold mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/blog/${slug}`} className="inline-flex items-center space-x-2 text-qw-green hover:text-[#238643] font-medium">
          <span>Read More</span>
          <ArrowRight size={16} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default function Blog() {
  const blogPosts = [
    {
      title: "The Ultimate Guide to Choosing the Right Dumpster Size for Your Project",
      excerpt: "Not sure which dumpster size you need? Our comprehensive guide breaks down the different sizes available and helps you choose the perfect option for your specific project requirements.",
      image: "/questwasteWebsite/assets/30-yard-dumpster.jpeg",
      author: "Quest Waste Team",
      date: "March 15, 2024",
      slug: "ultimate-guide-choosing-right-dumpster-size"
    },
    {
      title: "Eco-Friendly Waste Management: How We're Making a Difference",
      excerpt: "Learn about Quest Waste Solutions' commitment to sustainability and how our eco-friendly practices are helping to reduce environmental impact while serving our communities.",
      image: "/questwasteWebsite/assets/about-content-image.jpeg",
      author: "Environmental Team",
      date: "March 10, 2024",
      slug: "eco-friendly-waste-management-making-difference"
    },
    {
      title: "Top 10 Items You Can't Put in a Dumpster",
      excerpt: "Avoid costly mistakes and potential safety hazards by knowing what materials are prohibited in dumpster rentals. Here's everything you need to know about restricted items.",
      image: "/questwasteWebsite/assets/20-yard-dumpster.jpeg",
      author: "Safety Team",
      date: "March 5, 2024",
      slug: "top-10-items-cant-put-dumpster"
    },
    {
      title: "Construction Debris Disposal: Best Practices for Contractors",
      excerpt: "Maximize efficiency and stay compliant with local regulations. Our guide for contractors covers everything from planning to disposal of construction waste.",
      image: "/questwasteWebsite/assets/40-yard-dumpster.jpeg",
      author: "Industry Expert",
      date: "February 28, 2024",
      slug: "construction-debris-disposal-best-practices"
    },
    {
      title: "Home Renovation Cleanout: Planning Your Waste Management Strategy",
      excerpt: "Planning a home renovation? Don't let waste management be an afterthought. Learn how to plan ahead and choose the right disposal solutions for your project.",
      image: "/questwasteWebsite/assets/10-yard-dumpster.jpeg",
      author: "Home Improvement Team",
      date: "February 20, 2024",
      slug: "home-renovation-cleanout-planning-strategy"
    },
    {
      title: "The Environmental Impact of Proper Waste Disposal",
      excerpt: "Understanding how proper waste disposal affects our environment and communities. Discover the positive impact of choosing responsible waste management services.",
      image: "/questwasteWebsite/assets/hero-background.jpeg",
      author: "Environmental Team",
      date: "February 15, 2024",
      slug: "environmental-impact-proper-waste-disposal"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-80 flex items-center"
        style={{
          backgroundImage: 'url(/questwasteWebsite/assets/blog-hero-background.jpg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            Blog
          </h1>
          <p className="text-lg text-white mt-4">
            Tips, guides, and insights on waste management and sustainability
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                author={post.author}
                date={post.date}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-poppins font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Get the latest tips on waste management, sustainability, and project planning delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-qw-green"
              />
              <Button className="bg-qw-green hover:bg-[#238643] text-white px-6 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </MainLayout>
  );
}
