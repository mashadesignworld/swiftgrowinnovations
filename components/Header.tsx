'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  Phone, 
  Truck, 
  Menu, 
  X, 
  ChevronDown, 
  ShieldCheck, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Stethoscope, 
  Cpu, 
  Package, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  const navItems = [
    {
      label: 'OFFICE',
      href: '/category/office',
      icon: Briefcase,
      badge: 'Popular',
      featured: {
        title: 'Executive Boardroom Sets',
        desc: 'Custom walnut veneer & acoustic cable-managed conference desks.',
        tag: 'Architectural Grade'
      },
      links: [
        { name: 'Executive & Managerial Desks', href: '/category/office/executive-desks', desc: 'Heavy-duty veneer & steel frames' },
        { name: 'Ergonomic Task & Mesh Chairs', href: '/category/office/ergonomic-seating', desc: 'Lumbar support & multi-lock sync' },
        { name: 'Modular Workstations & Pods', href: '/category/office/workstations', desc: 'Acoustic dividing screen integration' },
        { name: 'Boardroom & Conference Tables', href: '/category/office/boardroom', desc: 'Integrated power modules & cable conduits' },
        { name: 'Filing & Fireproof Credenzas', href: '/category/office/storage', desc: 'Heavy-gauge steel & anti-tilt locks' }
      ]
    },
    {
      label: 'EDUCATION',
      href: '/category/schools',
      icon: GraduationCap,
      badge: 'Contract Standard',
      featured: {
        title: 'Institutional Grade Fitouts',
        desc: 'CBC-aligned double and single student desks with powder-coated steel.',
        tag: 'Heavy Duty'
      },
      links: [
        { name: 'CBC Student Desks & Chairs', href: '/category/schools/student-desks', desc: 'Scratch-resistant phenolic tops' },
        { name: 'Science Laboratory Workstations', href: '/category/schools/lab-furniture', desc: 'Chemical-proof epoxy resin worktops' },
        { name: 'Library Shelving & Reading Pods', href: '/category/schools/library', desc: 'High-density cantilever racking' },
        { name: 'Staffroom & Principal Suites', href: '/category/schools/faculty', desc: 'Durable administrative furniture' },
        { name: 'Dining Hall Benches & Lockers', href: '/category/schools/lockers', desc: 'Stackable reinforced steel units' }
      ]
    },
    {
      label: 'HOSPITAL & LAB',
      href: '/category/hospital-lab',
      icon: Stethoscope,
      badge: 'Clinical Grade',
      featured: {
        title: 'Clinical & Lab Worktops',
        desc: 'Stainless steel grade 304/316 fixtures and anti-microbial surfaces.',
        tag: 'ISO Certified'
      },
      links: [
        { name: 'Hospital Beds & Examination Couches', href: '/category/hospital-lab/beds', desc: 'Hydraulic & multi-section adjustable' },
        { name: 'Laboratory Workbenches & Fume Cupboards', href: '/category/hospital-lab/workstations', desc: 'Acid and solvent resistant' },
        { name: 'Surgical Trolleys & Drip Stands', href: '/category/hospital-lab/trolleys', desc: 'Seamless welded SS304 construction' },
        { name: 'Pharmacy & Drug Storage Cabinets', href: '/category/hospital-lab/storage', desc: 'Digital locking narcotics compartments' },
        { name: 'Waiting Area High-Traffic Seating', href: '/category/hospital-lab/waiting-chairs', desc: 'Easy-disinfect PU and steel beam seats' }
      ]
    },
    {
      label: 'ICT & HARDWARE',
      href: '/category/ict-equipment',
      icon: Cpu,
      badge: null,
      featured: {
        title: 'Turnkey ICT Workstations',
        desc: 'Complete lab rollouts: Core i5/i7 stations, laser printers, & monitors.',
        tag: 'Enterprise Ready'
      },
      links: [
        { name: 'Institutional Desktop & All-in-One PCs', href: '/category/ict-equipment/computers', desc: 'Commercial HP, Dell & Lenovo builds' },
        { name: 'Heavy-Duty Network Laser Printers', href: '/category/ict-equipment/printers', desc: 'High-yield multi-function units' },
        { name: 'Server Racks & UPS Backup Power', href: '/category/ict-equipment/infrastructure', desc: '6U to 42U rack enclosures with surge arrays' },
        { name: 'Interactive Smart Boards & Projectors', href: '/category/ict-equipment/displays', desc: '4K touch displays for modern training' }
      ]
    },
    {
      label: 'SUPPLIES & FITOUT',
      href: '/category/general-supplies',
      icon: Package,
      badge: null,
      featured: {
        title: 'Custom Joinery & Site Fitout',
        desc: 'Turnkey space planning, 3D layouts, and general institutional supplies.',
        tag: 'Direct Contractor'
      },
      links: [
        { name: 'Custom Architectural Joinery', href: '/category/general-supplies/joinery', desc: 'Bespoke reception desks & accent wall panels' },
        { name: 'Institutional Consumables Supply', href: '/category/general-supplies/procurement', desc: 'Tender & bulk procurement pipelines' },
        { name: 'Space Planning & 3D Visuals', href: '/category/general-supplies/space-planning', desc: 'CAD layout drawings and spatial optimization' }
      ]
    }
  ];

  const toggleMobileSection = (label: string) => {
    setMobileExpandedSection(mobileExpandedSection === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200/80 backdrop-blur-md">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#1E2022] text-stone-300 text-[11px] font-medium tracking-wide py-2 px-4 sm:px-8 border-b border-[#E5BF3B]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#E5BF3B]" />
              Direct Commercial Supply across Kenya & East Africa
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-300">
              <Phone className="w-3.5 h-3.5 text-[#E5BF3B]" />
              Corporate Sales: <strong className="text-white font-semibold">+254 700 000 000</strong>
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:flex items-center gap-1.5 text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E5BF3B]" />
              Registered Institutional Contractor
            </span>
            <Link 
              href="/request-quote" 
              className="inline-flex items-center gap-1.5 text-[#E5BF3B] hover:text-white font-semibold transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              Request B2B Quotation / RFP
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-6">
        
        {/* Brand Monogram & Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#1E2022] border border-[#E5BF3B] flex items-center justify-center shadow-sm group-hover:bg-[#7A5333] transition-all">
            <span className="text-[#E5BF3B] font-serif font-black text-xl leading-none">SG</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl font-bold tracking-tight text-[#1E2022] group-hover:text-[#7A5333] transition-colors leading-tight">
                SWIFT GROW
              </span>
            </div>
            <span className="text-[10px] tracking-[0.2em] text-[#7A5333] font-semibold uppercase">
              Innovations
            </span>
          </div>
        </Link>

        {/* Desktop Mega-Menu Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, idx) => (
            <div 
              key={idx}
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown(idx)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`relative px-3.5 py-2 text-[12px] tracking-wider uppercase font-bold transition-all flex items-center gap-1.5 rounded-md ${
                  activeDropdown === idx 
                    ? 'text-[#1E2022] bg-stone-100' 
                    : 'text-stone-700 hover:text-[#1E2022] hover:bg-stone-50'
                }`}
              >
                <span>{item.label}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === idx ? 'rotate-180 text-[#E5BF3B]' : 'text-stone-400'
                }`} />
                
                {/* Active Gold Underline Bar */}
                <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#E5BF3B] transition-transform duration-200 ${
                  activeDropdown === idx ? 'scale-x-100' : 'scale-x-0'
                }`} />
              </Link>

              {/* Mega Dropdown Panel */}
              {activeDropdown === idx && (
                <div className="absolute top-full left-0 -ml-12 w-[640px] bg-white border border-stone-200/90 rounded-xl shadow-2xl p-6 grid grid-cols-12 gap-6 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                  {/* Left Column: Direct Subcategories */}
                  <div className="col-span-7 space-y-1">
                    <div className="flex items-center gap-2 pb-2 mb-2 border-b border-stone-100">
                      <item.icon className="w-4 h-4 text-[#E5BF3B]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1E2022]">
                        {item.label} Category Specs
                      </span>
                    </div>

                    <div className="space-y-1">
                      {item.links.map((sub, sIdx) => (
                        <Link 
                          key={sIdx} 
                          href={sub.href}
                          className="group/item flex flex-col px-3 py-2 rounded-lg hover:bg-stone-50 transition-colors"
                        >
                          <span className="text-xs font-bold text-[#1E2022] group-hover/item:text-[#7A5333] transition-colors flex items-center justify-between">
                            {sub.name}
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#E5BF3B]" />
                          </span>
                          <span className="text-[11px] text-stone-500 line-clamp-1">
                            {sub.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Spec Card / Featured Teaser */}
                  <div className="col-span-5 bg-[#1E2022] text-white p-5 rounded-lg flex flex-col justify-between relative overflow-hidden border border-[#E5BF3B]/30">
                    <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-[#E5BF3B]/10 rounded-full blur-xl pointer-events-none" />
                    
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#E5BF3B] uppercase tracking-widest mb-2">
                        <Sparkles className="w-3 h-3" />
                        {item.featured.tag}
                      </div>
                      <h4 className="font-serif text-base font-bold text-white mb-2 leading-snug">
                        {item.featured.title}
                      </h4>
                      <p className="text-xs text-stone-300 leading-relaxed">
                        {item.featured.desc}
                      </p>
                    </div>

                    <Link 
                      href={item.href}
                      className="mt-4 inline-flex items-center justify-between w-full text-xs font-bold bg-[#E5BF3B] text-[#1E2022] px-3.5 py-2 rounded-md hover:bg-[#d8b02e] transition-colors shadow-sm"
                    >
                      <span>Explore Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search, Action Buttons & RFQ Trigger */}
        <div className="flex items-center gap-3">
          {/* Quick Search */}
          <div className="relative hidden xl:block w-64">
            <input
              type="text"
              placeholder="Search desks, CBC sets, lab rigs..."
              className="w-full bg-[#F8F9FA] border border-stone-300 rounded-lg py-2 pl-3.5 pr-9 text-xs text-[#1E2022] placeholder-stone-400 focus:outline-none focus:border-[#E5BF3B] focus:ring-2 focus:ring-[#E5BF3B]/20 transition-all"
            />
            <Search className="w-3.5 h-3.5 text-stone-400 absolute right-3 top-3" />
          </div>

          {/* Quick Wishlist/Bookmark */}
          <button 
            aria-label="Saved Specifications" 
            className="p-2 text-[#1E2022] hover:text-[#E5BF3B] hover:bg-stone-100 rounded-lg transition-colors border border-transparent hover:border-stone-200"
          >
            <Heart className="w-4 h-4" />
          </button>

          {/* Direct RFQ Action Button */}
          <Link
            href="/request-quote"
            className="hidden sm:inline-flex items-center gap-2 bg-[#1E2022] text-[#E5BF3B] border border-[#E5BF3B] hover:bg-[#E5BF3B] hover:text-[#1E2022] px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Trigger */}
          <button 
            className="lg:hidden p-2 text-[#1E2022] rounded-lg border border-stone-200 hover:bg-stone-100" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Thin Gold Aesthetic Accent Border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#1E2022] via-[#E5BF3B] to-[#7A5333]" />

      {/* 3. MOBILE DRAWER WITH ACCORDION SECTIONS */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-5 py-6 space-y-5 shadow-2xl max-h-[85vh] overflow-y-auto">
          {/* Mobile Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search school furniture, lab fixtures, ICT..."
              className="w-full bg-[#F8F9FA] border border-stone-300 rounded-lg py-2.5 pl-4 pr-10 text-xs text-[#1E2022]"
            />
            <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-3" />
          </div>

          {/* Accordion Categories */}
          <div className="space-y-2">
            {navItems.map((item, idx) => (
              <div key={idx} className="border border-stone-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleMobileSection(item.label)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-stone-50 hover:bg-stone-100 text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <item.icon className="w-4 h-4 text-[#7A5333]" />
                    <span className="text-xs font-bold tracking-wider text-[#1E2022] uppercase">
                      {item.label}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-200 ${
                    mobileExpandedSection === item.label ? 'rotate-180 text-[#E5BF3B]' : ''
                  }`} />
                </button>

                {mobileExpandedSection === item.label && (
                  <div className="p-3 bg-white space-y-2 border-t border-stone-100">
                    {item.links.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded-md hover:bg-stone-50"
                      >
                        <div className="text-xs font-semibold text-[#1E2022]">{sub.name}</div>
                        <div className="text-[10px] text-stone-500">{sub.desc}</div>
                      </Link>
                    ))}
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-center mt-2 py-2 text-xs font-bold text-[#E5BF3B] bg-[#1E2022] rounded-md"
                    >
                      View All {item.label} Products →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Quote CTA */}
          <div className="pt-2">
            <Link
              href="/request-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#E5BF3B] text-[#1E2022] py-3 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <FileText className="w-4 h-4" />
              Request Formal Quotation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}