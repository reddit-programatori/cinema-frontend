"use client";

import { GradientBackground } from "@/components/GradientBackground/GradientBackground";
import { TextHeader } from "@/components/TextHeader/TextHeader";

import style from "./BrowseGenresSection.module.css";
import { genreListMock } from "../Genres";
import { GenreSwiperList } from "../GenreSwiperList/GenreSwiperList";

export const BrowseGenresSection = () => {
  return (
    <GradientBackground className={style.wrapper}>
      <TextHeader
        title="Pretraži po žanru"
        eyebrow="Kategorije"
        subtitle="Izaberi jedan ili više žanrova i pronađi savršen film."
        align="left"
      />
      <GenreSwiperList genres={genreListMock} />
    </GradientBackground>
  );
};
