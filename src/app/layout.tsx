import type { Metadata } from "next";
import { Gabarito, Manrope } from "next/font/google";
import "@/app/globals.css";
import HeaderPrimary from "@/components/homepage/HeaderPrimary";
import SideNav from "@/components/homepage/SideNav";
import ThemeProvider from "@/components/ThemeProvider";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bagiqata",
  description: "Bagikan Quote Berfaedah ke Sesama",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen overflow-x-hidden ${gabarito.className} ${manrope.className} antialiased`}
      >
        <ThemeProvider>
          <HeaderPrimary />
          <div className="flex flex-1">
            <SideNav />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
