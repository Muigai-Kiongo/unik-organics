export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 text-center max-w-5xl mx-auto">
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-100 border border-emerald-200">
        <span className="text-primary-green text-xs font-bold uppercase tracking-widest">Leading Agri-Consultancy Kenya</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-stone-900 leading-[1.1] mb-8">
        Cultivating Excellence. <br/>
        <span className="text-primary-green">Restoring Nature.</span>
      </h1>
      <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
        We help farmers and exporters prepare land for auditing as per Rainforest Alliance and EU Organic standards.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="btn-primary">Get Started</button>
        <button className="btn-outline">Our Workshops</button>
      </div>
    </section>
  );
}