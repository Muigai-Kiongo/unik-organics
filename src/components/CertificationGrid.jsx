const certifications = [
  {
    title: "Rainforest Alliance",
    description: "Expert audit preparation focusing on social, economic, and environmental standards.",
    tag: "Global Standard"
  },
  {
    title: "European Union Organic",
    description: "Ensuring your farm meets the strict regulatory requirements for the EU market.",
    tag: "Market Access"
  }
];

export default function CertificationGrid() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Certification Readiness</h2>
          <p className="text-stone-600 leading-relaxed">
            We navigate the complexities of international standards so you can focus on farming. From initial gap analysis to the final audit.
          </p>
        </div>
        <div className="bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
          <span className="text-emerald-800 text-sm font-bold">100% Compliance Focus</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert) => (
          <div key={cert.title} className="group p-8 rounded-3xl bg-white border border-stone-200 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">{cert.tag}</span>
            <h3 className="text-2xl font-bold text-stone-900 mt-4 mb-3">{cert.title}</h3>
            <p className="text-stone-600 mb-6">{cert.description}</p>
            <button className="text-emerald-800 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
              Learn about the audit process <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}