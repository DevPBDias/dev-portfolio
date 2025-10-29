"use client";
import { createContext, useContext, useState } from "react";

type Section = "home" | "sobre" | "projetos" | "contato";

interface SectionContextProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const SectionContext = createContext<SectionContextProps | undefined>(
  undefined
);

export const SectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<Section>("home");

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSection deve ser usado dentro de SectionProvider");
  }
  return context;
};
