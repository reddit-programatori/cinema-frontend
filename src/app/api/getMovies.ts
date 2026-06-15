import { api } from "./apiClient";
import { MoviesSchema } from "./ZodValidation";

export async function getMovies(type: string) {
  const data = await api.get(type);

  return MoviesSchema.parse(data);
}
