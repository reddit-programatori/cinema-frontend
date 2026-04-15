"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

enum signInType {
  Login = "login",
  Register = "register",
}

export default function Login() {
  const [type, setType] = useState<signInType>(signInType.Register);

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    /* login */
  };

  const handleSubmitRegister = (e: React.FormEvent) => {
    e.preventDefault();
    /* register */
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.leftPanel}>
          <p className={styles.welcome}>
            {type === signInType.Login ? "DOBRODOŠAO NAZAD" : "NOVI NALOG"}
          </p>
          <h1 className={styles.heading}>
            Tvoj grad.
            <br />
            Tvoj film.
            <br />
            Tvoje sedište.
          </h1>
          <p className={styles.description}>
            {type === signInType.Login
              ? "Rezerviši mesto za film u par klikova. Sve bioskope. Jedan nalog."
              : "Registruj se i nikada više ne čekaj u redu za karte."}
          </p>
          {type === signInType.Register && (
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
          )}
        </div>

        {/* Login */}
        {type === signInType.Login && (
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

            <form onSubmit={handleSubmitLogin} className={styles.form}>
              <div className={styles.field}>
                <label>Email</label>
                <input type="email" placeholder="ime@gmail.com" />
              </div>

              <div className={styles.field}>
                <div className={styles.passwordLabel}>
                  <label>Lozinka</label>
                  <a href="#">Zaboravili ste lozinku?</a>
                </div>
                <input type="password" placeholder="************" />
              </div>

              <label className={styles.checkbox}>
                <input type="checkbox" />
                Upamti me
              </label>

              <button type="submit" className={styles.submitBtn}>
                Prijava
              </button>
            </form>

            <p
              onClick={() => {
                setType(signInType.Register);
              }}
              className={styles.register}
            >
              Nemate nalog? <a href="#">Registrujte se</a>
            </p>
          </div>
        )}
        {/* Register */}
        {type === signInType.Register && (
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

            <form onSubmit={handleSubmitRegister} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>Name</label>
                  <input type="text" placeholder="John" />
                </div>

                <div className={styles.field}>
                  <label>Surname</label>
                  <input type="text" placeholder="Doe" />
                </div>
              </div>

              <div className={styles.field}>
                <label>Email</label>
                <input type="email" placeholder="ime@gmail.com" />
              </div>

              <div className={styles.field}>
                <label>Password</label>
                <input type="password" placeholder="********" />
              </div>

              <div className={styles.field}>
                <label>Confirm Password</label>
                <input type="password" placeholder="********" />
              </div>

              <label className={styles.checkbox}>
                <input type="checkbox" />
                Remember me
              </label>

              <button type="submit" className={styles.submitBtn}>
                Prijava
              </button>
            </form>

            <p
              onClick={() => {
                setType(signInType.Login);
              }}
              className={styles.register}
            >
              Nazad na stranicu za prijavu
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
