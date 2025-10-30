import type { Metadata } from "next";
import "./globals.css";
import FloatingGlassNavbar from "@/_components/floating-navbar/FloatingNavbar";
import { ThemeProvider } from "@/context/ThemeContext";

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
        className={`antialiased relative min-h-dvh w-full overflow-x-hidden flex items-center justify-center`}
      >
        <ThemeProvider>
          <FloatingGlassNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
