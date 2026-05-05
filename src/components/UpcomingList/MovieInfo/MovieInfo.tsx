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
        src={data.picture}
        alt="movie picture"
      />
      <div className={styles.infoDiv}>
        <p className={styles.ganreText}>{data.genres.join(" | ")}</p>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.duration}>{data.duration}</p>
        <p className={styles.text}>
          {data.cinemaList.map((cinema, i) => (
            <span key={i} className={styles.cinema}>
              {cinema.name}
            </span>
          ))}
        </p>
      </div>
      <button className={styles.button}>Obavesti me</button>
    </div>
  );
}
