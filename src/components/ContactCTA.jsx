export default function ContactCTA() {
  return (
    <section id="contact" className="w-full bg-stone-900 relative overflow-hidden group border-t border-stone-800">
      
      {/* Subtle ambient gradient overlay for depth - spans to the edges now */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-primary-green/10 blur-3xl transform translate-x-1/4 -translate-y-1/4 pointer-events-none transition-opacity duration-700 group-hover:opacity-70 opacity-40" />
      
      {/* Inner Content Container - keeps text aligned with the rest of the site */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-20 sm:py-24 md:py-32 relative z-10">
        
        {/* Advisory Messaging */}
        <div className="lg:w-7/12 mb-10 lg:mb-0 text-center lg:text-left">
          <span className="inline-block text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-4 md:mb-6 border border-emerald-400/30 px-3 py-1.5 rounded-sm bg-emerald-400/10">
            Technical Consultation
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
            Initiate an Advisory <br className="hidden sm:block" />
            <span className="text-emerald-300 italic font-serif">Mandate.</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-stone-400 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
            Engage our technical consultancy team to formalize your compliance frameworks, execute baseline diagnostics, or structure botanical rehabilitation protocols.
          </p>
        </div>
        
        {/* Proportionate, Sleek Action Buttons */}
        <div className="lg:w-5/12 w-full flex flex-col sm:flex-row lg:flex-col gap-3 md:gap-4 justify-center lg:justify-end items-center lg:items-end">
          <a 
            href="mailto:info@unikorganics.com" 
            className="flex items-center justify-center gap-3 bg-white text-stone-900 px-6 py-3 md:px-8 md:py-3.5 rounded-md font-semibold hover:bg-stone-200 transition-colors w-full sm:w-auto lg:w-full max-w-[280px] lg:max-w-sm text-sm shadow-lg"
          >
            <span className="text-base opacity-70">✉️</span>
            Submit Formal RFP
          </a>
          <a 
            href="https://wa.me/254758889075" 
            className="flex items-center justify-center gap-3 bg-transparent border border-stone-600 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-md font-semibold hover:bg-stone-800 hover:border-stone-500 transition-colors w-full sm:w-auto lg:w-full max-w-[280px] lg:max-w-sm text-sm"
          >
            <span className="text-base opacity-70">📞</span>
            Direct Technical Inquiry
          </a>
        </div>

      </div>
    </section>
  );
}