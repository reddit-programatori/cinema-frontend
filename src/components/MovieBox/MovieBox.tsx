import type { StaticImageData } from "next/image";

import movieOne from "./picture/movie1.jpg";
import movieTwo from "./picture/movie2_avatar.jpg";
import SwiperList from "./SwiperList/SwiperList";
import MovieGrid from "./GridList/Grid";
import { getMovies } from "@/app/api/apiTest";

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
};

const LIST_COMPONENTS = {
  slide: SwiperList,
  grid: MovieGrid,
} as const;

export default async function MovieBox({ listType, displayOptions }: MovieBoxProp) {
  const movies = await getMovies();

  /* temporary fix */
  const moviesMapped: MovieItem[] = movies.map((movie) => ({
    picture: movieOne, // also temporary
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

  const ListComponent = LIST_COMPONENTS[listType];

  if (!ListComponent) return null;

  return <ListComponent movies={moviesMapped} displayOptions={displayOptions} />;
}
