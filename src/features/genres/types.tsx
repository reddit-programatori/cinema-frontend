export type MovieGenre =
  | "Action"
  | "Adventure"
  | "Animation"
  | "Biography"
  | "Comedy"
  | "Crime"
  | "Documentary"
  | "Drama"
  | "Family"
  | "Fantasy"
  | "Film-Noir"
  | "History"
  | "Horror"
  | "Music"
  | "Musical"
  | "Mystery"
  | "Romance"
  | "Sci-Fi"
  | "Sport"
  | "Thriller"
  | "War"
  | "Western"
  | "Animated";

export type Genre = {
  id: Lowercase<MovieGenre>;
  name: string;
  movieCount: number;
};
