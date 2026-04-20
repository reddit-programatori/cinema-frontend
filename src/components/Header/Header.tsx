import Link from "next/link";
import { Nav } from "../Nav/Nav";
import Image from "next/image";
import { HeaderActions } from "./HeaderActions";

import styles from "./Header.module.css";

import { HamburgerItems } from "../Hamburger/HamburgerItems/HamburgerItems";
import { HamburgerButton } from "../Hamburger/HamburgerButton/HamburgerButton";
import { HamburgerProvider } from "@/providers/HamburgerProvider";

export const Header = () => {
  return (
    <HamburgerProvider>
      <header className="top-0 z-50 fixed bg-black px-4 py-2.5 w-full">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="Company Name logo" width={96} height={96} loading="eager" />
          </Link>

          <Nav className={styles.desktopNav} />
          <div className={styles.actions}>
            <HeaderActions />
            <HamburgerButton />
          </div>
        </div>

        <HamburgerItems />
      </header>
    </HamburgerProvider>
  );
};
