"use client";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  PropsWithChildren,
} from "react";
import { ThemeType } from "./ThemeSelector";

type ThemeContextValue = {
  currentTheme: ThemeType;
  transitioning: boolean;
  changeTheme: (newTheme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("forest-moon");
  const [transitioning, setTransitioning] = useState(false);

  const changeTheme = (newTheme: ThemeType) => {
    if (currentTheme === newTheme) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentTheme(newTheme);
      setTimeout(() => setTransitioning(false), 500);
    }, 300);
  };

  const value = useMemo(
    () => ({ currentTheme, transitioning, changeTheme }),
    [currentTheme, transitioning]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
