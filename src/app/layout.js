import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "UNIK Organics | Independent Agricultural Advisory",
  description: "Providing objective, science-based guidance to align Kenyan agricultural operations with Rainforest Alliance and EU Organic regulatory frameworks.",
  keywords: [
    "Agricultural Advisory Kenya", 
    "Rainforest Alliance Compliance", 
    "EU Organic Certification Prep", 
    "KEPHIS Soil Toxicology", 
    "Land Rehabilitation Kenya",
    "Internal Management Systems IMS"
  ],
  authors: [{ name: "UNIK Organics" }],
  creator: "UNIK Organics",
  publisher: "UNIK Organics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "UNIK Organics | Compliance & Ecological Restoration",
    description: "Independent agricultural advisory providing compliance structuring and ecological rehabilitation protocols for the Kenyan export sector.",
    url: "https://unikorganics.com",
    siteName: "UNIK Organics",
    images: [
      {
        url: "/images/p1.jpeg", // This will show up when you share the link on WhatsApp/LinkedIn
        width: 1200,
        height: 630,
        alt: "UNIK Organics Agricultural Advisory",
      },
    ],
    locale: "en_KE", // Specifically targeting Kenya
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-earth-sand text-stone-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col min-h-screen">
        <Navbar />
        
        {/* flex-grow pushes the footer to the bottom of the screen on short pages */}
        <div className="flex-grow pt-20"> 
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}