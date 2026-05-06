import MovieBox from "@/components/MovieBox/MovieBox";
import { BrowseGenresSection } from "@/features/genres/components/BrowseGenresSection/BrowseGenresSection";
import { Divider } from "@/components/Divider/Divider";

import style from "./genres.module.css";
export default function Page() {
  return (
    <>
      <BrowseGenresSection />

      <div className={style.dividerContainer}>
        <Divider label="6 filmova" />
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
