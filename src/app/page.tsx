import { Hero } from "@/features/hero/components/Hero/Hero";
import styles from "./home.module.css";
import { Genres } from "@/features/genres/components/Genres";
import AiAssistantBox from "@/features/input-ai/components/AiAssistantBox";
import MovieBox from "@/components/MovieBox/MovieBox";
import Line from "@/components/Line/Line";
import UpcomingList from "@/components/UpcomingList/Upcoming";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className={styles.wrapper}>
        <AiAssistantBox />
        <MovieBox
          listType="slide"
          displayOptions={{
            showGenreTag: true,
            showRating: true,
          }}
        />
        <Genres />
        <Line mt />
        <MovieBox
          listType="grid"
          displayOptions={{
            showGenreTag: false,
            showRating: false,
          }}
        />
        <UpcomingList />
      </div>
    </div>
  );
}
