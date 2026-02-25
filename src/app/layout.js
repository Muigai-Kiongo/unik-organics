import "./globals.css";

export const metadata = {
  title: "UNIK Organics | Sustainable Agriculture & Certification",
  description: "Preparing farmers for Rainforest Alliance and EU Organic audits while restoring land and improving ecological performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}