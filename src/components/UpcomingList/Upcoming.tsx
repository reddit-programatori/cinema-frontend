import { Link } from "../Link/Link";
import { MovieItem } from "../MovieBox/MovieBox";
import { TextHeader } from "../TextHeader/TextHeader";
import DateLine from "./DateLine/DateLine";
import MovieInfo from "./MovieInfo/MovieInfo";
import IconArrow from "@/components/ui/icons/arrow-up-right.svg";
import styles from "./Upcoming.module.css";

import img1 from "./picture/movie1.jpg";
import img2 from "./picture/movie2.jpg";

type UpcomingMovieList = {
  date: string;
  movieList: MovieItem[];
};

/* depending on the way we get the date, fix the text displayed from "XX-XX to XX-name" */
const upcoming: UpcomingMovieList[] = [
  {
    date: "05-01",
    movieList: [
      {
        picture: img1,
        title: "Avatar: The Return",
        genres: [
          { id: "0", name: "Random" },
          { id: "0", name: "Random" },
        ],
        duration: "2h 20m",
        cinemaList: [{ id: "2", name: "Arena" }],
        rating: 8.5,
      },
      {
        picture: img1,
        title: "Avatar: The Return",
        genres: [
          { id: "0", name: "Random" },
          { id: "0", name: "Random" },
        ],
        duration: "2h 20m",
        cinemaList: [{ id: "2", name: "Arena" }],
        rating: 8.5,
      },
    ],
  },
  {
    date: "05-02",
    movieList: [
      {
        picture: img1,
        title: "Avatar: The Return",
        genres: [
          { id: "0", name: "Random" },
          { id: "0", name: "Random" },
        ],
        duration: "2h 20m",
        cinemaList: [{ id: "2", name: "Arena" }],
        rating: 8.5,
      },
      {
        picture: img1,
        title: "Avatar: The Return",
        genres: [
          { id: "0", name: "Random" },
          { id: "0", name: "Random" },
        ],
        duration: "2h 20m",
        cinemaList: [{ id: "2", name: "Arena" }],
        rating: 8.5,
      },
    ],
  },
];
/* better name for this component? */
export default function UpcomingList() {
  return (
    <div>
      <TextHeader
        eyebrow={"Uskoro u bioskopu"}
        title={"Šta stiže uskoro?"}
        subtitle={"Nadolazeći filmovi u tvojom gradu. Budi prvi koji rezerviše."}
      />
      {upcoming.map((movieData, index) => {
        return (
          <div key={index}>
            <DateLine data={movieData.date} num={movieData.movieList.length} />
            {movieData.movieList.map((movie, index) => {
              return <MovieInfo key={index} data={movie} />;
            })}
          </div>
        );
      })}
      <Link size="lg" href={"/"} variant="arrow" className={styles.button}>
        Vidi vise <IconArrow />
      </Link>
    </div>
  );
}
