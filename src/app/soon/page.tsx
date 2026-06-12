import { GradientBackground } from "@/components/GradientBackground/GradientBackground";
import style from "./page.module.css";
import MovieFeatue from "@/components/MovieFeature/MovieFeature";
import UpcomingList from "@/components/UpcomingList/Upcoming";

export default function Soon() {
  return (
    <div>
      <GradientBackground className={style.wrapper}>
        <MovieFeatue />
      </GradientBackground>
      <div className={style.list}>
        <UpcomingList headerType={"main"} />
      </div>
    </div>
  );
}
