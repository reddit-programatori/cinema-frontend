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
            <p className={styles.ganreText}>{movie.Genres[0]}</p>
          </div>
        )}
        <Image width={250} height={200} src={movie.Picture} alt="movie" className={styles.image} />
      </div>
      <p className={styles.movieTitle}>{movie.Title}</p>
      <div className={styles.cinemaText}>{movie.CinemaList[0]}</div>
      {displayOptions.showRating && (
        <div className={styles.rating}>
          <p className={styles.ratingText}>
            <span>IMDb</span>
            {movie.rating}
            <span>⭐⭐⭐⭐</span>
            {/* static emoji for now */}
          </p>
        </div>
      )}
      {/* missing - for cinemas to be listed option */}
      {/* - */}
    </div>
  );
}
