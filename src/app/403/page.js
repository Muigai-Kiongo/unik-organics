import Link from "next/link";

export default function Forbidden() {
  return (
    <main className="flex-grow flex items-center justify-center bg-earth-sand py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-sm bg-stone-900 border border-stone-800">
          <span className="text-white text-xs font-bold uppercase tracking-widest">
            Access Restricted
          </span>
        </div>
        
        <h1 className="text-5xl font-black text-stone-900 mb-6 tracking-tight">
          Unauthorized Access.
        </h1>
        
        <p className="text-lg text-stone-600 mb-10 leading-relaxed font-medium">
          You do not have the required security credentials to access this regional advisory document or directory. This resource is strictly reserved for authorized consultancy personnel.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-stone-900 text-white px-8 py-4 rounded-md font-bold hover:bg-stone-800 transition-colors"
          >
            Return to Overview
          </Link>
          <a 
            href="mailto:info@unikorganics.com" 
            className="border border-stone-300 text-stone-700 px-8 py-4 rounded-md font-bold hover:bg-stone-100 transition-colors"
          >
            Request Access
          </a>
        </div>
      </div>
    </main>
  );
}