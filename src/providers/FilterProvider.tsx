"use client";

import { MOVIE_GENRES } from "@/features/genres/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createContext, useContext, useOptimistic, useTransition } from "react";
import z from "zod";

const filterSchema = z.object({
  genre: z.enum(MOVIE_GENRES).optional(), // z.array(z.string()).default([]).optional(),
});

type Filters = z.infer<typeof filterSchema>;
type FilterContextType = {
  filters: Filters;
  isPending: boolean;
  updateFilters: (_updates: Partial<Filters>) => void;
};

export const FilterContext = createContext<FilterContextType | undefined>(undefined);

export default function FilterProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const filters = filterSchema.safeParse({
    genre: searchParams.get("genre"),
  });

  const [isPending, startTransition] = useTransition();
  const [optimisticFilters, setOptimisticFilters] = useOptimistic(
    filters.data,
    (prevState, newFilters: Partial<Filters>) => {
      return {
        ...prevState,
        ...newFilters,
      };
    },
  );

  function updateFilters(updates: Partial<typeof optimisticFilters>) {
    const newState = {
      ...optimisticFilters,
      ...updates,
    };
    const newSearchParams = new URLSearchParams();

    Object.entries(newState).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          newSearchParams.append(key, v);
        });
      } else if (value !== undefined) {
        newSearchParams.set(key, value);
      }
    });

    startTransition(() => {
      setOptimisticFilters(updates || {});
      router.push(`${pathname}?${newSearchParams}`);
    });
  }

  return (
    <FilterContext.Provider value={{ filters: optimisticFilters || {}, isPending, updateFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
