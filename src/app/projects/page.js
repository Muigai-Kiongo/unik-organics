import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Soil Toxicity Recovery",
      location: "Central Kenya",
      focus: "Rehabilitating land after heavy chemical usage using organic protocols.",
      impact: "Reduced toxic levels by 65% in 8 months."
    },
    {
      title: "Rainforest Alliance Alignment",
      location: "Rift Valley",
      focus: "Documentation and mapping of 150+ smallholder farms for group certification.",
      impact: "100% audit pass rate on first attempt."
    }
  ];

  return (
    <main className="pt-32 min-h-screen bg-earth-sand">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <header className="max-w-3xl mb-16">
          <h1 className="text-5xl font-black text-primary-green mb-6 leading-tight">
            Land Rehabilitation & <span className="text-accent-brown">Documentation</span>
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            From soil sample collection in collaboration with <strong>KEPHIS</strong> to final certification audit readiness, 
            our projects demonstrate the power of sustainable restoration.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {projects.map((project, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm">
              <span className="text-xs font-bold text-accent-brown uppercase tracking-widest block mb-4">
                {project.location}
              </span>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">{project.title}</h3>
              <p className="text-stone-600 mb-6">{project.focus}</p>
              <div className="py-4 border-t border-stone-100">
                <p className="text-sm font-bold text-primary-green">Impact: {project.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Documentation Section */}
        <section className="bg-[#14532d] rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Scientific Validation</h2>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Every project begins with soil sample collection for toxicology tests. 
              We collaborate directly with the <strong>Kenya Plant Health Research Institute (KEPHIS)</strong> 
               to ensure data-driven restoration.
            </p>
            <div className="flex gap-4">
               <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-mono">LAB-READY</div>
               <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-mono">AUDIT-COMPLIANT</div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
            <h4 className="font-bold mb-4 text-emerald-300 uppercase text-xs">The UNIK Methodology</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold">01</span>
                <span>Baseline Soil Toxicology (KEPHIS)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold">02</span>
                <span>Custom Land Rehabilitation Plan</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold">03</span>
                <span>Documentation & Internal Audit Prep</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <ContactCTA />
    </main>
  );
}