import Image from "next/image";
import styles from "./MovieCard.module.css";
import { Cinema, MovieDisplayConfig, MovieItem } from "../MovieBox";

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
          alt="movie image"
          className={styles.image}
        />
      </div>

      <p className={styles.movieTitle}>{movie.title}</p>

      <div className={styles.cinemaText}>{renderCinemaList({ cinemas: movie.cinemaList })}</div>

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

const MAX_VISIBLE_CINEMAS = 3;
const renderCinemaList = ({
  cinemas,
  maxVisible = MAX_VISIBLE_CINEMAS,
}: {
  cinemas: Cinema[];
  maxVisible?: number;
}) => {
  const cinemaNames = cinemas.map((cinema) => cinema.name);

  if (cinemas.length <= maxVisible) {
    return cinemaNames.join(", ");
  }

  return `${cinemaNames.slice(0, maxVisible).join(", ")}...`;
};
