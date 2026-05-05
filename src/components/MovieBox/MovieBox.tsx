import type { StaticImageData } from "next/image";

import movieOne from "./picture/movie1.jpg";
import movieTwo from "./picture/movie2_avatar.jpg";
import SwiperList from "./SwiperList/SwiperList";
import MovieGrid from "./GridList/Grid";

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
  duration: number; // in minutes
  cinemaList: Cinema[];
  rating: number;
};

export type MovieDisplayConfig = {
  showGenreTag: boolean;
  showRating: boolean;
  showCinemaList?: boolean;
};

/* static values */
const movies: MovieItem[] = [
  {
    picture: movieOne,
    title: "Avatar 1",
    genres: [
      { id: "1", name: "Action" },
      { id: "2", name: "Adventure" },
    ],
    duration: 130,
    cinemaList: [
      { id: "1", name: "Cineplexx" },
      { id: "2", name: "Arena" },
    ],
    rating: 8.2,
  },
  {
    picture: movieTwo,
    title: "Avatar 1",
    genres: [
      { id: "3", name: "Drama" },
      { id: "4", name: "Romance" },
    ],
    duration: 105,
    cinemaList: [{ id: "3", name: "CineStar" }],
    rating: 7.5,
  },
  {
    picture: movieOne,
    title: "Avatar 1",
    genres: [
      { id: "5", name: "Horror" },
      { id: "6", name: "Thriller" },
    ],
    duration: 115,
    cinemaList: [{ id: "2", name: "Arena" }],
    rating: 6.9,
  },
  {
    picture: movieTwo,
    title: "Avatar 1",
    genres: [{ id: "7", name: "Comedy" }],
    duration: 90,
    cinemaList: [
      { id: "1", name: "Cineplexx" },
      { id: "3", name: "CineStar" },
    ],
    rating: 7.8,
  },
  {
    picture: movieOne,
    title: "Avatar 1",
    genres: [
      { id: "8", name: "Sci-Fi" },
      { id: "1", name: "Action" },
    ],
    duration: 140,
    cinemaList: [{ id: "4", name: "IMAX" }],
    rating: 8.7,
  },
  {
    picture: movieTwo,
    title: "Avatar 1",
    genres: [
      { id: "9", name: "Animation" },
      { id: "10", name: "Family" },
    ],
    duration: 85,
    cinemaList: [{ id: "5", name: "Kids Cinema" }],
    rating: 8.0,
  },
  {
    picture: movieOne,
    title: "Avatar 1",
    genres: [
      { id: "8", name: "Sci-Fi" },
      { id: "1", name: "Action" },
    ],
    duration: 140,
    cinemaList: [{ id: "4", name: "IMAX" }],
    rating: 8.7,
  },
  {
    picture: movieTwo,
    title: "Avatar 1",
    genres: [
      { id: "9", name: "Animation" },
      { id: "10", name: "Family" },
    ],
    duration: 85,
    cinemaList: [{ id: "5", name: "Kids Cinema" }],
    rating: 8.0,
  },
];

type MovieBoxProp = {
  listType: "slide" | "grid";
  displayOptions: MovieDisplayConfig;
};

const LIST_COMPONENTS = {
  slide: SwiperList,
  grid: MovieGrid,
} as const;

export default function MovieBox({ listType, displayOptions }: MovieBoxProp) {
  const ListComponent = LIST_COMPONENTS[listType];

  if (!ListComponent) return null;

  return <ListComponent movies={movies} displayOptions={displayOptions} />;
}
