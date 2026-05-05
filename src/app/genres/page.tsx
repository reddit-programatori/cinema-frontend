import MovieBox from "@/components/MovieBox/MovieBox";
import { BrowseGenresSection } from "@/features/genres/components/BrowseGenresSection/BrowseGenresSection";
import { MovieCounter } from "@/features/genres/components/MovieCounter/MovieCounter";

import style from "./genres.module.css";
export default function Page() {
  return (
    <>
      <BrowseGenresSection />

      <div className={style.wrapper}>
        <MovieCounter label="6 filmova" />
      </div>
      <MovieBox
        listType="grid"
        displayOptions={{
          showGenreTag: true,
          showRating: true,
        }}
      />
    </>
  );
}
