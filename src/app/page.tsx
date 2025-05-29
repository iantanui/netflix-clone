
import Hero from '@/components/Hero';
import MovieGrid from '@/components/MovieGrid';
import { getPopularMovies } from '@/lib/tmdbs';

export default async function Home() {
  const movies = await getPopularMovies();
  const featuredMovie = movies[0]; 

  return (
    <>
      <Hero movie={featuredMovie} />
      <MovieGrid movies={movies} />
    </>
  );
}