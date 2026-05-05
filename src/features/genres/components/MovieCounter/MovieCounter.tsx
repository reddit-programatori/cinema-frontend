import styles from "./MovieCounter.module.css";

export const MovieCounter = ({ label }: { label: string }) => {
  return <div className={styles.divider}>{label}</div>;
};
