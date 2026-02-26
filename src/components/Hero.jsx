import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] bg-earth-sand overflow-hidden flex items-center pt-20">
      
      {/* The "Painted" Image Background */}
      <div className="absolute top-0 right-0 w-full h-[60vh] lg:h-full lg:w-[65%] z-0 pointer-events-none">
        {/* Subtle overlay to ensure the image matches the corporate tone */}
        <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply z-10" />
        
        <img 
          src="/images/p1.jpeg" 
          alt="Regional Agricultural Advisory Services" 
          className="w-full h-full object-cover grayscale-[30%] 
                     [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] 
                     lg:[mask-image:linear-gradient(to_left,black_60%,transparent_100%)]"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col justify-end lg:justify-center h-full pb-10 lg:pb-0 mt-auto lg:mt-0">
        
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          
          {/* Minimalist Advisory Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 bg-white/60 backdrop-blur-md border border-stone-200 shadow-sm">
            <div className="w-2 h-2 bg-primary-green animate-pulse" />
            <span className="text-stone-700 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]">
              Regional Technical Advisory
            </span>
          </div>
          
          {/* Tightly Scaled Typography */}
          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-stone-900 leading-[1.05] mb-6 tracking-tight">
            Compliance & <br className="hidden sm:block"/>
            <span className="text-primary-green italic font-serif">Ecological Restoration.</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-stone-700 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            Providing objective, science-based guidance to align Pan African agricultural operations with <strong>Rainforest Alliance</strong> sustainability standards and <strong>EU Organic</strong> certification frameworks.
          </p>
          
          {/* Action Buttons - Includes 403 Trailing Slash Fix */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <a 
              href="#competencies" 
              className="bg-stone-900 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-primary-green transition-colors text-center shadow-sm"
            >
              View Competencies
            </a>
            
            {/* Note the trailing slash on the href to prevent Apache 403 errors */}
            <Link 
              href="/programs/" 
              className="border border-stone-300 bg-white/60 backdrop-blur-md text-stone-900 px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:border-stone-400 transition-all text-center"
            >
              Advisory Programs
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}