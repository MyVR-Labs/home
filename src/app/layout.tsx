import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyVR-Labs | Digital Visibility & VR Solutions",
  description: "MyVR-Labs provides cutting-edge digital visibility solutions, immersive VR experiences, and AI-powered technologies for your business transformation.",
  keywords: "VR solutions, digital marketing, AI integration, web development, 3D visualization",
  authors: [{ name: "MyVR-Labs" }],
  openGraph: {
    title: "MyVR-Labs | Digital Visibility & VR Solutions",
    description: "Transform your business with innovative digital solutions",
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
      <body className="bg-white text-zinc-900 antialiased selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
