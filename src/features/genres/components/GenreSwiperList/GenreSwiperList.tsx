"use client";

import { Genre, MovieGenre } from "../../types";
import { GenreTile } from "../GenreTile/GenreTile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import styles from "./GenreSwiperList.module.css";
import "swiper/css";
import "swiper/css/pagination";

import { useFilters } from "@/providers/FilterProvider";

type Props = {
  genres: Genre[];
};

const breakpoints = {
  0: {
    slidesPerView: 2,
  },
  385: {
    slidesPerView: 3,
  },
  576: {
    slidesPerView: 4,
  },
  768: {
    slidesPerView: 5,
  },
  1100: {
    slidesPerView: 8,
  },
};

export const GenreSwiperList = ({ genres }: Props) => {
  const { filters, updateFilters } = useFilters();

  const handleChangeGenre = (genreId: MovieGenre) => {
    const isActive = filters.genre === genreId;
    updateFilters({ genre: isActive ? undefined : genreId });
  };

  return (
    <div className={styles.list}>
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={breakpoints}
        className={styles.swiper}
      >
        {genres.map((genre) => (
          <SwiperSlide key={genre.id}>
            <GenreTile activeGenre={filters.genre} onClick={handleChangeGenre} genre={genre} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
