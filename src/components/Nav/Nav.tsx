import { NAV_LINKS } from "@/config/navigation";
import { NavLink } from "./NavLink";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-6 text-xl">
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={label} label={label} href={href} />
        ))}
      </ul>
    </nav>
  );
};
