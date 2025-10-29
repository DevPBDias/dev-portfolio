import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import FloatingGlassNavbar from "@/_components/floating-navbar/FloatingNavbar";
import MobileNavbar from "@/_components/floating-navbar/MobileNavbar";
import FloatingGlassSocialBar from "@/_components/floating-navbar/FloatingSocialMedia";
import HeroImage from "@/_components/layout/HeroImage";
// SectionContext não é mais necessário com parallax/anchors

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
        className={`antialiased relative min-dvh-screen w-full overflow-hidden flex items-center justify-center`}
      >
        <ThemeProvider>
          <FloatingGlassNavbar />
          <MobileNavbar />
          <FloatingGlassSocialBar />
          <HeroImage />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
