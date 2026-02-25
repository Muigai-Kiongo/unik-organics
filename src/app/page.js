import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactCTA from "@/components/ContactCTA";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-earth-sand">
      <Navbar />
      <Hero />

      {/* Advisory Overview (Straightforward & Objective) */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-stone-900">Advisory Overview</h2>
        <p className="text-lg text-stone-600 leading-relaxed mb-10 text-left md:text-center">
          UNIK Organics operates as an independent consultancy providing technical support to the agricultural sector. Our primary mandate is bridging the operational gap between current farm practices and the rigorous documentation, toxicology, and ecological requirements of international certification bodies. We do not issue certifications; we establish the frameworks required to attain them.
        </p>
        <div className="flex justify-center gap-8">
          <Link href="/programs" className="text-primary-green font-bold border-b border-primary-green hover:text-stone-900 hover:border-stone-900 transition-colors pb-1">
            Read Program Frameworks →
          </Link>
          <Link href="/projects" className="text-primary-green font-bold border-b border-primary-green hover:text-stone-900 hover:border-stone-900 transition-colors pb-1">
            Review Field Engagements →
          </Link>
        </div>
      </section>

      {/* Core Competencies (Replacing "Pillars") */}
      <section id="competencies" className="bg-white py-24 px-6 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-stone-900 text-center">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="border border-stone-200 rounded-xl overflow-hidden group">
              <div className="h-48 overflow-hidden bg-stone-100">
                <img src="/images/cf2.jpeg" alt="Compliance Auditing" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-8">
                <h3 className="font-bold text-lg mb-3 text-stone-900">Compliance Structuring</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Development of Internal Management Systems (IMS) and documentation matrices aligned with Rainforest Alliance and EU Organic audit parameters.
                </p>
              </div>
            </div>

            <div className="border border-stone-200 rounded-xl overflow-hidden group">
              <div className="h-48 overflow-hidden bg-stone-100">
                <img src="/images/ld1.jpeg" alt="Toxicology Testing" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-8">
                <h3 className="font-bold text-lg mb-3 text-stone-900">Toxicology Baseline</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Execution of certified soil and water toxicology screens in formal collaboration with the Kenya Plant Health Research Institute (KEPHIS).
                </p>
              </div>
            </div>

            <div className="border border-stone-200 rounded-xl overflow-hidden group">
              <div className="h-48 overflow-hidden bg-stone-100">
                <img src="/images/tr1.jpeg" alt="Ecological Rehabilitation" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="p-8">
                <h3 className="font-bold text-lg mb-3 text-stone-900">Ecological Rehabilitation</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Design and implementation of agronomic interventions to restore soil microbiome health and local biodiversity on depleted land assets.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}