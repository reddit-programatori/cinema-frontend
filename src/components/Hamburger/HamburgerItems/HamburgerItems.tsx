"use client";

import { Nav } from "@/components/Nav/Nav";
import styles from "./HamburgerItems.module.css";
import { useHamburger } from "@/providers/HamburgerProvider";

export const HamburgerItems = () => {
  const { isMenuOpen } = useHamburger();

  return (
    <div className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.open : styles.closed}`}>
      <Nav ariaLabel="Mobile navigation" className={styles.mobileNav} />
    </div>
  );
};
