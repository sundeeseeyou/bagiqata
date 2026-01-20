import type { Metadata } from "next";
import { Gabarito, Manrope } from "next/font/google";
import "../globals.css";
import HeaderPrimary from "../components/homepage/HeaderPrimary";
import SideNav from "../components/homepage/SideNav";
import ThemeProvider from "../components/ThemeProvider";

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

export default function feedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen overflow-x-hidden ${gabarito.className} ${manrope.className} antialiased`}
      >
        <ThemeProvider>
          <HeaderPrimary />

          <div className="flex justify-center max-w-[1920px] mx-auto w-full">
            {/* Sidebar - positioned left */}
            <SideNav />

            {/* Main Content Area */}
            <div className="flex-1 w-full min-w-0">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
