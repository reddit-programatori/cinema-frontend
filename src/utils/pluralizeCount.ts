export const pluralizeMovies = (count: number): string => {
  if (count === 1) return "1 film";
  if (count >= 2 && count <= 4) return `${count} filma`;
  return `${count} filmova`;
};
