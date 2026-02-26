import Hero from "@/components/Hero";
import ContactCTA from "@/components/ContactCTA";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-earth-sand min-h-screen">
      <Hero />

      {/* Advisory Overview Section */}
      <section className="relative w-full border-t border-stone-200 bg-white/50 pt-24 pb-16 md:pt-32 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
                    
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 mb-8 tracking-tight leading-[1.1]">
            Bridging the <br className="hidden sm:block" />
            <span className="text-primary-green italic font-serif relative">
              Compliance Gap.
              {/* Subtle underline accent */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-200 opacity-60 z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-medium max-w-3xl mx-auto">
            UNIK is a sustainable-focused agricultural consultancy helping farms achieve certification readiness while restoring Ecological integrity.
          </p>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section id="competencies" className="w-full px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto space-y-32 md:space-y-40">
          
          {/* NEW Competency: Regenerative Farming Advisory */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group">
            <div className="lg:w-5/12 order-2 lg:order-1 relative z-10">
              <span className="block text-primary-green font-bold text-sm tracking-widest uppercase mb-4">Core Advisory</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 tracking-tight">
                Regenerative Farming Advisory
              </h3>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                We guide regional producers through the transition to Regenerative Agriculture, aligning operations with sustainability standards while enhancing soil health and biodiversity.
              </p>
              
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-sm relative z-20">
                <ul className="space-y-4 text-stone-700 font-medium text-sm md:text-base">
                  <li className="flex items-start gap-4">
                    <span className="text-primary-green mt-1">✓</span>
                    <span className="leading-tight">Practice Assessment & Ecological Impact Analysis</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary-green mt-1">✓</span>
                    <span className="leading-tight">Chemical-Free Pest & Disease Management Strategies</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary-green mt-1">✓</span>
                    <span className="leading-tight">Soil Rehabilitation & Land Restoration Planning</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary-green mt-1">✓</span>
                    <span className="leading-tight">Audit Readiness & International Certification Guidance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-7/12 w-full order-1 lg:order-2">
              <div className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden">
                <img 
                  src="/images/tr1.jpeg" 
                  alt="Regenerative Advisory" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-85 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" 
                />
              </div>
            </div>
          </div>

          {/* Competency 1: Compliance Structuring */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center group">
            <div className="lg:w-5/12 order-2 lg:order-1 relative z-10">
              <span className="block text-primary-green font-bold text-sm tracking-widest uppercase mb-4">01. Frameworks</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 tracking-tight">
                Compliance Structuring
              </h3>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                Development of Internal Management Systems (IMS) and formal documentation matrices strictly aligned with Rainforest Alliance and EU Organic audit parameters.
              </p>
              
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-sm relative z-20">
                <ul className="space-y-4 text-stone-700 font-medium text-sm md:text-base">
                  <li className="flex items-start gap-4">
                    <span className="text-primary-green mt-1">✓</span>
                    <span className="leading-tight">Initial Gap Analysis & Diagnostics</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary-green mt-1">✓</span>
                    <span className="leading-tight">Policy Drafting & Procedure Manuals</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary-green mt-1">✓</span>
                    <span className="leading-tight">Internal Auditing Execution</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary-green mt-1">✓</span>
                    <span className="leading-tight">Corrective Action Protocols</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-7/12 w-full order-1 lg:order-2">
              <div className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden">
                <img 
                  src="/images/cf2.jpeg" 
                  alt="Compliance Structuring" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-85 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" 
                />
              </div>
            </div>
          </div>

          {/* Competency 2: Toxicology Baseline */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group">
            <div className="lg:w-5/12 order-2 lg:order-1 relative z-10">
              <span className="block text-accent-brown font-bold text-sm tracking-widest uppercase mb-4">02. Diagnostics</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 tracking-tight">
                Toxicology Baseline
              </h3>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                Execution of certified soil and water toxicology screens to establish an objective, scientific baseline for land transition and organic rehabilitation.
              </p>
              
              <div className="bg-stone-900 rounded-2xl p-6 md:p-8 shadow-xl text-white relative z-20">
                <p className="text-[10px] md:text-xs font-bold uppercase text-stone-400 tracking-widest mb-6 border-b border-stone-700 pb-3">
                  Certified Parameters
                </p>
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-medium text-stone-200">Heavy Metal Screening</span>
                    <span className="text-[10px] md:text-xs font-bold bg-white/10 text-emerald-400 border border-white/20 px-3 py-1.5 rounded uppercase tracking-widest self-start sm:self-auto">
                      KEPHIS Partnered
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-medium text-stone-200">Pesticide Residue Analysis</span>
                    <span className="text-[10px] md:text-xs font-bold bg-white/10 text-emerald-400 border border-white/20 px-3 py-1.5 rounded uppercase tracking-widest self-start sm:self-auto">
                      KEPHIS Partnered
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-7/12 w-full order-1 lg:order-2">
              <div className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden">
                <img 
                  src="/images/ld1.jpeg" 
                  alt="Toxicology Testing" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-85 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" 
                />
              </div>
            </div>
          </div>

          {/* Competency 3: Botanical Land Rehabilitation */}
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center group">
            <div className="lg:w-5/12 order-2 lg:order-1 relative z-10">
              <span className="block text-primary-green font-bold text-sm tracking-widest uppercase mb-4">03. Agronomy</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 tracking-tight">
                Botanical Land Rehabilitation
              </h3>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                Design and implementation of plant-based agronomic interventions. We utilize specific flora and deep-rooted cover crops to naturally extract soil toxins and rebuild biodiversity.
              </p>
              
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-stone-200 shadow-sm relative z-20">
                 <ul className="space-y-4 text-stone-700 font-medium text-sm md:text-base">
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-primary-green rounded-full mt-2 flex-shrink-0" />
                    <span className="leading-tight">Phytoremediation Protocols (Plant-Based Toxin Extraction)</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-primary-green rounded-full mt-2 flex-shrink-0" />
                    <span className="leading-tight">Strategic Cover Crop Integration</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-primary-green rounded-full mt-2 flex-shrink-0" />
                    <span className="leading-tight">Agroforestry System Design & Management</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-7/12 w-full order-1 lg:order-2">
              <div className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden">
                <img 
                  src="/images/tr1.jpeg" 
                  alt="Plant-Based Land Rehabilitation" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-85 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" 
                />
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom Navigation CTA */}
        <div className="mt-32 max-w-7xl mx-auto flex flex-col sm:flex-row justify-center gap-6 border-t border-stone-200 pt-16">
           <Link href="/projects" className="group flex items-center justify-center gap-3 text-stone-600 font-bold hover:text-stone-900 transition-colors">
              Review Recent Mandates
              <span className="group-hover:translate-x-1 transition-transform">→</span>
           </Link>
           <span className="hidden sm:block text-stone-300">|</span>
           <Link href="/programs" className="group flex items-center justify-center gap-3 text-stone-600 font-bold hover:text-stone-900 transition-colors">
              Explore Advisory Programs
              <span className="group-hover:translate-x-1 transition-transform">→</span>
           </Link>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}