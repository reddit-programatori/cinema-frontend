import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

import { Nav } from "../Nav/Nav";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Image src="/logo.svg" alt="Company Name logo" width={96} height={96} loading="eager" />
      </Link>
      <Nav />
    </footer>
  );
}
