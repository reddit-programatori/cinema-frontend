"use client";
import { MovieDisplayConfig, MovieItem } from "../MovieBox";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import styles from "./Swiper.module.css";

import "swiper/css";
import "swiper/css/free-mode";
import MovieCard from "../MovieCard/MovieCard";

export type SwiperListProps = {
  movies: MovieItem[];
  displayOptions: MovieDisplayConfig;
};

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  350: {
    slidesPerView: 2,
  },
  500: {
    slidesPerView: 3,
  },
  1150: {
    slidesPerView: 4,
  },
};

export default function SwiperList({ movies, displayOptions }: SwiperListProps) {
  return (
    <div className={styles.main}>
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        spaceBetween={20}
        breakpoints={breakpoints}
        direction="horizontal"
        className={styles.swiper}
      >
        {movies.map((movieOne, index) => (
          <SwiperSlide
            onClick={() => {
              console.log("click");
            }}
            key={index}
            className={styles.slide}
          >
            <MovieCard movie={movieOne} displayOptions={displayOptions} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

/* 
displayOptions: {showGenreTag: true, showRating: true}
*/
