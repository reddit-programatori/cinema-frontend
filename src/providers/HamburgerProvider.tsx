"use client";
import { createContext, useContext, useState } from "react";

const HamburgerContext = createContext({ isMenuOpen: false, toggleMenu: () => {} });

export const HamburgerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <HamburgerContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </HamburgerContext.Provider>
  );
};

export const useHamburger = () => useContext(HamburgerContext);
