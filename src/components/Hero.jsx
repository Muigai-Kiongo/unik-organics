export default function Hero() {
  return (
    <section className="relative w-full h-[100dvh] bg-earth-sand overflow-hidden flex items-center pt-20">
      
      {/* The "Painted" Image Background
        - On mobile: Absolute at the top, fading out towards the bottom.
        - On desktop: Absolute on the right, fading out towards the left.
        - Shadows and borders are completely removed.
      */}
      <div className="absolute top-0 right-0 w-full h-[60vh] lg:h-full lg:w-[65%] z-0 pointer-events-none">
        {/* Subtle overlay to ensure the image matches the corporate tone */}
        <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply z-10" />
        
        <img 
          src="/images/p1.jpeg" 
          alt="Agricultural Advisory Services" 
          className="w-full h-full object-cover 
                     [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] 
                     lg:[mask-image:linear-gradient(to_left,black_60%,transparent_100%)]"
        />
      </div>
      
      {/* Content Container
        - Fits strictly within the viewport.
        - On mobile: Pushed to the bottom to merge with the faded image.
        - On desktop: Centered vertically on the left.
      */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col justify-end lg:justify-center h-full pb-10 lg:pb-0 mt-auto lg:mt-0">
        
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          {/* Advisory Badge
          <div className="inline-block px-4 py-1.5 mb-5 md:mb-6 rounded-sm bg-stone-200/80 backdrop-blur-sm border border-stone-300">
            <span className="text-stone-800 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Independent Agricultural Advisory
            </span>
          </div> */}
          
          {/* Tightly Scaled Typography to prevent overflow */}
          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-stone-900 leading-[1.05] mb-5 md:mb-6 tracking-tight">
            Compliance & <br className="hidden sm:block"/>
            <span className="text-primary-green">Ecological Restoration.</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-stone-700 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
            Providing objective, science-based guidance to align Regional agricultural operations with <strong>Rainforest Alliance</strong> and <strong>EU Organic</strong> regulatory frameworks.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start">
            <a 
              href="#competencies" 
              className="bg-primary-green text-white px-8 py-3.5 rounded-md font-bold hover:bg-[#0a2e18] transition-colors text-center text-sm md:text-base shadow-sm"
            >
              View Competencies
            </a>
            <a 
              href="/programs" 
              className="border border-stone-400 bg-white/40 backdrop-blur-md text-stone-900 px-8 py-3.5 rounded-md font-bold hover:bg-stone-200 transition-colors text-center text-sm md:text-base"
            >
              Advisory Programs
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
}