"use client";

import { NavItems } from "@/components/Nav/NavItems";
import styles from "./HamburgerItems.module.css";
import { useHamburger } from "@/app/providers/HamburgerProvider";

export const HamburgerItems = () => {
  const { isMenuOpen } = useHamburger();

  return (
    <div className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.open : styles.closed}`}>
      <nav className={styles.mobileNav} aria-label="Mobile navigation">
        <NavItems />
      </nav>
    </div>
  );
};
