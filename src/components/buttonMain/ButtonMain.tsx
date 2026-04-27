import Link from "next/link";
import styles from "./ButtonMain.module.css";
import IconArrow from "@/components/ui/icons/arrow-up-right.svg";

type ButtonMainProp = {
  url: string;
  pos: boolean;
  text: string;
};

export default function ButtonMain({ url, pos = false, text }: ButtonMainProp) {
  return (
    <Link href={url} className={`${styles.button} ${pos ? styles.center : ""}`}>
      {text} <IconArrow />
    </Link>
  );
}
