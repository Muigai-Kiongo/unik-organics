const programs = [
  {
    title: "Farmer Training Workshops",
    desc: "Hands-on sessions on organic pest management, soil nutrition, and harvesting standards.",
    icon: "🌾"
  },
  {
    title: "Internal Management (IMS)",
    desc: "A digital system for exporters to manage groups of farmers and track audit readiness.",
    icon: "📊"
  },
  {
    title: "Certification Bootcamps",
    desc: "Intensive 3-day programs to prepare your documentation for Rainforest Alliance audits.",
    icon: "🛡️"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="section-title">Empowerment <span className="text-[#78350f]">Programs</span></h2>
        <p className="text-stone-600 max-w-xl mx-auto italic">Building knowledge through structured training and workshops.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((p, i) => (
          <div key={i} className="p-10 rounded-3xl bg-white border-2 border-stone-100 hover:border-[#14532d] transition-all group shadow-sm">
            <div className="text-4xl mb-6">{p.icon}</div>
            <h3 className="text-xl font-bold text-stone-900 mb-4">{p.title}</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}