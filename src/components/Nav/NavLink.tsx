import Link from "next/link";
import IconArrowUpRight from "@/components/ui/icons/arrow-up-right.svg";
import styles from "./NavLink.module.css";

import { LinkProp } from "@/config/navigation";

export const NavLink = ({ href, label }: LinkProp) => {
  return (
    <li className={styles.item}>
      <Link href={href} className="flex items-center gap-1 hover:text-blue-400 transition">
        <span>{label}</span>
        <IconArrowUpRight />
      </Link>
    </li>
  );
};
