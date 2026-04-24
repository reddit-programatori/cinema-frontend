import IconSearch from "@/components/ui/icons/search.svg";
import styles from "./Search.module.css";

type Props = {
  placeholder?: string;
};

export const Search = ({ placeholder }: Props) => {
  return (
    <div className={styles.searchBox}>
      <button className={styles.iconBtn}>
        <IconSearch />
      </button>

      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};
