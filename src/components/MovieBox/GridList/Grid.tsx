import { Link } from "@/components/Link/Link";
import { MovieDisplayConfig, MovieItem } from "../MovieBox";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./Grid.module.css";

import IconArrow from "@/components/ui/icons/arrow-up-right.svg";

export type SwiperListProps = {
  movies: MovieItem[];
  displayOptions: MovieDisplayConfig;
};

export default function MovieGrid({ movies, displayOptions }: SwiperListProps) {
  const visibleMovies = movies;
  return (
    <>
      <div className={styles.grid}>
        {visibleMovies.map((movieOne, index) => (
          <MovieCard key={index} movie={movieOne} displayOptions={displayOptions} />
        ))}
      </div>
      {movies.length > 4 && (
        <Link size="lg" href={"/"} variant="arrow" className={styles.button}>
          Vidi vise <IconArrow />
        </Link>
      )}
    </>
  );
}
