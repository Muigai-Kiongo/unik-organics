import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactCTA from "@/components/ContactCTA";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Simplified "Direct" About */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary-green">Sustainable Growth</h2>
        <p className="text-lg text-stone-600 leading-relaxed mb-8">
          UNIK Organics is a sustainable-focused agricultural consultancy. 
          We prepare farmers and exporters for auditing as per <strong>Rainforest Alliance</strong> and 
          <strong>European Union Organic</strong> standards while restoring ecological integrity.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/programs" className="text-accent-brown font-bold border-b-2 border-accent-brown hover:text-primary-green hover:border-primary-green transition-all">
            View Our Programs →
          </Link>
          <Link href="/projects" className="text-accent-brown font-bold border-b-2 border-accent-brown hover:text-primary-green hover:border-primary-green transition-all">
            Land Rehabilitation Projects →
          </Link>
        </div>
      </section>

      {/* The "Big Three" Pillars */}
      <section className="bg-stone-100 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="font-bold mb-2">Audit Readiness</h3>
            <p className="text-sm text-stone-500">Zero-hassle preparation for global certification standards.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="font-bold mb-2">Scientific Testing</h3>
            <p className="text-sm text-stone-500">Soil toxicology in collaboration with KEPHIS.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-bold mb-2">Land Rehab</h3>
            <p className="text-sm text-stone-500">Restoring biodiversity and soil health for future yields.</p>
          </div>
        </div>
      </section>

      <ContactCTA />
      
      <footer className="py-10 text-center text-stone-400 text-xs uppercase tracking-widest">
        UNIK Organics © 2026
      </footer>
    </main>
  );
}