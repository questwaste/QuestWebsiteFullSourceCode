import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarDays, User, ArrowLeft, ArrowRight } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import CallToAction from '@/components/home/CallToAction';

interface BlogPost {
  title: string;
  content: React.ReactNode;
  image: string;
  author: string;
  date: string;
  slug: string;
  excerpt: string;
}

const blogPosts: { [key: string]: BlogPost } = {
  "ultimate-guide-choosing-right-dumpster-size": {
    title: "The Ultimate Guide to Choosing the Right Dumpster Size for Your Project",
    excerpt: "Not sure which dumpster size you need? Our comprehensive guide breaks down the different sizes available and helps you choose the perfect option for your specific project requirements.",
    image: "/questwasteWebsite/assets/30-yard-dumpster.jpeg",
    author: "Quest Waste Team",
    date: "March 15, 2024",
    slug: "ultimate-guide-choosing-right-dumpster-size",
    content: (
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Choosing the right dumpster size is crucial for the success of any project. Whether you're doing a home renovation, construction work, or a major cleanout, selecting the appropriate container size can save you time, money, and hassle.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">10 Yard Dumpsters</h2>
        <p className="mb-4">
          Perfect for small projects like bathroom renovations, garage cleanouts, or small deck demolitions. These compact dumpsters can handle approximately 3-5 pickup truck loads of debris.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Dimensions: 14' x 7.5' x 5'</li>
          <li>Weight limit: 1 ton</li>
          <li>Best for: Small home projects, yard waste, minor renovations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">20 Yard Dumpsters</h2>
        <p className="mb-4">
          Our most popular size, ideal for medium-sized projects. Great for kitchen renovations, flooring removal, or roof shingle disposal.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Dimensions: 22' x 8' x 4.5'</li>
          <li>Weight limit: 2 tons</li>
          <li>Best for: Medium renovations, carpet removal, deck demolition</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">30 Yard Dumpsters</h2>
        <p className="mb-4">
          Suitable for larger renovation projects or construction sites. Can accommodate significant amounts of debris while still fitting in most driveways.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Dimensions: 22' x 7.5' x 6'</li>
          <li>Weight limit: 3 tons</li>
          <li>Best for: Large home additions, commercial cleanouts, major renovations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">40 Yard Dumpsters</h2>
        <p className="mb-4">
          Our largest container, perfect for major construction projects, large-scale demolitions, or commercial use.
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Dimensions: 22' x 7.5' x 8'</li>
          <li>Weight limit: 3.5 tons</li>
          <li>Best for: Large construction projects, commercial demolitions, estate cleanouts</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Still Unsure?</h2>
        <p className="mb-4">
          If you're still not sure which size is right for your project, our experienced team is here to help. Contact us at (248) 509-4431 for a free consultation and size recommendation based on your specific needs.
        </p>
      </div>
    )
  },
  "eco-friendly-waste-management-making-difference": {
    title: "Eco-Friendly Waste Management: How We're Making a Difference",
    excerpt: "Learn about Quest Waste Solutions' commitment to sustainability and how our eco-friendly practices are helping to reduce environmental impact while serving our communities.",
    image: "/questwasteWebsite/assets/about-content-image.jpeg",
    author: "Environmental Team",
    date: "March 10, 2024",
    slug: "eco-friendly-waste-management-making-difference",
    content: (
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          At Quest Waste Solutions, we believe that responsible waste management is essential for protecting our environment and creating a sustainable future for generations to come.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment to Sustainability</h2>
        <p className="mb-4">
          We're committed to reducing the environmental impact of waste through innovative recycling programs, responsible disposal methods, and community education initiatives.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Recycling and Diversion Programs</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Construction material recycling and reuse</li>
          <li>Metal separation and processing</li>
          <li>Wood waste conversion to biomass fuel</li>
          <li>Concrete and asphalt recycling</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Community Impact</h2>
        <p className="mb-4">
          Our sustainability efforts extend beyond just waste management. We actively support underprivileged communities through job creation, skills training, and environmental education programs.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How You Can Help</h2>
        <p className="mb-4">
          By choosing Quest Waste Solutions, you're supporting eco-friendly practices. Here's how you can maximize your environmental impact:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Separate recyclable materials before disposal</li>
          <li>Choose the right dumpster size to minimize waste</li>
          <li>Avoid mixing prohibited materials</li>
          <li>Consider donating reusable items before disposal</li>
        </ul>
      </div>
    )
  },
  "top-10-items-cant-put-dumpster": {
    title: "Top 10 Items You Can't Put in a Dumpster",
    excerpt: "Avoid costly mistakes and potential safety hazards by knowing what materials are prohibited in dumpster rentals. Here's everything you need to know about restricted items.",
    image: "/questwasteWebsite/assets/20-yard-dumpster.jpeg",
    author: "Safety Team",
    date: "March 5, 2024",
    slug: "top-10-items-cant-put-dumpster",
    content: (
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Understanding what you can and cannot put in your rental dumpster is crucial for safety, legal compliance, and avoiding additional fees. Here are the top items that are prohibited in dumpsters.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Hazardous Materials</h2>
        <p className="mb-4">
          Paint, solvents, chemicals, and other hazardous materials require special handling and disposal. These materials can be dangerous to workers and the environment.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Electronics</h2>
        <p className="mb-4">
          TVs, computers, phones, and other electronics contain valuable materials that should be recycled through specialized e-waste programs.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Batteries</h2>
        <p className="mb-4">
          All types of batteries, from car batteries to household AA batteries, contain chemicals that can harm the environment if not properly disposed of.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Tires</h2>
        <p className="mb-4">
          Used tires require special recycling processes and cannot be disposed of in regular dumpsters.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Appliances with Freon</h2>
        <p className="mb-4">
          Refrigerators, air conditioners, and freezers contain refrigerants that must be properly removed before disposal.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Asbestos Materials</h2>
        <p className="mb-4">
          Any materials containing asbestos require specialized handling and disposal by certified professionals.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Medical Waste</h2>
        <p className="mb-4">
          Needles, medications, and other medical waste pose health risks and require special disposal methods.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Flammable Materials</h2>
        <p className="mb-4">
          Gasoline, propane tanks, oil, and other flammable materials create safety hazards during transport and disposal.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">9. Food Waste</h2>
        <p className="mb-4">
          Large amounts of food waste can attract pests and create odor problems. Consider composting as an alternative.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">10. Radioactive Materials</h2>
        <p className="mb-4">
          Any radioactive materials require specialized handling and disposal through appropriate channels.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What to Do with Prohibited Items</h2>
        <p className="mb-4">
          For help with disposing of prohibited materials, contact your local waste management authority or environmental services department. Many communities offer special collection days for hazardous materials and electronics.
        </p>
      </div>
    )
  }
};

export async function generateStaticParams() {
  return [
    { slug: 'ultimate-guide-choosing-right-dumpster-size' },
    { slug: 'eco-friendly-waste-management-making-difference' },
    { slug: 'top-10-items-cant-put-dumpster' },
  ];
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button className="bg-qw-green hover:bg-[#238643] text-white">
              Back to Blog
            </Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-white hover:text-qw-green mb-4 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <div className="flex items-center space-x-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarDays size={18} />
                <span>{post.date}</span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {post.content}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <Link href="/blog" className="inline-flex items-center space-x-2 text-qw-green hover:text-[#238643] font-medium">
                <ArrowLeft size={16} />
                <span>All Posts</span>
              </Link>
              <Link href="/contact-us" className="inline-flex items-center space-x-2 text-qw-green hover:text-[#238643] font-medium">
                <span>Get a Quote</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Call to Action */}
      <CallToAction />
    </MainLayout>
  );
}
