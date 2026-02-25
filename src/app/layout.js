import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "UNIK Organics | Regional Technical Advisory",
    template: "%s | UNIK Organics"
  },
  description: "Independent technical advisory providing objective, science-based compliance structuring and ecological restoration across the East African agricultural sector.",
  keywords: [
    "Regional Agricultural Advisory Africa", 
    "Rainforest Alliance Compliance", 
    "EU Organic Certification Prep", 
    "KEPHIS Soil Toxicology", 
    "Land Rehabilitation",
    "Internal Management Systems IMS",
    "Export Compliance Advisory"
  ],
  
  icons: {
    icon: "/logos/unik-favicon.png",
    shortcut: "/logos/unik-favicon.png",
    apple: "/logos/unik-favicon.png",
  },
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
    description: "Objective technical advisory for regional agricultural operations focusing on RA/EU Organic frameworks.",
    url: "https://unikorganics.com",
    siteName: "UNIK Organics",
    images: [
      {
        url: "/logos/unik.jpeg", 
        width: 1200,
        height: 630,
        alt: "UNIK Organics Regional Advisory",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNIK Organics | Regional Technical Advisory",
    description: "Compliance structuring and ecological restoration for the East African export sector.",
    images: ["/logos/unik.jpeg"],
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
      <head>
        
        <link rel="icon" href="/logos/unik-favicon.png" sizes="any" />
      </head>
      <body className="antialiased bg-earth-sand text-stone-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col min-h-screen">
        <Navbar />
        
       
        <main className="flex-grow pt-20"> 
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}