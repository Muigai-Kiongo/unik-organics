import Navbar from "@/components/Navbar";

export default function ProgramsPage() {
  return (
    <main className="pt-32">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <h1 className="text-5xl font-black text-primary-green mb-6">Our Programs</h1>
        <p className="text-xl text-stone-600 mb-12">Building capacity for the future of Kenyan organic agriculture.</p>
        
        <div className="space-y-12">
          {/* Program 1 */}
          <div className="bg-white p-10 rounded-3xl border-l-8 border-primary-green shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Workshops & Training</h2>
            <p className="text-stone-600 mb-4">Practical, hands-on sessions for farmers focusing on:</p>
            <ul className="grid md:grid-cols-2 gap-3 text-stone-700 font-medium">
              <li>• Organic Pest Management</li>
              <li>• Post-Harvest Handling</li>
              <li>• Soil Fertility Restoration</li>
              <li>• Certification Documentation</li>
            </ul>
          </div>

          {/* Program 2 */}
          <div className="bg-white p-10 rounded-3xl border-l-8 border-accent-brown shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Internal Management System (IMS)</h2>
            <p className="text-stone-600">
              We provide exporters and farm groups with a robust digital management system to track compliance, 
              farmer training logs, and audit readiness status in real-time.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}