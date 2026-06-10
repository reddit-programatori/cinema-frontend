import type { StaticImageData } from "next/image";

import movieOne from "./picture/movie1.jpg"; /*  */
import SwiperList from "./SwiperList/SwiperList";
import MovieGrid from "./GridList/Grid";
import { api } from "@/app/api/apiClient";

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
  type: string;
};

const LIST_COMPONENTS = {
  slide: SwiperList,
  grid: MovieGrid,
} as const;

export default async function MovieBox({
  listType,
  displayOptions,
  type = "/movies",
}: MovieBoxProp) {
  const getMovies = () => api.get<MovieItem[]>(type);
  const movies = await getMovies();

  const moviesMapped: MovieItem[] = movies.map((movie) => ({
    picture: movieOne,
    title: movie.title,
    genres: (movie.genres || []).map((genre) => ({
      id: String(genre.id),
      name: genre.name,
    })),
    duration: movie.duration,
    cinemaList: (movie.cinemaList || []).map((screening) => ({
      id: String(screening.id),
      name: screening.name,
    })),
    rating: movie.rating,
  }));

  const ListComponent = LIST_COMPONENTS[listType];

  if (!ListComponent) return null;

  return <ListComponent movies={moviesMapped} displayOptions={displayOptions} />;
}
