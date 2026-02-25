export default function ContactCTA() {
  const whatsappLink = "https://wa.me/254758889075"; // Updated to your number
  
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-[#78350f] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
        {/* Subtle decorative circle */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full" />
        
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          Ready to Certify <br />Your Harvest?
        </h2>
        <p className="text-amber-100/80 text-lg mb-12 max-w-2xl mx-auto">
          Contact our consultants today for a farm assessment. We are available via Email and WhatsApp for immediate response.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href={whatsappLink} target="_blank" className="bg-white text-[#78350f] px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-emerald-50 transition-colors shadow-lg">
            <span>Contact WhatsApp</span>
          </a>
          <a href="mailto:info@unikorganics.com" className="bg-emerald-900 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-emerald-950 transition-colors shadow-lg">
            <span>info@unikorganics.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}