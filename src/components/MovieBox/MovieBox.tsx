import type { StaticImageData } from "next/image";

import movieOne from "./picture/movie1.jpg"; /*  */
import SwiperList from "./SwiperList/SwiperList";
import MovieGrid from "./GridList/Grid";
import { getMovies } from "@/api/getMovies";
import { Movie } from "@/api/ZodValidation";

/* needs to be extracted to global */
export type Genre = {
  id: string;
  name: string;
};

export type Cinema = {
  id: string;
  name: string;
};

export type MovieItem = {
  picture: StaticImageData;
  title: string;
  genres: Genre[];
  duration: string;
  cinemaList: Cinema[];
  rating: number;
};

export type MovieDisplayConfig = {
  showGenreTag: boolean;
  showRating: boolean;
  showCinemaList?: boolean;
};

type MovieBoxProp = {
  listType: "slide" | "grid";
  displayOptions: MovieDisplayConfig;
  movies: Movie[];
};

const LIST_LAYOUT_COMPONENTS = {
  slide: SwiperList,
  grid: MovieGrid,
} as const;

export default async function MovieBox({ listType, displayOptions, movies }: MovieBoxProp) {
  const moviesMapped: MovieItem[] = movies.map((movie) => ({
    picture: movieOne,
    title: movie.name,
    genres: movie.genres.map((genre) => ({
      id: String(genre.id),
      name: genre.name,
    })),
    duration: movie.duration,
    cinemaList: movie.screening.map((screening) => ({
      id: String(screening.id),
      name: screening.cinema,
    })),
    rating: movie.rating,
  }));

  const Layout = LIST_LAYOUT_COMPONENTS[listType];

  if (!Layout) return null;

  return <Layout movies={moviesMapped} displayOptions={displayOptions} />;
}
