"use client";

import IconHamburger from "@/components/ui/icons/hamburger-menu.svg";
import styles from "./HamburgerButton.module.css";

export const HamburgerButton = () => {
  return (
    <button
      className={styles.hamburger}
      aria-label="Open menu"
      onClick={() => {
        /* toggle menu state */
        // openMenu(...)
        console.log("Open menu ()");
      }}
    >
      <IconHamburger aria-hidden="true" />
    </button>
  );
};
