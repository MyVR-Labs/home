import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CraftMVP | We Build MVPs for Growing Businesses",
  description: "CraftMVP builds production-ready MVPs — websites, mobile apps, and business automation tools — so you can launch faster and grow smarter.",
  keywords: "MVP development, web development, mobile app development, business automation, startup MVP",
  authors: [{ name: "CraftMVP" }],
  openGraph: {
    title: "CraftMVP | We Build MVPs for Growing Businesses",
    description: "Ship your MVP fast. We build websites, mobile apps, and automation tools for businesses.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900;1,14..32,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        className="bg-white text-ink-900 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
