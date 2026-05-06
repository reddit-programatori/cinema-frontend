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
    slidesPerView: 3.5,
  },
  385: {
    slidesPerView: 5,
  },
  576: {
    slidesPerView: 5.5,
  },
  768: {
    slidesPerView: 4.5,
  },
  1100: {
    slidesPerView: 8,
  },
};
export const GenreSwiperList = ({ genres }: Props) => {
  const { filters, updateFilters } = useFilters();

  const handleChangeGenre = (genreId: MovieGenre) => {
    // Remvoing genre query param if filters.genre matched with clicked genreId
    const isActive = filters.genre === genreId;
    updateFilters({ genre: isActive ? undefined : genreId });
  };

  return (
    <div className={styles.list}>
      <Swiper
        breakpoints={breakpoints}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        {genres.map((genre) => (
          <SwiperSlide key={genre.id}>
            <GenreTile genre={genre} activeGenre={filters.genre} onClick={handleChangeGenre} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
