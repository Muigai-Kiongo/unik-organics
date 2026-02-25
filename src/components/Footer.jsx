import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 pt-16 pb-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        {/* Brand & Advisory Statement */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-primary-green rounded-sm flex items-center justify-center text-white font-bold">U</div>
            <span className="text-xl font-bold tracking-tight text-stone-900">
              UNIK <span className="text-primary-green">ORGANICS</span>
            </span>
          </Link>
          <p className="text-sm text-stone-600 leading-relaxed max-w-sm">
            Independent agricultural advisory providing compliance structuring and ecological rehabilitation protocols for the Kenyan export sector.
          </p>
        </div>

        {/* Advisory Links */}
        <div>
          <h4 className="font-bold text-stone-900 mb-6 uppercase text-xs tracking-widest">
            Advisory Services
          </h4>
          <ul className="space-y-4 text-sm text-stone-600 font-medium">
            <li>
              <Link href="/programs" className="hover:text-primary-green transition-colors">Compliance Frameworks</Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-primary-green transition-colors">Internal Management Systems</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-primary-green transition-colors">Field Engagements</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="font-bold text-stone-900 mb-6 uppercase text-xs tracking-widest">
            Direct Contact
          </h4>
          <ul className="space-y-4 text-sm text-stone-600 font-medium">
            <li>
              <a href="mailto:info@unikorganics.com" className="hover:text-primary-green transition-colors flex items-center gap-2">
                ✉️ info@unikorganics.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/254758889075" className="hover:text-primary-green transition-colors flex items-center gap-2">
                📞 +254 758 889 075
              </a>
            </li>
            <li className="text-stone-400 mt-4 text-xs uppercase tracking-widest">
              📍 Nairobi, Kenya
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright & Legal */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-stone-500 text-xs tracking-wide">
          © {new Date().getFullYear()} UNIK Organics. All rights reserved. | Corporate Advisory
        </p>
        <div className="flex gap-6 text-xs text-stone-400 font-medium">
          <span className="hover:text-stone-900 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-stone-900 cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}