import { Hero } from "@/features/home/components/Hero/Hero";
import styles from "./home.module.css";
import { Genres } from "@/features/home/components/Genres/Genres";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className={styles.wrapper}>
        <Genres />
      </div>
    </div>
  );
}
