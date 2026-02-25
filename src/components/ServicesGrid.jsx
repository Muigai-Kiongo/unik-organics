const services = [
  {
    title: "Audit Readiness",
    desc: "Preparation for Rainforest Alliance & EU Organic certifications.",
    icon: "📋"
  },
  {
    title: "Land Rehabilitation",
    desc: "Scientific restoration of soil health and ecological systems.",
    icon: "🌱"
  },
  {
    title: "Documentation",
    desc: "Complete management of farm logs and certification paperwork.",
    icon: "📁"
  },
  {
    title: "KEPHIS Collaboration",
    desc: "Soil toxicology tests in partnership with national institutes.",
    icon: "🔬"
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-stone-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title">Consultation <span className="text-accent-brown">& Services</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-stone-200 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-stone-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}