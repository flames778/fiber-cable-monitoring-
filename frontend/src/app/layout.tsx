import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NNI - Nigeria Network Intelligence",
  description: "Web-Only National Network & Fiber Monitoring System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0A0A0A] text-gray-100 min-h-screen flex flex-col`}>
        <nav className="bg-[#111111] border-b border-gray-800 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              NNI
            </Link>
            <div className="hidden md:flex space-x-4 text-sm font-medium text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Dashboard</Link>
              <Link href="/map" className="hover:text-white transition-colors text-white">Live Map</Link>
              <Link href="/incidents" className="hover:text-white transition-colors">Incidents</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Status: <span className="text-green-500">97.8% Healthy</span></span>
          </div>
        </nav>
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
