const items = [
  { title: "Audit Preparation", desc: "Expert guidance for Rainforest Alliance & EU Organic compliance." },
  { title: "Ecological Restoration", desc: "Restoring land health and improving long-term farm performance." },
  { title: "Toxicology Testing", desc: "Professional soil sample collection in collaboration with KEPHIS." }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-100 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold mb-4 text-stone-900">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}