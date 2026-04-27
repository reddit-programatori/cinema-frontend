import ButtonMain from "../buttonMain/ButtonMain";
import { MovieItem } from "../MovieBox/MovieBox";
import { TextHeader } from "../TextHeader/TextHeader";
import DateLine from "./DateLine/DateLine";
import MovieInfo from "./MovieInfo/MovieInfo";

import img1 from "./picture/movie1.jpg";
import img2 from "./picture/movie2.jpg";

import IconArrow from "@/components/ui/icons/arrow-up-right.svg";

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
        Picture: img1,
        Title: "Avatar: The Return",
        Genres: ["Action", "Adventure"],
        Duration: "2h 20m",
        CinemaList: ["Cineplexx", "Cineplexx", "Cineplexx"],
        rating: 8.5,
      },
      {
        Picture: img2,
        Title: "Love in Paris",
        Genres: ["Romance", "Drama"],
        Duration: "1h 50m",
        CinemaList: ["Arena"],
        rating: 7.9,
      },
    ],
  },
  {
    date: "05-02",
    movieList: [
      {
        Picture: img1,
        Title: "Night Terror",
        Genres: ["Horror", "Thriller"],
        Duration: "1h 40m",
        CinemaList: ["CineStar"],
        rating: 6.8,
      },
      {
        Picture: img2,
        Title: "Galaxy Wars",
        Genres: ["Sci-Fi", "Action"],
        Duration: "2h 10m",
        CinemaList: ["IMAX"],
        rating: 8.3,
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
      <ButtonMain url={"/"} pos={true} text={"Vidi vise"} />
    </div>
  );
}
