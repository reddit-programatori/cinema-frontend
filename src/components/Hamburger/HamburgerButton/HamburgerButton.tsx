import IconHamburger from "@/components/ui/icons/hamburger-menu.svg";
import styles from "./HamburgerButton.module.css";
import { useHamburger } from "@/app/providers/HamburgerProvider";

export const HamburgerButton = () => {
  const { toggleMenu } = useHamburger();

  return (
    <button
      className={styles.hamburger}
      aria-label="Open menu"
      aria-controls="primary-navigation"
      onClick={toggleMenu}
    >
      <IconHamburger aria-hidden="true" />
    </button>
  );
};
