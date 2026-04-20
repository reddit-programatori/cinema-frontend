import { Link } from "@/components/Link/Link";
import styles from "./Hero.module.css";
import { ParticlesBackground } from "../ParticlesBackground/ParticlesBackground";
import IconArrowUpRight from "@/components/ui/icons/arrow-up-right.svg";

export const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <ParticlesBackground />
      <div className={styles.hero}>
        <h1>Tvoj grad. Tvoj film. Tvoje sedište.</h1>
        <p>Rezerviši mesto za film u par klikova.</p>
        <Link href="/sign-in" variant="outline">
          Prijava
          <IconArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};
