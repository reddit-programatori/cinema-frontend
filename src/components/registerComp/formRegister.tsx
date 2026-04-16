"use client";
import styles from "./formRegister.module.css";

export default function FormRegister() {
  const handleSubmitRegister = (e: React.FormEvent) => {
    e.preventDefault();
    /* register */
    console.log("register");
  };
  return (
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
  );
}
