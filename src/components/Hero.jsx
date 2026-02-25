export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-earth-sand">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Advisory Messaging */}
        <div className="text-center lg:text-left z-10">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-sm bg-stone-200 border border-stone-300">
            <span className="text-stone-800 text-xs font-bold uppercase tracking-widest">
              Independent Agricultural Advisory
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-stone-900 leading-[1.05] mb-8 tracking-tight">
            Compliance & <br/>
            <span className="text-primary-green">Ecological Restoration.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Providing objective, science-based guidance to align Kenyan agricultural operations with <strong>Rainforest Alliance</strong> and <strong>EU Organic</strong> regulatory frameworks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#competencies" className="bg-primary-green text-white px-8 py-4 rounded-md font-bold hover:bg-[#0a2e18] transition-colors text-center">
              View Competencies
            </a>
            <a href="/programs" className="border border-stone-300 text-stone-700 px-8 py-4 rounded-md font-bold hover:bg-stone-100 transition-colors text-center">
              Advisory Programs
            </a>
          </div>
        </div>

        {/* Professional Hero Image */}
        <div className="relative hidden lg:block h-[75vh]">
          <div className="w-full h-full rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-xl border border-stone-200">
            <img 
              src="/images/p1.jpeg" 
              alt="Agricultural Advisory Services" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}