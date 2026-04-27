import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

import IconArrow from "@/components/ui/icons/arrow-up-right.svg";

const navItems = [
  { label: "Početna", href: "/" },
  { label: "Uskoro", href: "/uskoro" },
  { label: "Rezerviši", href: "/rezervisi" },
  { label: "Kategorije", href: "/kategorije" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Image src="/logo.svg" alt="Company Name logo" width={96} height={96} loading="eager" />
      </Link>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className={styles.navLink}>
            {item.label}
            <span className={styles.arrow}>
              <IconArrow />
            </span>
          </a>
        ))}
      </nav>
    </footer>
  );
}
