// src/app/layout.tsx

import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "SnapZoška",
  description: "Created by students of SPŠE Zochova 9, Bratislava",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
          <div style={{ minHeight: '92vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ flexGrow: 1 }}>
              {children}
            </main>
          </div>
          <Navbar /> {/* Moved Navbar outside of the main container */}
      </body>
    </html>
  );
}
