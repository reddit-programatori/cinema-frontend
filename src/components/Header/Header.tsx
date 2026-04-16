import Link from "next/link";
import { Nav } from "../Nav/Nav";
import Image from "next/image";
import { HeaderActions } from "./HeaderActions";

import styles from "./Header.module.css";
import { HamburgerButton } from "../HamburgerButton/HamburgerButton";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2.5">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={96} height={96} />
      </Link>
      <Nav className={styles.nav} />
      <div className={styles.actions}>
        <HeaderActions className={styles.headerActions} />
        <HamburgerButton />
      </div>
    </header>
  );
};
