"use client";
import { GenreGrid } from "./GenreGrid/GenreGrid";
import { GenreHeader } from "./GenreHeader/GenreHeader";

import { useMemo } from "react";

// Simulacija dohvata žanrova, kasnije će se zamijeniti stvarnim API pozivom
const genreListMock = [
  { id: "action", name: "Akcija", movieCount: 12 },
  { id: "comedy", name: "Komedija", movieCount: 8 },
  { id: "drama", name: "Drama", movieCount: 15 },
  { id: "horror", name: "Horor", movieCount: 5 },
  { id: "sci-fi", name: "Sci-Fi", movieCount: 10 },
  { id: "romance", name: "Romantika", movieCount: 7 },
  { id: "animated", name: "Animirani", movieCount: 9 },
  { id: "thriller", name: "Triler", movieCount: 6 },
];

// TODO: getColors()

export const Genres = () => {
  const sortedGenresByMovieCount = useMemo(
    () => genreListMock.toSorted((a, b) => b.movieCount - a.movieCount),
    [],
  );

  return (
    <section>
      <GenreHeader />
      <GenreGrid genres={sortedGenresByMovieCount} />
    </section>
  );
};
