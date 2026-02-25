export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-stone-100 border-t border-stone-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-stone-900">
          Advisory Inquiry
        </h2>
        <p className="text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Contact our consultancy team to discuss technical requirements for land rehabilitation, IMS integration, or pre-audit compliance frameworks.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:info@unikorganics.com" 
            className="bg-stone-900 text-white px-8 py-4 rounded-md font-bold hover:bg-stone-800 transition-colors text-center text-sm"
          >
            Submit RFP / Email Us
          </a>
          <a 
            href="https://wa.me/254758889075" 
            className="bg-white border border-stone-300 text-stone-700 px-8 py-4 rounded-md font-bold hover:bg-stone-50 transition-colors text-center text-sm"
          >
            Direct WhatsApp Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}