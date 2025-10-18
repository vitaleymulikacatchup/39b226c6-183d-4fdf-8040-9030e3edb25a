"use client"

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { CheckCircle, Star, Zap } from 'lucide-react';

const assetMap = [
  {"id":"hero","url":"https://images.pexels.com/photos/746164/pexels-photo-746164.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a sleek yellow Ferrari sports car, showcasing luxury automotive design."},
  {"id":"about-image","url":"https://images.pexels.com/photos/34327213/pexels-photo-34327213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"                               Lime Green Aston Martin"},
  {"id":"feature-1","url":"https://images.pexels.com/photos/3972753/pexels-photo-3972753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Sleek and modern BMW car interior showcasing a stylish steering wheel and digital dashboard."},
  {"id":"feature-2","url":"https://images.pexels.com/photos/28490738/pexels-photo-28490738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up image of a car's engine start stop button on the dashboard."},
  {"id":"feature-3","url":"https://images.pexels.com/photos/28490738/pexels-photo-28490738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up image of a car's engine start stop button on the dashboard."},
  {"id":"product-1","url":"https://images.pexels.com/photos/5195367/pexels-photo-5195367.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a restored red Ferrari at an outdoor car show in Farmington, CT."},
  {"id":"product-2","url":"https://images.pexels.com/photos/14836357/pexels-photo-14836357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A stylish blue SUV parked by the ocean in Busan, South Korea, on a sunny day."},
  {"id":"product-3","url":"https://images.pexels.com/photos/2937422/pexels-photo-2937422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Sleek black and gold convertible car focused on modern design and style, parked outdoors."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Positive young woman in uniform smiling while standing at counter desk in  cafe"},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/4173192/pexels-photo-4173192.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Full length of cheerful smiling mother in jeans holding hands with cute little girl and looking at car wheel in car showroom in daylight"},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/30688912/pexels-photo-30688912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman enjoying grocery shopping in a vibrant Lagos supermarket aisle."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/8425035/pexels-photo-8425035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A professional chauffeur assists a businesswoman exiting a luxury car in front of a modern building."}]

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <NavbarStyleMinimal
            logoSrc={assetMap.find(a => a.id === "logo")?.url || "/public/images/placeholder.webp"}
            brandName="RoyalCars"
          />
        </div>
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Experience Royal Luxury"
            description="Unveiling elegance in every ride"
            tag="New Arrival"
            imageSrc={assetMap.find(a => a.id === "hero")?.url || "/public/images/placeholder.webp"}
            buttons={[
              { text: "Explore Models", href: "products" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Royal Cars offers the pinnacle of elegance and performance. Discover our dedication to excellence in every detail."
            buttons={[{ text: "Our Story", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Features"
            description="Innovative technology and luxurious comfort"
            features={[
              { title: "Interior Finishing", description: "Experience luxury in every touch with premium materials.", icon: CheckCircle },
              { title: "Engine Performance", description: "Powerful engines for an unrivaled drive.", icon: Zap },
              { title: "Sleek Design", description: "Elegance and aerodynamics for the modern era.", icon: Star }
            ]}
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardOne
            title="Our Models"
            description="Explore our range of luxury cars."
            products={[
              { id: "1", name: "Luxury Sedan", price: "$80,000", imageSrc: assetMap.find(a => a.id === "product-1")?.url || "/public/images/placeholder.webp" },
              { id: "2", name: "Luxury SUV", price: "$95,000", imageSrc: assetMap.find(a => a.id === "product-2")?.url || "/public/images/placeholder.webp" },
              { id: "3", name: "Sports Car", price: "$120,000", imageSrc: assetMap.find(a => a.id === "product-3")?.url || "/public/images/placeholder.webp" }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="Our Customers"
            description="See what our satisfied clients have to say."
            testimonials={[
              { id: "1", name: "Sarah Johnson", role: "CEO", company: "TechCorp", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-1")?.url || "/public/images/placeholder.webp" },
              { id: "2", name: "Michael Chen", role: "CTO", company: "InnovateLab", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-2")?.url || "/public/images/placeholder.webp" },
              { id: "3", name: "Emily Rodriguez", role: "Marketing Director", company: "GrowthCo", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-3")?.url || "/public/images/placeholder.webp" },
              { id: "4", name: "David Kim", role: "Product Manager", company: "StartupXYZ", rating: 5, imageSrc: assetMap.find(a => a.id === "testimonial-4")?.url || "/public/images/placeholder.webp" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Contact Us"
            description="Reach out for inquiries or to schedule a test drive."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Your message", rows: 5, required: true }}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Features", href: "features" }] },
              { items: [{ label: "About", href: "about" }] }
            ]}
            logoText="RoyalCars"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
