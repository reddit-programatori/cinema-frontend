"use client";
import styles from "./formLogin.module.css";

export default function FormLogin() {
  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    /* login */
    console.log("login");
  };

  return (
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
  );
}
