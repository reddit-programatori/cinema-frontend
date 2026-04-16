"use client";

import { NavItems } from "@/components/Nav/NavItems";
import Link from "next/link";
import styles from "./HamburgerItems.module.css";
import { useHamburger } from "@/app/providers/HamburgerProvider";

export const HamburgerItems = () => {
  const { isMenuOpen } = useHamburger();

  return (
    <div className={`${styles.hamburgerMenu} ${isMenuOpen ? styles.open : styles.closed}`}>
      <nav className={styles.mobileNav} aria-label="Mobile navigation">
        <NavItems />
        {/* // TODO: Ovo treba da bude SignIn komponenta */}
        <div className={styles.authLinksMobile}>
          <Link href="/sign-in">Prijavi se</Link>
        </div>
      </nav>
    </div>
  );
};
