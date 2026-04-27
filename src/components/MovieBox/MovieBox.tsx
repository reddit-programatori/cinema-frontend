import type { StaticImageData } from "next/image";

import movieOne from "./picture/movie1.jpg";
import movieTwo from "./picture/movie2.jpg";
import SwiperList from "./SwiperList/SwiperList";
import MovieGrid from "./GridList/Grid";

/* needs to be extracted to global */
export type MovieItem = {
  Picture: StaticImageData;
  Title: string;
  Genres: string[];
  Duration: string;
  CinemaList: string[];
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
    Picture: movieOne,
    Title: "Avatar: 1",
    Genres: ["Action", "Adventure"],
    Duration: "2h 10m",
    CinemaList: ["Cineplexx", "Arena"],
    rating: 8.2,
  },
  {
    Picture: movieTwo,
    Title: "Avatar: 1",
    Genres: ["Drama", "Romance"],
    Duration: "1h 45m",
    CinemaList: ["CineStar"],
    rating: 7.5,
  },
  {
    Picture: movieOne,
    Title: "Avatar: 1",
    Genres: ["Horror", "Thriller"],
    Duration: "1h 55m",
    CinemaList: ["Arena"],
    rating: 6.9,
  },
  {
    Picture: movieTwo,
    Title: "Avatar: 1",
    Genres: ["Comedy"],
    Duration: "1h 30m",
    CinemaList: ["Cineplexx", "CineStar"],
    rating: 7.8,
  },
  {
    Picture: movieOne,
    Title: "Avatar: 1",
    Genres: ["Sci-Fi", "Action"],
    Duration: "2h 20m",
    CinemaList: ["IMAX"],
    rating: 8.7,
  },
  {
    Picture: movieTwo,
    Title: "Avatar: 1",
    Genres: ["Animation", "Family"],
    Duration: "1h 25m",
    CinemaList: ["Kids Cinema"],
    rating: 8.0,
  },
];

type MovieBoxProp = {
  listType: "slide" | "grid";
  displayOptions: MovieDisplayConfig;
};

export default function MovieBox({ listType, displayOptions }: MovieBoxProp) {
  if (listType === "slide") {
    return <SwiperList movies={movies} displayOptions={displayOptions} />;
  } else if (listType === "grid") {
    return <MovieGrid movies={movies} displayOptions={displayOptions} />;
  }

  return null;
}
