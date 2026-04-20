import { NAV_LINKS } from "@/config/navigation";
import { NavLink } from "./NavLink";
import styles from "./Nav.module.css";

type Props = {
  className?: string;
  ariaLabel?: string;
};

export const Nav = ({ ariaLabel = "Desktop navigation", className }: Props) => {
  return (
    <nav aria-label={ariaLabel} className={className ?? ""}>
      <ul className={styles.list}>
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={label} label={label} href={href} />
        ))}
      </ul>
    </nav>
  );
};
