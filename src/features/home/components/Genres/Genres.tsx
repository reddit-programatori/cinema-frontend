"use client";
import { GenreGrid } from "./GenreGrid/GenreGrid";
import { TextHeader } from "./TextHeader/TextHeader";

import { useMemo } from "react";

// Simulacija dohvata žanrova, kasnije će se zamijeniti stvarnim API pozivom
const genreListMock = [
  { id: "action", name: "Akcija", movieCount: 250 },
  { id: "comedy", name: "Komedija", movieCount: 21 },
  { id: "drama", name: "Drama", movieCount: 102 },
  { id: "horror", name: "Horor", movieCount: 4 },
  { id: "sci-fi", name: "Sci-Fi", movieCount: 40 },
  { id: "romance", name: "Romantika", movieCount: 41 },
  { id: "animated", name: "Animirani", movieCount: 9 },
  { id: "thriller", name: "Triler", movieCount: 6 },
];

export const Genres = () => {
  const sortedGenresByMovieCount = useMemo(
    () => genreListMock.toSorted((a, b) => b.movieCount - a.movieCount),
    [],
  );

  return (
    <section>
      <TextHeader
        eyebrow="Pregled po žanru"
        title="Koji žanr večeras?"
        subtitle="Izaberi atmosferu koja ti odgovara."
        align="center"
      />
      <GenreGrid genres={sortedGenresByMovieCount} />
    </section>
  );
};
