import type { Metadata } from "next";
import { Gabarito, Manrope } from "next/font/google";
import "@/app/global.css";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bagiqata",
  description: "Bagikan Quote Berfaedah ke Sesama",
};

export default function feedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen w-full max-w-[1600px] mx-auto overflow-x-hidden ${gabarito.className} ${manrope.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
