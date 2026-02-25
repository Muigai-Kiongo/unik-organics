"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle transparent-to-solid transition and shrink effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3 md:py-4" 
            : "bg-transparent py-6 lg:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group relative z-[70]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className={`w-8 h-8 rounded-sm flex items-center justify-center text-white font-bold transition-all duration-300 shadow-sm ${
              isMobileMenuOpen ? "bg-stone-900" : "bg-primary-green group-hover:bg-[#0a2e18]"
            }`}>
              U
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
              isMobileMenuOpen ? "text-stone-900" : "text-stone-900"
            }`}>
              UNIK <span className={isMobileMenuOpen ? "text-stone-600" : "text-primary-green"}>ORGANICS</span>
            </span>
          </Link>
          
          {/* Desktop Navigation (Enhanced UX with Animated Underlines) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-stone-700">
            <Link href="/programs" className="relative group hover:text-primary-green transition-colors py-2">
              Advisory Programs
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-green transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
            <Link href="/projects" className="relative group hover:text-primary-green transition-colors py-2">
              Field Engagements
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-green transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
            <a 
              href="https://wa.me/254758889075" 
              className={`px-6 py-2.5 rounded-md transition-all duration-300 shadow-sm border ${
                isScrolled 
                  ? "bg-stone-900 text-white border-stone-900 hover:bg-white hover:text-stone-900" 
                  : "bg-primary-green text-white border-primary-green hover:bg-transparent hover:text-stone-900"
              }`}
            >
              Consultancy Inquiry
            </a>
          </div>

          {/* Mobile Custom Hamburger Button */}
          <div className="md:hidden flex items-center relative z-[70]">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 focus:outline-none group"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-4 flex flex-col justify-between items-end relative">
                <span className={`h-[2px] bg-stone-900 transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6 group-hover:w-5"}`} />
                <span className={`h-[2px] bg-stone-900 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "w-0 opacity-0" : "w-5 group-hover:w-6"}`} />
                <span className={`h-[2px] bg-stone-900 transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-4 group-hover:w-5"}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop (Darkened background when drawer is open) */}
      <div 
        className={`md:hidden fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[50] transition-opacity duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Off-Canvas Drawer (Slides in from the right) */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-[100dvh] w-[75vw] max-w-sm bg-earth-sand shadow-2xl z-[55] transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col border-l border-stone-200 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-8 pb-10 overflow-y-auto">
          
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-8 border-b border-stone-200 pb-4">
            Navigation Menu
          </p>

          <div className="flex flex-col gap-8">
            <Link 
              href="/programs" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-2xl font-black text-stone-900 tracking-tight hover:text-primary-green transition-colors"
            >
              Advisory Programs.
            </Link>
            <Link 
              href="/projects" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-2xl font-black text-stone-900 tracking-tight hover:text-primary-green transition-colors"
            >
              Field Engagements.
            </Link>
          </div>

          {/* Contact Details pushed to the bottom of the drawer */}
          <div className="mt-auto pt-12">
            <a 
              href="https://wa.me/254758889075" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="flex items-center justify-center w-full bg-stone-900 text-white px-6 py-4 rounded-md font-bold text-sm shadow-md hover:bg-stone-700 transition-colors mb-6"
            >
              Consultancy Inquiry
            </a>
            
            <div className="space-y-3">
              <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Direct Contact</p>
              <a href="mailto:info@unikorganics.com" className="text-stone-700 font-medium text-sm flex items-center gap-3 hover:text-primary-green transition-colors">
                <span className="text-base">✉️</span> info@unikorganics.com
              </a>
              <a href="https://wa.me/254758889075" className="text-stone-700 font-medium text-sm flex items-center gap-3 hover:text-primary-green transition-colors">
                <span className="text-base">📞</span> +254 758 889 075
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}