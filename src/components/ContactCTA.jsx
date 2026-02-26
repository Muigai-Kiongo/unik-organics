import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-stone-900 py-24 px-6 text-center relative overflow-hidden">
      {/* Subtle background lighting effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-[0.03] pointer-events-none">
         <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <span className="text-primary-green font-bold text-[10px] tracking-[0.3em] uppercase mb-6 block">
          Initiate Consultation
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
          Ready to Align Your Operations?
        </h2>
        <p className="text-lg text-stone-400 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
          Contact our advisory team to discuss your farm's transition to certified regenerative and organic standards.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a 
            href="mailto:njerisunna@unikorganics.com" 
            className="w-full sm:w-auto px-10 py-4 bg-white text-stone-900 font-bold uppercase tracking-widest text-[10px] rounded-sm hover:bg-primary-green hover:text-white transition-all duration-300"
          >
            Email Advisory Team
          </a>
        </div>

        {/* Dual Contact Numbers Layout */}
        <div className="border-t border-stone-800 pt-12 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
          
          <div className="text-center group">
            <p className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em] mb-3"></p>
            <a href="https://wa.me/254713353778" className="text-xl font-medium text-stone-300 group-hover:text-primary-green transition-colors">
              +254 713 353 778
            </a>
          </div>


          <div className="hidden md:block w-px h-12 bg-stone-800" />

           <div className="text-center group">
            <p className="text-[10px] font-bold text-stone-500 uppercase tracking-[0.2em] mb-3"></p>
            <a href="https://wa.me/254722802589" className="text-xl font-medium text-stone-300 group-hover:text-primary-green transition-colors">
              +254 722 802 589
            </a>
          </div>
          
          

        </div>
      </div>
    </section>
  );
}