import styles from "./Header.module.css";

import IconArrow from "@/components/ui/icons/arrow-up-right.svg";
import { Link } from "../Link/Link";
import { Search } from "../Search/Search";

export const HeaderActions = () => {
  return (
    <div className={styles.actions}>
      <Search placeholder="Naziv filma..." />

      <Link variant="primary" href="/login">
        Prijava <IconArrow />
      </Link>
    </div>
  );
};
