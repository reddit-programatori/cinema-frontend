import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>
        <h1>Tvoj grad. Tvoj film. Tvoje sedište.</h1>
        <p>Rezerviši mesto za film u par klikova.</p>
        <ButtonLink href="#" variant="outline">
          Prijava
          {/* // TODO: Add top-right arrow */}
        </ButtonLink>
      </div>
    </section>
  );
};
