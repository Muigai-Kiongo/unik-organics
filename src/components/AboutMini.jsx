export default function AboutMini() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-video bg-stone-200 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center text-stone-400 italic">
            
          </div>
          <div className="absolute -bottom-6 -right-6 bg-accent-brown text-white p-8 rounded-2xl shadow-xl max-w-xs">
            <p className="text-sm font-medium leading-relaxed">
              "We don't just prepare you for audits; we restore the ecological integrity of your land."
            </p>
          </div>
        </div>
        <div>
          <h2 className="section-title">About <span className="text-primary-green">UNIK Organics</span></h2>
          <p className="text-lg text-stone-600 mb-6 leading-relaxed">
            UNIK is a sustainable-focused agricultural consultancy helping farms achieve certification readiness while restoring ecological performance.
          </p>
          <p className="text-stone-600 mb-8">
            We bridge the gap between rigorous global standards like <span className="font-bold text-stone-800">Rainforest Alliance</span> and the practical needs of Kenyan farmers.
          </p>
          <button className="btn-outline">Read Our Full Mission</button>
        </div>
      </div>
    </section>
  );
}