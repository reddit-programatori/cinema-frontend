import Link from "next/link";
import IconArrowUpRight from "@/ui/icons/arrow-up-right.svg";
import { LinkProp } from "@/config/navigation";

export const NavLink = ({ href, label }: LinkProp) => {
  return (
    <li>
      <Link href={href} className="flex items-center gap-1 hover:text-blue-400 transition">
        <span>{label}</span>
        <IconArrowUpRight />
      </Link>
    </li>
  );
};
