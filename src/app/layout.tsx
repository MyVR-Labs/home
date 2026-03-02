import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CraftMVP | We Build MVPs for Businesses",
  description: "CraftMVP builds production-ready MVPs — websites, mobile apps, and business automation tools — so you can launch faster and grow smarter.",
  keywords: "MVP development, web development, mobile app development, business automation, startup MVP, website builder",
  authors: [{ name: "CraftMVP" }],
  openGraph: {
    title: "CraftMVP | We Build MVPs for Businesses",
    description: "Ship your MVP fast. We build websites, mobile apps, and automation tools for businesses.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-brand-950 text-white antialiased selection:bg-brand-400/30" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
