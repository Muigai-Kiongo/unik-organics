import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 mt-auto border-t border-stone-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <div className="relative w-6 h-6 opacity-50">
            <Image src="/logos/unik-favicon.png" alt="UNIK" fill className="object-contain grayscale" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900">
            UNIK <span className="italic font-serif">Organics</span>
          </span>
          <span className="text-stone-300 mx-2">—</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-stone-400">
            Regional Technical Advisory
          </span>
        </div>

        {/* Right: Minimal Directives */}
        <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400">
          <a href="mailto:info@unikorganics.com" className="hover:text-stone-900 transition-colors">Email</a>
          <a href="https://wa.me/254713353778" className="hover:text-stone-900 transition-colors">WhatsApp</a>
          <span className="hidden sm:block">© {new Date().getFullYear()}</span>
        </div>

      </div>
    </footer>
  );
}