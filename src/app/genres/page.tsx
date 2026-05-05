import MovieBox from "@/components/MovieBox/MovieBox";
import { BrowseGenresSection } from "@/features/genres/components/BrowseGenresSection/BrowseGenresSection";

export default function Page() {
  return (
    <>
      <BrowseGenresSection />

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
