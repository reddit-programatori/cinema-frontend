import styles from "./Divider.module.css";

export const Divider = ({ label }: { label: string }) => {
  return <div className={styles.divider}>{label}</div>;
};
