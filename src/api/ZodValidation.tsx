import { z } from "zod";

const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const ScreeningSchema = z.object({
  id: z.number(),
  cinema: z.string(),
  startTime: z.string(),
});

export const MovieSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  duration: z.string(),
  rating: z.number(),
  genres: z.array(GenreSchema),
  url: z.string().nullable(),
  screening: z.array(ScreeningSchema),
});

export const MoviesSchema = z.array(MovieSchema);

export type Movie = z.infer<typeof MovieSchema>;
