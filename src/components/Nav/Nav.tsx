import { NAV_LINKS } from "@/config/navigation";
import { NavLink } from "./NavLink";
import styles from "./Nav.module.css";

type Props = {
  className?: string;
};
export const Nav = ({ className }: Props) => {
  return (
    <nav className={className}>
      <ul className={styles.list}>
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={label} label={label} href={href} />
        ))}
      </ul>
    </nav>
  );
};
