import Image from "next/image";
import styles from "./page.module.css";
import FormLogin from "@/components/loginComp/formLogin";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftPanel}>
          <p className={styles.welcome}>DOBRODOŠAO NAZAD</p>
          <h1 className={styles.heading}>
            Tvoj grad.
            <br />
            Tvoj film.
            <br />
            Tvoje sedište.
          </h1>
          <p className={styles.description}>
            Rezerviši mesto za film u par klikova. Sve bioskope. Jedan nalog.
          </p>
        </div>

        <div className={styles.rightPanel}>
          <h2 className={styles.title}>Prijavi se</h2>
          <p className={styles.subtitle}>Nastavi tamo gde si stao.</p>

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

          <FormLogin />

          <p className={styles.register}>
            Nemate nalog? <a href="/register">Registrujte se</a>
          </p>
        </div>
      </div>
    </div>
  );
}
