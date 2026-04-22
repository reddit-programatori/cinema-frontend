export default async function Genre({ params }: { params: Promise<{ genre: string }> }) {
  const { genre } = await params;

  return <div>My Post: {genre}</div>;
}
