"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // In a production environment, this would log to a service like Sentry
    console.error("System Exception:", error);
  }, [error]);

  return (
    <main className="flex-grow flex items-center justify-center bg-earth-sand py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-sm bg-red-100 border border-red-200">
          <span className="text-red-800 text-xs font-bold uppercase tracking-widest">
            System Exception
          </span>
        </div>
        
        <h1 className="text-5xl font-black text-stone-900 mb-6 tracking-tight">
          Application Error.
        </h1>
        
        <p className="text-lg text-stone-600 mb-10 leading-relaxed">
          An unexpected technical anomaly has occurred while processing your request. Our internal diagnostics have logged this exception for immediate review.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="bg-primary-green text-white px-8 py-4 rounded-md font-bold hover:bg-[#0a2e18] transition-colors"
          >
            Attempt Recovery
          </button>
          <Link 
            href="/contact" 
            className="border border-stone-300 text-stone-700 px-8 py-4 rounded-md font-bold hover:bg-stone-100 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}