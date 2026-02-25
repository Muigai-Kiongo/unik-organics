import ContactCTA from "@/components/ContactCTA";

export default function ProjectsPage() {
  return (
    <main className="pt-24 md:pt-32 min-h-screen bg-earth-sand">
      <div className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
        
        {/* Cinematic Dossier Header (Merged on Desktop, Emitted on Mobile) */}
        <header className="relative mb-24 md:mb-32 flex flex-col lg:block">
          
          {/* Text Container (Overlaid on Desktop, Stacked on Mobile) */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-10 lg:mb-0 lg:min-h-[55vh] lg:pb-12 lg:pt-8 pointer-events-none">
            
            <div className="max-w-3xl pointer-events-auto">
              <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 bg-white border border-stone-200 shadow-sm">
                <div className="w-2 h-2 bg-primary-green animate-pulse" />
                <span className="text-stone-700 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em]">
                  Field Engagements
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-stone-900 mb-6 tracking-tight leading-[1.05]">
                Recent Advisory <br className="hidden sm:block"/>
                <span className="text-primary-green italic font-serif">Mandates.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-medium max-w-2xl">
                An overview of formal engagements involving plant-based land rehabilitation and certification compliance structuring for Kenyan exporters.
              </p>
            </div>
            
            {/* Architectural Metadata Sidebar */}
            <div className="flex flex-row lg:flex-col gap-8 lg:gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500 border-t lg:border-t-0 lg:border-l border-stone-300 pt-6 lg:pt-0 lg:pl-8 pointer-events-auto">
              <div>
                <span className="block text-stone-400 mb-1">Execution Status</span>
                <span className="text-stone-900">Active & Completed</span>
              </div>
              <div>
                <span className="block text-stone-400 mb-1">Diagnostic Partner</span>
                <span className="text-stone-900">KEPHIS Labs</span>
              </div>
            </div>
            
          </div>

          {/* Image Container: Emitted below on mobile, Merged background on large screens */}
          <div className="w-full aspect-video lg:absolute lg:top-0 lg:right-0 lg:w-[65%] lg:h-full lg:aspect-auto z-0 overflow-hidden bg-stone-200">
            {/* Gradient blend applied strictly on large screens to merge with text */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-earth-sand via-earth-sand/80 to-transparent z-10 pointer-events-none" />
            
            <img 
              src="/images/tr1.jpeg" 
              alt="Field Engagements Overview" 
              className="w-full h-full object-cover lg:mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out" 
            />
          </div>
        </header>

        {/* Advisory Mandates Core Sections */}
        <div className="space-y-32 md:space-y-40">
          
          {/* Mandate 1: Soil Toxicity Mitigation */}
          <section className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group">
            <div className="lg:w-5/12 order-2 lg:order-1 relative z-10">
              <span className="block text-accent-brown font-bold text-sm tracking-widest uppercase mb-4">Mandate 01</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 tracking-tight">
                Soil Toxicity Mitigation
              </h2>
              <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-8">📍 Central Kenya Sector</p>
              
              <div className="space-y-6">
                <div>
                  <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Scope of Work</span>
                  <p className="text-stone-700 text-lg leading-relaxed">Implementation of plant-based phytoremediation protocols, utilizing specific botanical integration and cover crops to address extensive heavy chemical degradation on cooperative lands.</p>
                </div>
                <div className="pt-6 border-t border-stone-200">
                  <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Recorded Metric</span>
                  <p className="text-stone-900 font-medium text-lg leading-relaxed">Independent lab analysis confirmed the plant-based extraction reduced toxic compound levels by 65% over an 8-month observation period.</p>
                </div>
              </div>
            </div>
            
            {/* Flat, Borderless Image Area */}
            <div className="lg:w-7/12 w-full order-1 lg:order-2">
              <div className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden shadow-sm">
                <img 
                  src="/images/ld2.jpeg" 
                  alt="Botanical Soil Mitigation Analysis" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </section>

          {/* Mandate 2: Certification Alignment */}
          <section className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center group">
            <div className="lg:w-5/12 order-2 lg:order-1 relative z-10">
              <span className="block text-primary-green font-bold text-sm tracking-widest uppercase mb-4">Mandate 02</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 tracking-tight">
                Group Certification Alignment
              </h2>
              <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-8">📍 Rift Valley Region</p>
              
              <div className="space-y-6">
                <div>
                  <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Scope of Work</span>
                  <p className="text-stone-700 text-lg leading-relaxed">Formulation of complete compliance documentation, Internal Management Systems (IMS), and digital farm mapping for a 150-member cooperative.</p>
                </div>
                <div className="pt-6 border-t border-stone-200">
                  <span className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Recorded Metric</span>
                  <p className="text-stone-900 font-medium text-lg leading-relaxed">Cooperative attained Rainforest Alliance compliance status without major non-conformities during the official external audit.</p>
                </div>
              </div>
            </div>
            
            {/* Flat, Borderless Image Area */}
            <div className="lg:w-7/12 w-full order-1 lg:order-2">
              <div className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden shadow-sm">
                <img 
                  src="/images/cf1.jpeg" 
                  alt="Certification Alignment Mapping" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </section>

          {/* Scientific Partnership */}
          <section className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group">
            <div className="lg:w-5/12 order-2 lg:order-1 relative z-10">
              <span className="block text-accent-brown font-bold text-sm tracking-widest uppercase mb-4">Institutional Partnership</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 tracking-tight">
                Scientific Diagnostics
              </h2>
              <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-8">🔬 Kenya Plant Health Research Institute</p>
              
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                Advisory interventions require accurate, undeniable baseline data. UNIK Organics conducts preliminary soil and water toxicology assessments in formal coordination with <strong>KEPHIS</strong>.
              </p>
              <p className="text-stone-700 text-lg leading-relaxed mb-8">
                This partnership ensures that all plant-based rehabilitation protocols are founded on certified government laboratory diagnostics prior to the implementation of internal management systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="px-5 py-2.5 bg-white border border-stone-200 text-[10px] md:text-xs font-bold tracking-widest uppercase text-stone-700 shadow-sm">
                  Official Partner Lab
                </div>
                <div className="px-5 py-2.5 bg-white border border-stone-200 text-[10px] md:text-xs font-bold tracking-widest uppercase text-stone-700 shadow-sm">
                  Pre-Audit Validation
                </div>
              </div>
            </div>
            
            {/* Flat, Borderless Image Area */}
            <div className="lg:w-7/12 w-full order-1 lg:order-2">
              <div className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden shadow-sm">
                <img 
                  src="/images/tr3.jpeg" 
                  alt="KEPHIS Laboratory Diagnostics" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </div>
          </section>

        </div>
      </div>
      <ContactCTA />
    </main>
  );
}