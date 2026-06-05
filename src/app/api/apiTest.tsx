import { MoviesSchema } from "./ZodValidation";

export async function getMovies() {
  try {
    const response = await fetch("http://localhost:8080/movies");

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();

    return MoviesSchema.parse(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
