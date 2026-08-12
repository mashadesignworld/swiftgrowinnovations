'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Compass, 
  FileCheck2,
  ChevronLeft,
  ChevronRight,
  Building2,
  GraduationCap,
  Stethoscope,
  Laptop
} from 'lucide-react';

// Hero Banners Data
const HERO_SLIDES = [
  {
    id: 1,
    title: 'Transform Your Workplace',
    subtitle: 'Ergonomic Executive Desks & Task Seating',
    ctaText: 'Shop Office Solutions',
    ctaHref: '/category/office',
    badge: '2026 Collection',
    image: '/5.jpg', 
  },
  {
    id: 2,
    title: 'CBC-Aligned School Furniture',
    subtitle: 'Durable Desks, Chairs & Academy Fit-Outs',
    ctaText: 'Explore Education Catalog',
    ctaHref: '/category/schools',
    badge: 'Institutional Standard',
    image: '/6.jpg',
  },
  {
    id: 3,
    title: 'Clinical & Laboratory Furniture',
    subtitle: 'Heavy-Duty Anti-Bacterial Worktops & Seating',
    ctaText: 'Request Healthcare Spec Sheet',
    ctaHref: '/category/hospital-lab',
    badge: 'ISO Certified',
    image: '/8.png',
  }
];

// Quick Category Cards (NBF-Style Visual Navigation)
const VISUAL_CATEGORIES = [
  {
    title: 'Office Furniture',
    caption: 'Executive desks & ergonomic seating',
    icon: Building2,
    href: '/category/office',
    bgColor: 'bg-stone-900',
    accentColor: 'text-[#E5BF3B]'
  },
  {
    title: 'School & CBC',
    caption: 'Student desks, lockers & lab tables',
    icon: GraduationCap,
    href: '/category/schools',
    bgColor: 'bg-stone-900',
    accentColor: 'text-[#E5BF3B]'
  },
  {
    title: 'Hospital & Lab',
    caption: 'Clinical worktops & medical carts',
    icon: Stethoscope,
    href: '/category/hospital-lab',
    bgColor: 'bg-stone-900',
    accentColor: 'text-[#E5BF3B]'
  },
  {
    title: 'ICT & Infrastructure',
    caption: 'Server racks, workstations & hardware',
    icon: Laptop,
    href: '/category/ict-equipment',
    bgColor: 'bg-stone-900',
    accentColor: 'text-[#E5BF3B]'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-advance hero slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section className="bg-stone-100 text-[#1E2022] font-sans">
      
      {/* 1. TOP B2B QUICK SEARCH & SPACE PLANNING BANNER */}
      <div className="bg-[#1E2022] text-white py-3 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs">
            <span className="bg-[#E5BF3B] text-[#1E2022] font-bold px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider">
              Free Service
            </span>
            <span className="text-stone-300">Need custom layout support? <strong>Get Free 3D Space Planning & Quotations</strong></span>
          </div>

          {/* Quick Search Bar */}
          <form 
            onSubmit={(e) => { e.preventDefault(); if (searchQuery) window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`; }}
            className="relative w-full md:w-80"
          >
            <input 
              type="text"
              placeholder="Search chairs, desks, lab furniture..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 text-white placeholder-stone-400 text-xs rounded-lg pl-9 pr-4 py-1.5 focus:outline-none focus:border-[#E5BF3B] transition-colors"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          </form>
        </div>
      </div>

      {/* 2. MAIN VISUAL HERO SLIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] sm:h-[480px] lg:h-[520px] bg-[#1E2022] border border-stone-200">
          
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* High-Impact Image Background */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className="object-cover object-center brightness-75 scale-100 hover:scale-105 transition-transform duration-1000"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />

              {/* Gradient Overlay for Crisp Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

              {/* Hero Content Overlay */}
              <div className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-center max-w-2xl text-white">
                <span className="inline-block bg-[#E5BF3B] text-[#1E2022] font-black text-[11px] tracking-widest px-3 py-1 rounded-md uppercase w-fit mb-4 shadow-sm">
                  {slide.badge}
                </span>

                <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight mb-3">
                  {slide.title}
                </h1>

                <p className="text-stone-300 text-base sm:text-lg font-normal mb-8 leading-relaxed max-w-lg">
                  {slide.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={slide.ctaHref}
                    className="bg-[#E5BF3B] hover:bg-[#d8b02e] text-[#1E2022] font-extrabold px-7 py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <span>{slide.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/request-quote"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all"
                  >
                    Request Bulk RFQ
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlide ? 'w-8 bg-[#E5BF3B]' : 'w-2 bg-white/50 hover:bg-white'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* 3. NBF-STYLE VISUAL CATEGORY QUICK-CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VISUAL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                href={cat.href}
                className="group relative bg-white rounded-xl p-5 border border-stone-200 shadow-xs hover:shadow-md hover:border-[#E5BF3B] transition-all flex items-start gap-4 overflow-hidden"
              >
                <div className={`p-3 rounded-lg ${cat.bgColor} text-white shrink-0 group-hover:bg-[#E5BF3B] group-hover:text-[#1E2022] transition-colors`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[#1E2022] group-hover:text-[#7A5333] transition-colors truncate">
                      {cat.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#E5BF3B] group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                    {cat.caption}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 4. VALUE PROPOSITION / TRUST GUARANTEE BAR */}
      <div className="border-t border-stone-200 bg-white py-6 px-4 sm:px-8 mt-2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-stone-100 border border-stone-200 text-[#1E2022] shrink-0">
              <Truck className="w-5 h-5 text-[#E5BF3B]" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#1E2022] uppercase tracking-wider">Nationwide Logistics</h4>
              <p className="text-xs text-stone-500 mt-0.5">Prompt delivery & assembly across Kenya</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-stone-100 border border-stone-200 text-[#1E2022] shrink-0">
              <Compass className="w-5 h-5 text-[#E5BF3B]" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#1E2022] uppercase tracking-wider">Free Space Planning</h4>
              <p className="text-xs text-stone-500 mt-0.5">2D & 3D layout renders for corporate spaces</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-stone-100 border border-stone-200 text-[#1E2022] shrink-0">
              <FileCheck2 className="w-5 h-5 text-[#E5BF3B]" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#1E2022] uppercase tracking-wider">Fast B2B RFQ Quotes</h4>
              <p className="text-xs text-stone-500 mt-0.5">Itemized tenders processed in under 24hrs</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-stone-100 border border-stone-200 text-[#1E2022] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#E5BF3B]" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#1E2022] uppercase tracking-wider">Commercial Warranty</h4>
              <p className="text-xs text-stone-500 mt-0.5">Certified heavy-duty contractor quality</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}