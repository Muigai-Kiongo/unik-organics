import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 mt-auto border-t border-stone-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left: Branding */}
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
          <div className="relative w-6 h-6 opacity-50 shrink-0">
            <Image src="/logos/unik-favicon.png" alt="UNIK" fill className="object-contain grayscale" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900">
            UNIK <span className="italic font-serif">Organics</span>
          </span>
          <span className="hidden sm:block text-stone-300 mx-1 md:mx-2">—</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400 text-center">
            Regional Technical Advisory
          </span>
        </div>

        {/* Right: Minimal Directives with Dual Numbers */}
        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-x-6 gap-y-3 text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400">
          <a href="mailto:info@unikorganics.com" className="hover:text-stone-900 transition-colors">
            Email
          </a>
          
          <span className="hidden sm:block text-stone-200">/</span>
          
          <a href="hhttps://wa.me/254713353778" className="hover:text-stone-900 transition-colors">
            +254 713 353 778
          </a>
          
          
          <span className="hidden sm:block text-stone-200">/</span>
          
          <a href="https://wa.me/254722802589" className="hover:text-stone-900 transition-colors">
            +254 722 802 589
          </a>

          <span className="hidden xl:block text-stone-200 ml-4">|</span>
          <span className="hidden xl:block">© {new Date().getFullYear()}</span>
        </div>

      </div>
    </footer>
  );
}