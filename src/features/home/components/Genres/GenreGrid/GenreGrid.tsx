import { GenreCard } from "../GenreCard/GenreCard";
import styles from "./GenreGrid.module.css";

type Props = {
  id: string;
  name: string;
  movieCount: number;
};

export const GenreGrid = ({ genres }: { genres: Props[] }) => {
  return (
    <div className={styles.wrapper}>
      {genres.map((genre) => (
        <GenreCard
          key={genre.id}
          genreName={genre.name}
          movieCount={genre.movieCount}
          id={genre.id}
          className={styles.item}
        />
      ))}
    </div>
  );
};
