import ContactCTA from "@/components/ContactCTA";

export default function ProgramsPage() {
  return (
    <main className="pt-24 md:pt-32 min-h-screen bg-earth-sand">
      <div className="max-w-7xl mx-auto px-6 mb-24 md:mb-32">
        
        {/* Cinematic Dossier Header (Merged on Desktop, Emitted on Mobile) */}
        <header className="relative mb-24 md:mb-32 flex flex-col lg:block">
          
          {/* Text Container (Overlaid on Desktop) */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-10 lg:mb-0 lg:min-h-[55vh] lg:pb-12 lg:pt-8 pointer-events-none">
            
            <div className="max-w-3xl pointer-events-auto">
              <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 bg-white border border-stone-200 shadow-sm">
                <div className="w-2 h-2 bg-primary-green animate-pulse" />
                <span className="text-stone-700 text-[11px] md:text-xs font-bold uppercase tracking-[0.15em]">
                  Capacity Building
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-stone-900 mb-6 tracking-tight leading-[1.05]">
                Advisory <br className="hidden sm:block"/>
                <span className="text-primary-green italic font-serif">Programs.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-medium max-w-2xl">
                Building the technical and operational capacity of Region agriculture to meet global standards through structured advisory frameworks and digital integration.
              </p>
            </div>
            
            {/* Architectural Metadata Sidebar */}
            <div className="flex flex-row lg:flex-col gap-8 lg:gap-6 text-[10px] md:text-xs font-bold uppercase tracking-widest text-stone-500 border-t lg:border-t-0 lg:border-l border-stone- stone-300 pt-6 lg:pt-0 lg:pl-8 pointer-events-auto">
              <div>
                <span className="block text-stone-400 mb-1">Operational Scope</span>
                <span className="text-stone-900">Pan Africa Sector</span>
              </div>
              <div>
                <span className="block text-stone-400 mb-1">Target Frameworks</span>
                <span className="text-stone-900">RA / EU Organic</span>
              </div>
            </div>
          </div>

          {/* Background Image: Merged on Desktop, Emitted below on Mobile */}
          <div className="w-full aspect-video lg:absolute lg:top-0 lg:right-0 lg:w-[65%] lg:h-full lg:aspect-auto z-0 overflow-hidden bg-stone-200">
            {/* Gradient blend for desktop merge */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-earth-sand via-earth-sand/80 to-transparent z-10 pointer-events-none" />
            
            <img 
              src="/images/p1.jpeg" 
              alt="Agricultural Programs Overview" 
              className="w-full h-full object-cover lg:mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out" 
            />
          </div>
        </header>

        {/* Advisory Modules */}
        <div className="space-y-32 md:space-y-40">
          
          {/* Module 01: Field Training */}
          <section className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group">
            <div className="lg:w-5/12 order-2 lg:order-1 relative z-10">
              <span className="block text-primary-green font-bold text-sm tracking-widest uppercase mb-4">Module 01</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 tracking-tight">
                Technical Field Training
              </h2>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                Practical, hands-on capacity building designed for farmers and field officers. We translate complex certification requirements into structured, actionable daily agronomic practices.
              </p>
              
              <div className="bg-white p-6 md:p-8 border border-stone-200 shadow-sm relative z-20">
                <ul className="space-y-4 text-stone-700 font-medium text-sm md:text-base">
                  <li className="flex items-start gap-4">
                    <span className="text-primary-green mt-1">✓</span>
                    <span className="leading-tight">Organic Pest Management Protocols</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary-green mt-1">✓</span>
                    <span className="leading-tight">Post-Harvest Handling & Traceability</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary-green mt-1">✓</span>
                    <span className="leading-tight">Soil Fertility Restoration Techniques</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary-green mt-1">✓</span>
                    <span className="leading-tight">Certification Documentation Logging</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:w-7/12 w-full order-1 lg:order-2">
              <div className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden shadow-sm">
                <img src="/images/cf3.jpeg" alt="Field Training" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* Module 02: IMS Integration */}
          <section className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center group">
            <div className="lg:w-5/12 order-2 lg:order-1 relative z-10">
              <span className="block text-accent-brown font-bold text-sm tracking-widest uppercase mb-4">Module 02</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 tracking-tight">
                Internal Management System (IMS)
              </h2>
              <p className="text-lg text-stone-600 mb-10 leading-relaxed">
                Our digital platform provides exporters with real-time visibility into their supply chain. Track compliance, manage farmer logs, and continuously monitor audit readiness.
              </p>
              
              <div className="bg-stone-900 p-6 md:p-8 shadow-xl text-white relative z-20">
                <p className="text-[10px] md:text-xs font-bold uppercase text-stone-400 tracking-widest mb-6 border-b border-stone-700 pb-3">
                  Digital Integration Parameters
                </p>
                <div className="space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-medium text-stone-200">Digital Training Logs</span>
                    <span className="text-[10px] md:text-xs font-bold bg-white/10 text-emerald-400 border border-white/20 px-3 py-1.5 rounded-sm uppercase tracking-widest self-start sm:self-auto">Active</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-medium text-stone-200">Compliance Dashboards</span>
                    <span className="text-[10px] md:text-xs font-bold bg-white/10 text-emerald-400 border border-white/20 px-3 py-1.5 rounded-sm uppercase tracking-widest self-start sm:self-auto">Active</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="font-medium text-stone-200">Audit Readiness Tracking</span>
                    <span className="text-[10px] md:text-xs font-bold bg-white/10 text-emerald-400 border border-white/20 px-3 py-1.5 rounded-sm uppercase tracking-widest self-start sm:self-auto">Active</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-7/12 w-full order-1 lg:order-2">
              <div className="relative aspect-[4/3] md:aspect-video w-full overflow-hidden shadow-sm">
                <img src="/images/pn2.jpeg" alt="Management System Integration" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

        </div>
      </div>
      <ContactCTA />
    </main>
  );
}