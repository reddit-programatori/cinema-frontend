export const MOVIE_GENRES = [
  "action",
  "adventure",
  "animation",
  "biography",
  "comedy",
  "crime",
  "documentary",
  "drama",
  "family",
  "fantasy",
  "film-noir",
  "history",
  "horror",
  "music",
  "musical",
  "mystery",
  "romance",
  "sci-fi",
  "sport",
  "thriller",
  "war",
  "western",
  "animated",
] as const;

export type MovieGenre = (typeof MOVIE_GENRES)[number];

export type Genre = {
  id: MovieGenre;
  name: string;
  movieCount: number;
};
