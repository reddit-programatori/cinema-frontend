import { MovieItem } from "@/components/MovieBox/MovieBox";
import styles from "./MovieInfo.module.css";
import Image from "next/image";

type MovieInfoProp = {
  data: MovieItem;
};

export default function MovieInfo({ data }: MovieInfoProp) {
  return (
    <div className={styles.mainDiv}>
      <Image
        width={150}
        height={150}
        className={styles.img}
        src={data.Picture}
        alt="movie picture"
      />
      <div className={styles.infoDiv}>
        <p className={styles.ganreText}>{data.Genres.join(" | ")}</p>
        <p className={styles.title}>{data.Title}</p>
        <p className={styles.duration}>{data.Duration}</p>
        <p className={styles.text}>
          {data.CinemaList.map((cinema, i) => (
            <span key={i} className={styles.cinema}>
              {cinema}
            </span>
          ))}
        </p>
      </div>
      <button className={styles.button}>Obavesti me</button>
    </div>
  );
}
