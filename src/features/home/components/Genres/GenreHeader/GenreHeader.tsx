import styles from "./GenreHeader.module.css";

export const GenreHeader = () => {
  return (
    <div className={styles.header}>
      <span className={styles.eyebrow}>Pregled po žanru</span>
      <h2 className={styles.title}>Koji žanr večeras?</h2>
      <p className={styles.subtitle}>Izaberi atmosferu koja ti odgovara.</p>
    </div>
  );
};
