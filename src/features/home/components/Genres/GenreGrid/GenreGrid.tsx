import React from "react";
import { GenreCard } from "../GenreCard/GenreCard";

type Props = {
  id: string;
  name: string;
  movieCount: number;
};

export const GenreGrid = ({ genres }: { genres: Props[] }) => {
  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:col-span-2">
      {genres.map((genre, index) => (
        <GenreCard
          key={genre.id}
          genreName={genre.name}
          movieCount={genre.movieCount}
          id={genre.id}
          className={index < 2 ? "md:col-span-2" : ""}
        />
      ))}
    </div>
  );
};
