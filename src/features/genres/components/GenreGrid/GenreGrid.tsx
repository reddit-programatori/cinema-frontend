import { GenreCard } from "../GenreCard/GenreCard";
import styles from "./GenreGrid.module.css";

export type Genre = {
  id: string;
  name: string;
  movieCount: number;
};

type Props = {
  genres: Genre[];
};

export const GenreGrid = ({ genres }: Props) => {
  return (
    <div className={styles.wrapper}>
      {genres.map((genre) => (
        <GenreCard key={genre.id} genre={genre} />
      ))}
    </div>
  );
};
