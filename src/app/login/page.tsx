"use client";
import styles from "./page.module.css";

export default function Login() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // logic
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>LOGIN</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" placeholder="email@gmail.com" required />
          </div>
          <div className={styles.field}>
            <div className={styles.passwordRow}>
              <label>Password</label>
              <a href="#">Forgot password?</a>
            </div>
            <div className={styles.passwordInput}>
              <input type="password" placeholder="" required />
              <span className={styles.eye}>👁</span>
            </div>
          </div>

          <div className={styles.remember}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>

        <p className={styles.footer}>
          Don`t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}
