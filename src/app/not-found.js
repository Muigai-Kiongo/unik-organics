import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center bg-earth-sand py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-sm bg-stone-200 border border-stone-300">
          <span className="text-stone-800 text-xs font-bold uppercase tracking-widest">
            Error 404
          </span>
        </div>
        
        <h1 className="text-5xl font-black text-stone-900 mb-6 tracking-tight">
          Resource Not Located.
        </h1>
        
        <p className="text-lg text-stone-600 mb-10 leading-relaxed">
          The advisory document, project file, or directory you are attempting to access cannot be found. It may have been reclassified, relocated, or temporarily archived.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/" 
            className="bg-stone-900 text-white px-8 py-4 rounded-md font-bold hover:bg-stone-800 transition-colors"
          >
            Return to Overview
          </Link>
          <Link 
            href="/programs" 
            className="border border-stone-300 text-stone-700 px-8 py-4 rounded-md font-bold hover:bg-stone-100 transition-colors"
          >
            View Advisory Programs
          </Link>
        </div>
      </div>
    </main>
  );
}