import { api } from "./apiClient";
import { MoviesSchema } from "./ZodValidation";

export async function getMovies() {
  const data = await api.get("/movies");

  return MoviesSchema.parse(data);
}
