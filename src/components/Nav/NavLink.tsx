import Link from "next/link";
import IconArrowUpRight from "@/components/ui/icons/arrow-up-right.svg";
import styles from "./NavLink.module.css";

import { LinkProp } from "@/config/navigation";

export const NavLink = ({ href, label }: LinkProp) => {
  return (
    <li>
      <Link href={href} className={styles.item}>
        <span>{label}</span>
        <IconArrowUpRight aria-hidden="true" />
      </Link>
    </li>
  );
};
