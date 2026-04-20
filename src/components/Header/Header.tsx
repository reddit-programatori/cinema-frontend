import Link from "next/link";
import { NavItems } from "../Nav/NavItems";
import Image from "next/image";
import { HeaderActions } from "./HeaderActions";

import styles from "./Header.module.css";

import { HamburgerItems } from "../Hamburger/HamburgerItems/HamburgerItems";
import { HamburgerProvider } from "@/app/providers/HamburgerProvider";
import { HamburgerButton } from "../Hamburger/HamburgerButton/HamburgerButton";

export const Header = () => {
  return (
    <HamburgerProvider>
      <header className="top-0 sticky px-4 py-2.5 w-full">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Company Name logo"
              width={96}
              height={96}
              loading="eager"
            />{" "}
          </Link>

          <nav className={styles.desktopNav} aria-label="Desktop navigation">
            <NavItems />
          </nav>
          <div className={styles.actions}>
            <HeaderActions className={styles.authLinksDesktop} />
            <HamburgerButton />
          </div>
        </div>

        <HamburgerItems />
      </header>
    </HamburgerProvider>
  );
};
