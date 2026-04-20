import { NAV_LINKS } from "@/config/navigation";
import { NavLink } from "./NavLink";
import styles from "./NavItems.module.css";

export const NavItems = () => {
  return (
    <ul className={styles.list}>
      {NAV_LINKS.map(({ href, label }) => (
        <NavLink key={label} label={label} href={href} />
      ))}
    </ul>
  );
};
