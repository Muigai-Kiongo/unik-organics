import Navbar from "@/components/Navbar";
import ContactCTA from "@/components/ContactCTA";

export default function ProgramsPage() {
  return (
    <main className="pt-32 min-h-screen bg-earth-sand">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <header className="max-w-3xl mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-100 border border-emerald-200">
            <span className="text-primary-green text-xs font-bold uppercase tracking-widest">Capacity Building</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-primary-green mb-6">Our Programs</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Building the technical and operational capacity of Kenyan agriculture to meet global standards.
          </p>
        </header>

        <div className="space-y-24">
          {/* Program 1: Workshops */}
          <section className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-stone-900 underline underline-offset-8 decoration-primary-green">
                Workshops & Field Training
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Practical, hands-on sessions designed for farmers and field officers. We simplify the complexities of certification into actionable farm-level practices.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-700 font-medium mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-primary-green">●</span> Organic Pest Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-green">●</span> Post-Harvest Handling
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-green">●</span> Soil Fertility Restoration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-green">●</span> Certification Documentation
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src="/images/cf3.jpeg" alt="Field Training" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          {/* Program 2: IMS */}
          <section className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-stone-900 underline underline-offset-8 decoration-accent-brown">
                Internal Management System (IMS)
              </h2>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Our digital platform provides exporters with real-time visibility into their supply chain. Track compliance, manage farmer logs, and monitor audit readiness across thousands of smallholders.
              </p>
              <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
                <p className="text-sm font-bold uppercase text-accent-brown mb-4 tracking-widest">Tech-Agri Features</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-stone-700">Digital Training Logs</span>
                    <span className="text-xs bg-emerald-100 text-primary-green px-2 py-1 rounded">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-stone-700">Compliance Dashboards</span>
                    <span className="text-xs bg-emerald-100 text-primary-green px-2 py-1 rounded">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-stone-700">Audit Readiness Tracking</span>
                    <span className="text-xs bg-emerald-100 text-primary-green px-2 py-1 rounded">LIVE</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img src="/images/pn2.jpeg" alt="Management System" className="w-full h-full object-cover" />
              </div>
            </div>
          </section>
        </div>
      </div>

      <ContactCTA />
    </main>
  );
}