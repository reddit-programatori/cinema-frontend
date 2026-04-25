import styles from "./TextHeader.module.css";

type TextHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
};

export const TextHeader = ({ eyebrow, title, subtitle, align = "center" }: TextHeaderProps) => {
  return (
    <div className={`${styles.header} ${styles[align]}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};
