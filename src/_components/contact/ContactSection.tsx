"use client";
import { useTheme } from "@/context/ThemeContext";
import GlassContainer from "../layout/GlassContainer";
import TitleSection from "../layout/TitleSection";
import { Mail } from "lucide-react";
import ContactSocials from "./ContactSocials";
import ContactCard from "./ContactCard";

const ContactSection = () => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <GlassContainer>
      <section id="contato" className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 text-left w-full">
            <TitleSection
              titleName="Contato"
              subtitle="Aberto a oportunidades, parcerias e freelas. Vamos conversar?"
            />
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end justify-between w-full">
              <ContactCard />
              <ContactSocials />
            </div>
          </div>
        </div>
      </section>
    </GlassContainer>
  );
};

export default ContactSection;
