"use client";

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, Phone, Mail } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    optIn: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOptInChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, optIn: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - Replace these with your actual values from EmailJS dashboard
      const serviceId = 'service_spw77l3'; // Replace with your Service ID
      const templateId = 'template_4dtfdcg'; // Replace with your Template ID
      const publicKey = '27ZHYZAA1yAVqN_RF'; // Replace with your Public Key

      // Check if EmailJS is properly configured
      if (serviceId === 'service_questwaste' || templateId === 'template_contact' || publicKey === 'YOUR_PUBLIC_KEY') {
        // EmailJS not configured yet - show setup message
        alert(`Contact form submitted successfully!\n\nTo enable email delivery, please configure EmailJS as described in EMAIL_SETUP.md\n\nForm data:\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);

        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          optIn: false
        });
        return;
      }

      // Format the email data
      const templateParams = {
        to_email: 'support@questwaste.net',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        opt_in: formData.optIn ? 'Yes' : 'No',
        form_data: `
Contact Form Submission:

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
SMS Opt-in: ${formData.optIn ? 'Yes' : 'No'}

Message:
${formData.message}
        `
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        optIn: false
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-80 flex items-center"
        style={{
          backgroundImage: 'url(/questwasteWebsite/assets/contact-hero-background.jpg)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="md:col-span-1 bg-gray-900 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-poppins font-bold mb-6">Drop Us a Line</h2>
              <p className="mb-8">
                Here to rent a dumpster in the Metro Detroit, Michigan or Miami Metro, Florida area but unsure about what size you need? Or are you looking to talk with experts first before you rent? You can call, text or email us and we'd love to help!
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-qw-green mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">HQ: Detroit, MI</h3>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="text-qw-green mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Email:</h3>
                    <a
                      href="mailto:support@questwaste.net"
                      className="hover:text-qw-green transition-colors"
                    >
                      support@questwaste.net
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-qw-green mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold">Phone:</h3>
                    <a
                      href="tel:2485094431"
                      className="hover:text-qw-green transition-colors"
                    >
                      (248) 509-4431
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-poppins font-bold mb-8">Get in Touch</h2>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  ✅ Thank you for your message! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  ❌ Sorry, there was an error sending your message. Please try again or call us directly at (248) 509-4431.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-2">First Name *</label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2">Last Name *</label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email *</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">Phone *</label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full h-32"
                    placeholder="Tell us about your project or ask any questions..."
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="optIn"
                    checked={formData.optIn}
                    onCheckedChange={handleOptInChange}
                    disabled={isSubmitting}
                  />
                  <label htmlFor="optIn" className="text-sm">
                    By checking this box, you give consent to Quest Waste Solutions to send SMS messages. Message frequency may vary. Message and data rates may apply. Reply STOP to unsubscribe and HELP for assistance.
                  </label>
                </div>
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-qw-green hover:bg-[#238643] text-white py-2 px-6 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  By submitting this form, you agree to Quest Waste Solutions's
                  <a href="/terms" className="text-qw-green mx-1">terms</a>
                  and
                  <a href="/privacy" className="text-qw-green mx-1">privacy</a>
                  policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
