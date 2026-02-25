import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 py-8 px-6 mt-auto w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Mark & Legal */}
        <div className="flex items-center gap-4">
          <Link href="/" className="w-6 h-6 bg-stone-900 rounded-sm flex items-center justify-center text-white text-[10px] font-bold hover:bg-primary-green transition-colors">
            U
          </Link>
          <p className="text-xs font-medium text-stone-500 tracking-wide">
            © {new Date().getFullYear()} UNIK Organics. <span className="hidden sm:inline text-stone-300 mx-1">|</span> <span className="block sm:inline mt-1 sm:mt-0">Independent Technical Advisory.</span>
          </p>
        </div>

        {/* Essential Directives */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-widest text-stone-400">
          <a href="mailto:info@unikorganics.com" className="hover:text-stone-900 transition-colors">
            info@unikorganics.com
          </a>
          <span className="hidden md:block text-stone-300">·</span>
          <a href="https://wa.me/254758889075" className="hover:text-stone-900 transition-colors">
            +254 758 889 075
          </a>
          <span className="hidden md:block text-stone-300">·</span>
          <span className="hover:text-stone-900 cursor-pointer transition-colors">
            Privacy & Terms
          </span>
        </div>

      </div>
    </footer>
  );
}