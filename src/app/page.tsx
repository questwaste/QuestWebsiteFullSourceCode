import HeroSection from '@/components/home/HeroSection';
import DumpsterSizes from '@/components/home/DumpsterSizes';
import ServiceFeatures from '@/components/home/ServiceFeatures';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CallToAction from '@/components/home/CallToAction';
import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <DumpsterSizes />
      <ServiceFeatures />
      <Testimonials />
      <WhyChooseUs />
      <CallToAction />
    </MainLayout>
  );
}
