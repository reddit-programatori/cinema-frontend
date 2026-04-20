import Image from "next/image";
import styles from "./page.module.css";
import FormRegister from "@/components/registerComp/formRegister";

export default function Register() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftPanel}>
          <p className={styles.welcome}>NOVI NALOG</p>
          <h1 className={styles.heading}>
            Tvoj grad.
            <br />
            Tvoj film.
            <br />
            Tvoje sedište.
          </h1>
          <p className={styles.description}>Registruj se i nikada više ne čekaj u redu za karte.</p>

          <div className={styles.pointers}>
            <div className={styles.pointer}>
              <Image
                className={styles.checkMark}
                alt="arrow"
                src={"/check.svg"}
                width={25}
                height={25}
              />
              <span>Rezervacija za par klikova.</span>
            </div>
            <div className={styles.pointer}>
              <Image
                className={styles.checkMark}
                alt="arrow"
                src={"/check.svg"}
                width={25}
                height={25}
              />
              <span>Istorija svih tvojih karata.</span>
            </div>
            <div className={styles.pointer}>
              <Image
                className={styles.checkMark}
                alt="arrow"
                src={"/check.svg"}
                width={25}
                height={25}
              />
              <span>AI preporuke po tvom ukusu.</span>
            </div>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <h2 className={styles.title}>Kreiraj nalog.</h2>
          <p className={styles.subtitle}>Besplatno. Zauvek.</p>

          <div className={styles.socialButtons}>
            <button type="button" className={styles.socialBtn}>
              <Image
                className={styles.logoIcon}
                alt="arrow"
                src={"/google.svg"}
                width={25}
                height={25}
              />
              Google
            </button>
            <button type="button" className={styles.socialBtn}>
              <Image
                className={styles.logoIcon}
                alt="arrow"
                src={"/apple.svg"}
                width={25}
                height={25}
              />
              Apple
            </button>
          </div>

          <div className={styles.divider}>
            <hr />
            <div className={styles.deviderMiddle}>
              <span>ili email</span>
              <Image
                className={styles.arrowIcon}
                alt="arrow"
                src={"/arrow.svg"}
                width={25}
                height={25}
              />
            </div>
          </div>

          <FormRegister />

          <a href="/login" className={styles.register}>
            Nazad na stranicu za prijavu
          </a>
        </div>
      </div>
    </div>
  );
}
