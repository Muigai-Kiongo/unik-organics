import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-primary-green rounded-sm flex items-center justify-center text-white font-bold group-hover:bg-[#0a2e18] transition-colors">
            U
          </div>
          <span className="text-xl font-bold tracking-tight text-stone-900">
            UNIK <span className="text-primary-green">ORGANICS</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-stone-600">
          <Link href="/programs" className="hover:text-primary-green transition-colors">
            Advisory Programs
          </Link>
          <Link href="/projects" className="hover:text-primary-green transition-colors">
            Field Engagements
          </Link>
          <a href="https://wa.me/254758889075" className="bg-stone-900 text-white px-6 py-2.5 rounded-md hover:bg-stone-700 transition-colors shadow-sm">
            Consultancy Inquiry
          </a>
        </div>

        {/* Mobile Menu Toggle (Visual Only) */}
        <div className="md:hidden flex items-center">
          <button className="text-stone-900 p-2 hover:bg-stone-100 rounded-md transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}