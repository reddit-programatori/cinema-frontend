import { Hero } from "@/features/hero/components/Hero/Hero";
import styles from "./home.module.css";
import { Genres } from "@/features/genres/components/Genres";
import AiAssistantBox from "@/features/input-ai/components/AiAssistantBox";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className={styles.wrapper}>
        <AiAssistantBox />
        <Genres />
      </div>
    </div>
  );
}
