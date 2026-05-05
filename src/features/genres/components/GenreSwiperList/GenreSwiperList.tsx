"use client";

import { Genre, MovieGenre } from "../../types";
import { GenreTile } from "../GenreTile/GenreTile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import styles from "./GenreSwiperList.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

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
  const [activeGenre, setActiveGenre] = useState<null | Lowercase<MovieGenre>>(null);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangeGenre = (genreId: Lowercase<MovieGenre>) => {
    //===1
    if (genreId === activeGenre) {
      setActiveGenre(null);
    } else {
      setActiveGenre(genreId);
    }

    //===2
    console.log({ searchParams });
    const params = new URLSearchParams(searchParams);

    if (genreId && genreId !== activeGenre) {
      params.set("genre", genreId);
    } else {
      params.delete("genre");
    }
    //===2

    //===3
    replace(`${pathname}?${params.toString()}`);
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
            <GenreTile activeGenre={activeGenre} onClick={handleChangeGenre} genre={genre} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
