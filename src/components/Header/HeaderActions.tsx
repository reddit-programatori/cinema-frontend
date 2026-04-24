import styles from "./Header.module.css";

import IconSearch from "@/components/ui/icons/search.svg";
import IconArrow from "@/components/ui/icons/arrow-up-right.svg";
import { Link } from "../Link/Link";

export const HeaderActions = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Pretraga" className={styles.input} />

        <button className={styles.iconBtn}>
          <IconSearch />
        </button>
      </div>

      <Link variant="primary" href="/login">
        Prijavi se <IconArrow />
      </Link>
    </div>
  );
};
