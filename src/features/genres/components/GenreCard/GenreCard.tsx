import { pluralizeMovies } from "@/utils/pluralizeCount";
import styles from "./GenreCard.module.css";

import IconCircleArrow from "@/components/ui/icons/circle-arrow.svg";

import IconAction from "../icons/sword.svg";
import IconPainting from "../icons/ic_sharp-color-lens.svg";
import IconComedy from "../icons/glyphs-poly_laugh-squint.svg";
import IconDrama from "../icons/streamline-sharp_theater-mask-solid.svg";
import IconHorror from "../icons/solar_ghost-bold.svg";
import IconSciFi from "../icons/streamline-ultimate_space-rocket-earth-bold.svg";
import IconRomance from "../icons/mdi_heart.svg";
import IconThriller from "../icons/tabler_search-filled.svg";
import { ReactNode } from "react";
import Link from "next/link";
import { Genre } from "../../types";

type Props = {
  genre: Genre;
};

export const GenreCard = ({ genre: { name, movieCount, id } }: Props) => {
  const { color, icon } = genreConfigMap[id];

  return (
    <article
      className={styles.card}
      style={{ "--genre-color": color } as React.CSSProperties} //as React.CSSProperties is TypeScript hack. CSS custom properties are not part of standard CSS properties, pausing TypeScript from complaining about it.
    >
      <Link href={`/genres/${id}`} className={styles.linkOverlay}>
        <div className={styles.linkArrow}>
          <IconCircleArrow />
        </div>
        <div className={styles.icon}>{icon}</div>
        <div>
          <h3 className={styles.genreName}>{name}</h3>
          <div className={styles.movieCount}>
            {movieCount} {pluralizeMovies(movieCount)} u bioskopu
          </div>
        </div>
      </Link>
    </article>
  );
};

export const genreConfigMap: Record<string, { color: string; icon: ReactNode }> = {
  action: { color: "#53161640", icon: <IconAction /> },
  "sci-fi": { color: "#07326940", icon: <IconSciFi /> },
  horror: { color: "#32235E40", icon: <IconHorror /> },
  thriller: { color: "#3A240040", icon: <IconThriller /> },
  drama: { color: "#003D4D40", icon: <IconDrama /> },
  romance: { color: "#B13B3B40", icon: <IconRomance /> },
  animated: { color: "#2A004A40", icon: <IconPainting /> },
  comedy: { color: "#13551340", icon: <IconComedy /> },
};
