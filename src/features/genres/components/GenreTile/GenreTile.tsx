import { Genre, MovieGenre } from "../../types";
import { genreConfigMap } from "../GenreCard/GenreCard";
import styles from "./GenreTile.module.css";

type Props = {
  genre: Genre;
  onClick: (genreId: MovieGenre) => void;
  activeGenre: MovieGenre | undefined;
};

export const GenreTile = ({ genre, activeGenre, onClick }: Props) => {
  const { icon } = genreConfigMap[genre.id];

  return (
    <button
      className={`${styles.tile}${activeGenre === genre.id ? ` ${styles.active}` : ""}`}
      onClick={() => onClick(genre.id)}
      type="button"
    >
      <div className={styles.icon}>{icon}</div>
      <span>{genre.name}</span>
    </button>
  );
};
