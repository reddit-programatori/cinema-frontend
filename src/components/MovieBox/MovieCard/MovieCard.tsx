import Image from "next/image";
import styles from "./MovieCard.module.css";
import { MovieDisplayConfig, MovieItem } from "../MovieBox";

type MovieCardProps = {
  movie: MovieItem;
  displayOptions: MovieDisplayConfig;
};

export default function MovieCard({ movie, displayOptions }: MovieCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        {displayOptions.showGenreTag && (
          <div className={styles.cinemaText}>
            <p className={styles.ganreText}>{movie.genres[0]?.name}</p>
          </div>
        )}

        <Image
          width={250}
          height={200}
          src={movie.picture}
          alt={movie.title}
          className={styles.image}
        />
      </div>

      <p className={styles.movieTitle}>{movie.title}</p>

      <div className={styles.cinemaText}>{movie.cinemaList[0]?.name}</div>

      {displayOptions.showRating && (
        <div className={styles.rating}>
          <p className={styles.ratingText}>
            <span>IMDb</span>
            {movie.rating}
            <span>⭐⭐⭐⭐</span>
          </p>
        </div>
      )}
    </div>
  );
}
