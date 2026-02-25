import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Soil Toxicity Mitigation",
      location: "Central Kenya",
      scope: "Implementation of organic agronomic protocols to address heavy chemical degradation.",
      outcome: "Recorded a 65% reduction in toxic compound levels over an 8-month observation period.",
      image: "/images/ld2.jpeg"
    },
    {
      title: "Group Certification Alignment",
      location: "Rift Valley",
      scope: "Formulation of compliance documentation and farm mapping for a 150-member smallholder cooperative.",
      outcome: "Cooperative successfully attained Rainforest Alliance certification without major non-conformities.",
      image: "/images/cf1.jpeg"
    }
  ];

  return (
    <main className="pt-32 bg-earth-sand min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 mb-6">
            Field Engagements & <br/><span className="text-primary-green">Baseline Studies</span>
          </h1>
          <p className="text-lg text-stone-600">
            An overview of recent advisory mandates involving land rehabilitation and certification structuring.
          </p>
        </header>

        {/* Factual Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="h-64 overflow-hidden border-b border-stone-200">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex-grow">
                <p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">{p.location}</p>
                <h3 className="text-xl font-bold text-stone-900 mb-4">{p.title}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs font-bold text-stone-400 uppercase mb-1">Scope of Work</span>
                    <p className="text-stone-700 text-sm leading-relaxed">{p.scope}</p>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-stone-400 uppercase mb-1">Recorded Outcome</span>
                    <p className="text-stone-700 text-sm leading-relaxed">{p.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* KEPHIS Section (Objective Tone) */}
        <div className="bg-stone-900 p-12 lg:p-16 rounded-2xl text-stone-300 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white">Scientific Partnership: KEPHIS</h2>
            <p className="text-sm leading-relaxed mb-6">
              Advisory interventions require accurate baseline data. UNIK Organics conducts preliminary soil and water toxicology assessments in coordination with the <strong>Kenya Plant Health Research Institute (KEPHIS)</strong>. 
            </p>
            <p className="text-sm leading-relaxed">
              This partnership ensures that all rehabilitation protocols are founded on certified laboratory diagnostics prior to the implementation of internal management systems.
            </p>
          </div>
          <div className="lg:w-1/2 w-full h-64 lg:h-80 rounded-xl overflow-hidden border border-stone-700">
             <img src="/images/tr3.jpeg" alt="Scientific Soil Testing" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </div>
      <ContactCTA />
    </main>
  );
}