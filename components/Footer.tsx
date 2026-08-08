'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Truck, 
  FileText,
  ChevronRight,
  Send,
  
} from 'lucide-react';
// Custom Brand SVGs to replace missing lucide-react brand exports
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const categories = [
    { name: 'Executive Office Desks', href: '/category/office/executive-desks' },
    { name: 'Ergonomic Seating', href: '/category/office/ergonomic-seating' },
    { name: 'CBC Student Desks', href: '/category/schools/student-desks' },
    { name: 'Hospital & Lab Worktops', href: '/category/hospital-lab/workstations' },
    { name: 'Commercial ICT Hardware', href: '/category/ict-equipment' },
    { name: 'Architectural Joinery', href: '/category/general-supplies/joinery' }
  ];

  const quickLinks = [
    { name: 'About Swift Grow', href: '/about' },
    { name: 'Request B2B Quotation', href: '/request-quote' },
    { name: 'Corporate Tender Portal', href: '/tenders' },
    { name: 'Space Planning & 3D Render', href: '/services/space-planning' },
    { name: 'Quality Assurance & Warranty', href: '/warranty' },
    { name: 'Privacy Policy', href: '/privacy-policy' }
  ];

  return (
    <footer className="bg-[#111213] text-stone-300 font-sans border-t-4 border-[#E5BF3B] relative overflow-hidden">
      {/* Background Subtle Accent Pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E5BF3B]/5 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />

      {/* 1. TRUST BADGES / VALUE PROPOSITION BAR */}
      <div className="border-b border-stone-800 bg-[#18191B]/80 backdrop-blur-md py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111213] border border-stone-800/80">
            <div className="w-12 h-12 rounded-lg bg-[#E5BF3B]/10 border border-[#E5BF3B]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#E5BF3B]" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Contractor Standard</h4>
              <p className="text-xs text-stone-400 mt-0.5">Heavy-duty commercial durability</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111213] border border-stone-800/80">
            <div className="w-12 h-12 rounded-lg bg-[#E5BF3B]/10 border border-[#E5BF3B]/30 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-[#E5BF3B]" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Nationwide Delivery</h4>
              <p className="text-xs text-stone-400 mt-0.5">Prompt logistics across Kenya</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111213] border border-stone-800/80">
            <div className="w-12 h-12 rounded-lg bg-[#E5BF3B]/10 border border-[#E5BF3B]/30 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#E5BF3B]" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">ISO Certified Specs</h4>
              <p className="text-xs text-stone-400 mt-0.5">Clinical & institutional standard</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#111213] border border-stone-800/80">
            <div className="w-12 h-12 rounded-lg bg-[#E5BF3B]/10 border border-[#E5BF3B]/30 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-[#E5BF3B]" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Fast B2B Quotes</h4>
              <p className="text-xs text-stone-400 mt-0.5">Official RFQs processed in 24 hrs</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand & Corporate Overview (Col 1-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="w-12 h-12 rounded-xl bg-[#1E2022] border-2 border-[#E5BF3B] flex items-center justify-center shadow-lg group-hover:bg-[#E5BF3B] transition-all duration-300">
                <span className="text-[#E5BF3B] group-hover:text-[#111213] font-serif font-black text-2xl leading-none transition-colors">
                  SG
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                  SWIFT GROW
                </span>
                <span className="text-[11px] tracking-[0.25em] text-[#E5BF3B] font-semibold uppercase mt-1">
                  Innovations Ltd
                </span>
              </div>
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed pr-4">
              Swift Grow Innovations Ltd is a premier Kenyan institutional contractor specializing in complete commercial office fitouts, CBC-aligned school furniture, clinical-grade laboratory solutions, and turnkey ICT infrastructure.
            </p>

            {/* Social Proof Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: LinkedinIcon, href: '#' },
                { icon: FacebookIcon, href: '#' },
                { icon: TwitterIcon, href: '#' },
                { icon: InstagramIcon, href: '#' }
              ].map((social, sIdx) => (
                <a
                  key={sIdx}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-[#111213] hover:bg-[#E5BF3B] hover:border-[#E5BF3B] transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Core Categories (Col 5-7) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#E5BF3B] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5BF3B]" />
              Catalog Divisions
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <Link 
                    href={cat.href}
                    className="text-xs text-stone-400 hover:text-[#E5BF3B] flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-stone-600 group-hover:text-[#E5BF3B] transition-colors" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Corporate Links (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#E5BF3B] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5BF3B]" />
              Company & Procurement
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="text-xs text-stone-400 hover:text-[#E5BF3B] flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-stone-600 group-hover:text-[#E5BF3B] transition-colors" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Direct Procurement Information (Col 10-12) */}
          <div className="lg:col-span-4 space-y-4 bg-stone-900/50 p-6 rounded-2xl border border-stone-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#E5BF3B] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5BF3B]" />
              Official Headquarters
            </h3>

            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E5BF3B]/10 border border-[#E5BF3B]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#E5BF3B]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block">Headquarters & Showroom</span>
                  <span className="text-xs text-stone-200 font-medium">Nairobi, Kenya</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E5BF3B]/10 border border-[#E5BF3B]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-[#E5BF3B]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block">Direct Call & WhatsApp</span>
                  <a href="tel:0721595989" className="text-xs text-white font-bold hover:text-[#E5BF3B] transition-colors">
                    0721 595 989 / +254 721 595 989
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E5BF3B]/10 border border-[#E5BF3B]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-[#E5BF3B]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block">Email Procurement</span>
                  <a href="mailto:info@swiftgrow.co.ke" className="text-xs text-stone-200 hover:text-[#E5BF3B] transition-colors">
                    info@swiftgrow.co.ke
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E5BF3B]/10 border border-[#E5BF3B]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#E5BF3B]" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold block">Working Hours</span>
                  <span className="text-xs text-stone-300">Mon - Fri: 8:00 AM - 5:00 PM | Sat: 8:30 AM - 1:00 PM</span>
                </div>
              </div>
            </div>

            {/* Action Callout */}
            <div className="pt-2">
              <Link 
                href="/request-quote"
                className="w-full flex items-center justify-center gap-2 bg-[#E5BF3B] text-[#111213] py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#d8b02e] transition-all shadow-md"
              >
                <span>Submit Tender / RFQ</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* 3. NEWSLETTER & TENDER SUBSCRIPTION BAR */}
      <div className="border-t border-b border-stone-800 bg-[#161719] py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-white font-bold text-sm tracking-wide">Subscribe to Commercial Catalog Updates</h4>
            <p className="text-xs text-stone-400 mt-1">Get quarterly product catalogs, architectural specs, and corporate pricing updates.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-auto flex items-center gap-2 max-w-md">
            <input 
              type="email" 
              placeholder="Enter corporate email address..."
              className="bg-[#111213] border border-stone-700 text-stone-200 text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#E5BF3B] w-full md:w-72"
              required
            />
            <button 
              type="submit"
              className="bg-[#E5BF3B] text-[#111213] hover:bg-[#d8b02e] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* 4. COPYRIGHT & LEGAL BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
        <p>© {currentYear} Swift Grow Innovations Ltd. All rights reserved. Registered Commercial Contractor, Nairobi, Kenya.</p>
        
        <div className="flex items-center gap-6">
          <Link href="/terms" className="hover:text-stone-300 transition-colors">Terms of Supply</Link>
          <Link href="/privacy" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
          <Link href="/sitemap" className="hover:text-stone-300 transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}