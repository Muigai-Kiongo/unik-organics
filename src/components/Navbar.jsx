import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-green rounded-lg flex items-center justify-center text-white font-bold">U</div>
          <span className="text-xl font-bold tracking-tight">UNIK <span className="text-primary-green">ORGANICS</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-stone-600">
          <Link href="/programs" className="hover:text-primary-green">Programs</Link>
          <Link href="/projects" className="hover:text-primary-green">Projects</Link>
          <a href="https://wa.me/254758889075" className="bg-stone-900 text-white px-6 py-2.5 rounded-xl hover:bg-primary-green transition-all">
            Join Workshop
          </a>
        </div>
      </div>
    </nav>
  );
}