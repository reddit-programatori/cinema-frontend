import { NAV_LINKS } from "@/config/navigation";
import { NavLink } from "./NavLink";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={label} label={label} href={href} />
        ))}
      </ul>
    </nav>
  );
};
