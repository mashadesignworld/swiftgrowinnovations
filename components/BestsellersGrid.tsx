'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  Laptop, 
  FileText, 
  MessageCircle, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface Product {
  id: string;
  title: string;
  category: string;
  specs: string;
  priceKsh: number;
  originalPriceKsh?: number;
  badge?: string;
  imageUrl: string;
  imageAlt: string;
}

const INSTITUTIONAL_BESTSELLERS: Product[] = [
  {
    id: '1',
    title: 'Executive Modular Workstation & Ergonomic Desk',
    category: 'Office',
    specs: 'Cable management grommets, lockable drawer unit, scratch-proof laminate',
    priceKsh: 48500,
    originalPriceKsh: 55000,
    badge: 'TOP B2B CHOICE',
    imageUrl: '/5.jpg',
    imageAlt: 'Executive modular workstation with integrated cable routing',
  },
  {
    id: '2',
    title: 'Dual Student Classroom Desk & Bench Set',
    category: 'Schools & Academy',
    specs: 'Heavy-duty steel frame, moisture-resistant top, rounded safety edges',
    priceKsh: 14500,
    badge: 'BULK SUPPLY',
    imageUrl: '/6.jpg',
    imageAlt: 'Durable dual-seater school classroom desk and bench set',
  },
  {
    id: '3',
    title: 'Chemical-Resistant Science Laboratory Workbench',
    category: 'Hospital & Lab',
    specs: 'Epoxy resin surface, gas/water tap fittings, reagent storage shelf',
    priceKsh: 82000,
    originalPriceKsh: 95000,
    badge: 'CERTIFIED LAB',
    imageUrl: '/8.png',
    imageAlt: 'High-performance science laboratory workbench with chemical-resistant top',
  },
  {
    id: '4',
    title: 'High-Back Ergonomic Lumbar Executive Mesh Chair',
    category: 'Office',
    specs: 'Adjustable 3D armrests, dynamic lumbar support, breathable mesh back',
    priceKsh: 28500,
    originalPriceKsh: 34000,
    badge: 'BESTSELLER',
    imageUrl: '/3.jpg',
    imageAlt: 'High-back ergonomic lumbar support executive office chair',
  },
  {
    id: '5',
    title: 'Enterprise Computer Lab Station & Monitor Mounts',
    category: 'ICT & Equipment',
    specs: 'Integrated CPU housing, surge protection channels, anti-theft mount',
    priceKsh: 62000,
    badge: 'ICT READY',
    imageUrl: '/7.png',
    imageAlt: 'Enterprise computer lab workstation with cable management and monitor mounts',
  },
  {
    id: '6',
    title: 'Heavy-Duty Steel Archival & Medical File Cabinet',
    category: 'General Supplies',
    specs: 'Central locking system, anti-tilt mechanism, 50kg load per shelf',
    priceKsh: 36500,
    originalPriceKsh: 42000,
    badge: 'INSTITUTIONAL',
    imageUrl: '/4.jpg',
    imageAlt: 'Heavy-duty 4-drawer steel archival filing cabinet',
  },
];

export default function BestsellersGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: 'All', icon: Sparkles },
    { label: 'Office', icon: Building2 },
    { label: 'Schools & Academy', icon: GraduationCap },
    { label: 'Hospital & Lab', icon: Stethoscope },
    { label: 'ICT & Equipment', icon: Laptop },
  ];

  const filteredProducts = selectedCategory === 'All'
    ? INSTITUTIONAL_BESTSELLERS
    : INSTITUTIONAL_BESTSELLERS.filter(p => p.category === selectedCategory);

  const generateWhatsAppLink = (product: Product) => {
    const message = encodeURIComponent(
      `Hello Swift Grow Innovations Ltd, I am inquiring about the ${product.title} (KSh ${product.priceKsh.toLocaleString()}). Please send us an official quotation / spec sheet.`
    );
    return `https://wa.me/254721595989?text=${message}`;
  };

  return (
    <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* SECTION HEADER & TABS */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E2022] text-[#E5BF3B] text-[10px] font-black tracking-widest uppercase rounded-full mb-3 shadow-2xs">
            <Check className="w-3 h-3 text-[#E5BF3B]" /> Proven Institutional Grade
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#1E2022] tracking-tight">
            Featured Procurement Solutions
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-1 max-w-xl">
            High-demand furniture, laboratory equipment, and ICT workstations supplied to schools, hospitals, and corporate headquarters.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 w-full lg:w-auto no-scrollbar">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedCategory === tab.label;
            return (
              <button
                key={tab.label}
                onClick={() => setSelectedCategory(tab.label)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all duration-200 shadow-2xs ${
                  isActive
                    ? 'bg-[#1E2022] text-[#E5BF3B] border border-[#E5BF3B]'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-100 hover:text-[#1E2022]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#E5BF3B]' : 'text-[#7A5333]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="group bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Card Visual Header */}
            <div className="relative aspect-[4/3] bg-[#1E2022] overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.imageAlt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Badge Overlay */}
              {product.badge && (
                <span className="absolute top-3 left-3 bg-[#E5BF3B] text-[#1E2022] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  {product.badge}
                </span>
              )}

              {/* Category Pill Overlay */}
              <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                {product.category}
              </span>
            </div>

            {/* Card Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif font-bold text-lg text-[#1E2022] group-hover:text-[#7A5333] transition-colors leading-snug">
                  {product.title}
                </h3>
                <p className="text-xs text-stone-500 mt-2 leading-relaxed">
                  <strong className="text-stone-700">Key Specs:</strong> {product.specs}
                </p>
              </div>

              {/* Price & Actions */}
              <div className="space-y-4 pt-4 border-t border-stone-100">
                <div className="flex items-baseline gap-2">
                  <span className="font-black text-xl text-[#1E2022]">
                    KSh {product.priceKsh.toLocaleString()}
                  </span>
                  {product.originalPriceKsh && (
                    <span className="text-xs text-stone-400 line-through font-medium">
                      KSh {product.originalPriceKsh.toLocaleString()}
                    </span>
                  )}
                  <span className="ml-auto text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm">
                    Excl. VAT / Bulk Quote
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href="#rfq"
                    className="flex items-center justify-center gap-1.5 bg-[#1E2022] hover:bg-[#7A5333] text-white text-xs font-bold py-3 rounded-xl transition-all duration-200 border-b-2 border-[#E5BF3B]"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#E5BF3B]" />
                    Request RFQ
                  </a>
                  <a
                    href={generateWhatsAppLink(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 border border-emerald-600 text-emerald-800 hover:bg-emerald-50 text-xs font-bold py-3 rounded-xl transition-all duration-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER CTA BAR */}
      <div className="mt-12 p-6 rounded-2xl bg-[#F8F9FA] border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-serif text-lg font-bold text-[#1E2022]">Need Custom Equipment or Large Scale Tenders?</h4>
          <p className="text-xs text-stone-600 mt-0.5">We provide tailored spatial layout design, direct assembly, and official institutional invoicing.</p>
        </div>
        <a
          href="#rfq"
          className="bg-[#1E2022] hover:bg-[#7A5333] text-white px-6 py-3 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-2 whitespace-nowrap transition-all border-b-2 border-[#E5BF3B]"
        >
          <span>Submit Project Specs</span>
          <ArrowRight className="w-4 h-4 text-[#E5BF3B]" />
        </a>
      </div>
    </section>
  );
}