import type { Metadata } from "next";
import { Manrope, Cormorant_Infant } from "next/font/google";
import AOSProvider from "./AosProvider";
import "./globals.css";

const geistSans = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Cormorant_Infant({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nutricionet - Eugenia Tolosa",
  description: "Nutrición real, herramientas para tu vida diaria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
