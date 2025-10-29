import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import FloatingGlassNavbar from "@/_components/floating-navbar/FloatingNavbar";
import FloatingGlassSocialBar from "@/_components/floating-navbar/FloatingSocialMedia";
import HeroImage from "@/_components/layout/HeroImage";
import { SectionProvider } from "@/context/SectionContext";

export const metadata: Metadata = {
  title: "Dev Paulo Dias - Frontend Developer",
  description:
    "Portfólio de Paulo Dias, desenvolvedor front-end especializado em criar experiências web modernas e responsivas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative min-h-screen w-full overflow-hidden flex items-center justify-center`}
      >
        <ThemeProvider>
          <SectionProvider>
            <FloatingGlassNavbar />
            <FloatingGlassSocialBar />
            <HeroImage />
            {children}
          </SectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
