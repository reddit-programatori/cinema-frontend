"use client";

import IconHamburger from "@/components/ui/icons/hamburger-menu.svg";
import IconCross from "@/components/ui/icons/icon-cross.svg";
import styles from "./HamburgerButton.module.css";
import { useHamburger } from "@/providers/HamburgerProvider";

export const HamburgerButton = () => {
  const { toggleMenu, isMenuOpen } = useHamburger();

  return (
    <button
      className={styles.hamburger}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMenuOpen}
      aria-controls="primary-navigation"
      onClick={toggleMenu}
    >
      {isMenuOpen ? <IconCross aria-hidden="true" /> : <IconHamburger aria-hidden="true" />}
    </button>
  );
};
