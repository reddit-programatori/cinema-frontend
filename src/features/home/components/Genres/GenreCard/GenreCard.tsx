import { pluralizeMovies } from "@/utils/pluralizeCount";
import styles from "./GenreCard.module.css";

import IconAction from "../icons/sword.svg";
import IconPainting from "../icons/ic_sharp-color-lens.svg";
import IconComedy from "../icons/glyphs-poly_laugh-squint.svg";
import IconDrama from "../icons/streamline-sharp_theater-mask-solid.svg";
import IconHorror from "../icons/solar_ghost-bold.svg";
import IconSciFi from "../icons/streamline-ultimate_space-rocket-earth-bold.svg";
import IconRomance from "../icons/mdi_heart.svg";
import IconThriller from "../icons/tabler_search-filled.svg";
import { ReactNode } from "react";

type TMPProps = {
  className?: string;
  genreName: string;
  movieCount: number;
  id: string;
};
export const GenreCard = ({ className, genreName, movieCount, id }: TMPProps) => {
  const { color, icon } = genreConfigMap[id];

  return (
    <article className={`${styles.card} ${className || ""}`} style={{ backgroundColor: color }}>
      <div className={styles.linkArrow}>Strelica za link</div>
      <div className={styles.icon}>{icon}</div>
      <div className="footer">
        <h3 className={styles.genreName}>{genreName}</h3>
        <div className={styles.movieCount}>{pluralizeMovies(movieCount)} u bioskopu</div>
      </div>
    </article>
  );
};

export const genreConfigMap: Record<string, { color: string; icon: ReactNode }> = {
  action: { color: "#531616", icon: <IconAction /> },
  "sci-fi": { color: "#073269", icon: <IconSciFi /> },
  horror: { color: "#32235E", icon: <IconHorror /> },
  thriller: { color: "#3A2400", icon: <IconThriller /> },
  drama: { color: "#003D4D", icon: <IconDrama /> },
  romance: { color: "#B13B3B", icon: <IconRomance /> },
  animated: { color: "#2A004A", icon: <IconPainting /> },
  comedy: { color: "#135513", icon: <IconComedy /> },
};
