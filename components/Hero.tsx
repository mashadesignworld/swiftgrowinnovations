'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Laptop, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Truck, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#F8F9FA] overflow-hidden">
      {/* Subtle Grid Accent Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E2022 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* MAIN B2B HERO GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        
        {/* Copy & Value Proposition Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1E2022] text-[#E5BF3B] rounded-full text-xs font-bold tracking-wider uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E5BF3B] animate-pulse" />
            Leading Commercial & Institutional Supplier
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-[#1E2022] leading-[1.15] tracking-tight">
            Institutional Furniture & ICT Solutions{' '}
            <span className="text-[#7A5333] underline decoration-[#E5BF3B] decoration-4 underline-offset-4">
              Engineered for Performance.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-stone-600 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-normal">
            Complete turnkey fit-outs for offices, schools, medical laboratories, and enterprise IT infrastructure across Kenya. Certified durability, bulk procurement pricing, and direct installation services.
          </p>

          {/* Core Capability Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {[
              { label: 'Corporate Office', icon: Building2 },
              { label: 'Schools & Academies', icon: GraduationCap },
              { label: 'Hospitals & Labs', icon: Stethoscope },
              { label: 'ICT Hardware', icon: Laptop },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2 bg-white border border-stone-200 rounded-lg p-2.5 shadow-2xs">
                  <Icon className="w-4 h-4 text-[#E5BF3B] shrink-0" />
                  <span className="text-xs font-bold text-[#1E2022] truncate">{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* Action Callouts */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
            <Link 
              href="#rfq"
              className="bg-[#1E2022] hover:bg-[#7A5333] text-white font-bold px-7 py-4 rounded-xl transition-all duration-200 text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 border-b-4 border-[#E5BF3B] shadow-md hover:shadow-lg"
            >
              <FileText className="w-4 h-4 text-[#E5BF3B]" />
              <span>Request Formal Quote / Tender</span>
            </Link>

            <Link 
              href="/category/office"
              className="bg-white hover:bg-stone-50 text-[#1E2022] border border-stone-300 font-bold px-6 py-4 rounded-xl transition-all duration-200 text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-2xs"
            >
              <span>Explore Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#7A5333]" />
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs text-stone-500 border-t border-stone-200">
            <span className="flex items-center gap-1.5 font-semibold text-[#1E2022]">
              <CheckCircle2 className="w-4 h-4 text-[#E5BF3B]" /> Verified Tax Credit & Govt Partner
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-[#1E2022]">
              <CheckCircle2 className="w-4 h-4 text-[#E5BF3B]" /> Direct Bulk Imports & Assembly
            </span>
          </div>
        </div>

        {/* Media Column (Image Showcase + Dynamic Overlay Badge) */}
        <div className="lg:col-span-5">
          <div className="relative pt-4 sm:pt-6">
            
            {/* Primary Visual Showcase Box */}
            <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#1E2022] group">
              {/* High-Resolution Unsplash Image Placeholder */}
                            <Image
                src="/1.jpg"
                alt="Swift Grow Innovations Office & Institutional Fit-Out Showcase"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              {/* Dark Gradient Overlay for High Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2022]/90 via-[#1E2022]/20 to-black/30 pointer-events-none" />

              {/* Top Status Bar Inside Image */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="bg-[#E5BF3B] text-[#1E2022] font-black text-[10px] tracking-widest px-3 py-1 rounded-full uppercase shadow-xs">
                  Institutional Fit-Outs
                </span>
                <span className="text-white/80 text-[10px] font-mono bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  SWIFT-GROW // B2B
                </span>
              </div>

              {/* Bottom Feature Overlay Card Inside Image */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 text-white z-10 flex items-center justify-between shadow-lg">
               
                <div className="h-2.5 w-2.5 rounded-full bg-[#E5BF3B] animate-ping shrink-0" />
              </div>
            </div>

            {/* Non-overlapping Trust Counter Badge (Clean Floating Positioning) */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 bg-white rounded-xl shadow-xl border border-stone-200 p-3.5 sm:p-4 flex items-center gap-3 z-20 max-w-xs">
              <div className="p-2.5 bg-[#E5BF3B]/20 rounded-lg text-[#1E2022] shrink-0">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#7A5333]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-black text-[#1E2022]">100% Guaranteed Quality</p>
                <p className="text-[10px] sm:text-[11px] text-stone-500 font-medium">Compliance & Commercial Warranty</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* TRUST GUARANTEE & SERVICE BAR */}
      <div className="border-t border-stone-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-left">
          
          <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#F8F9FA] border border-stone-100">
            <div className="p-3 bg-[#1E2022] rounded-lg text-[#E5BF3B] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#1E2022] uppercase tracking-wider">Nationwide Logistics</h4>
              <p className="text-xs text-stone-500 mt-0.5">Prompt delivery & installation across Kenya</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#F8F9FA] border border-stone-100">
            <div className="p-3 bg-[#1E2022] rounded-lg text-[#E5BF3B] shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#1E2022] uppercase tracking-wider">Institutional Quotations</h4>
              <p className="text-xs text-stone-500 mt-0.5">Itemized RFQ & LPO billing support</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-3.5 rounded-xl bg-[#F8F9FA] border border-stone-100 sm:col-span-2 md:col-span-1">
            <div className="p-3 bg-[#1E2022] rounded-lg text-[#E5BF3B] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-[#1E2022] uppercase tracking-wider">Rapid Project Turnaround</h4>
              <p className="text-xs text-stone-500 mt-0.5">Streamlined supply chain for tight deadlines</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}