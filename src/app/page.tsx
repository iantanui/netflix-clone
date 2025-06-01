
import CategoryRow from '@/components/CategoryRow';
import Hero from '@/components/Hero';
import { getGenres, getLatestMovies, getLatestShows, getMoviesByGenre, getTrendingMovies, getTrendingShows } from '@/lib/tmdbs';

export default async function Home() {
  const [trendingMovies, trendingShows, latestMovies, latestShows, genres] = await Promise.all([
    getTrendingMovies(),
    getTrendingShows(),
    getLatestMovies(),
    getLatestShows(),
    getGenres(),
  ]);

  const genreMovies = await Promise.all(
    genres.slice(0, 3).map(async (genre) => ({
      genre,
      movies: await getMoviesByGenre(genre.id),
    }))
  );

  return (
    <>
      <Hero movie={trendingMovies[0]} />
      <CategoryRow title="Trending Movies" items={trendingMovies} />
      <CategoryRow title="Trending Shows" items={trendingShows} />
      <CategoryRow title="Latest Movies" items={latestMovies} />
      <CategoryRow title="Latest Shows" items={latestShows} />
      {genreMovies.map(({ genre, movies }) => (
        <CategoryRow key={genre.id} title={genre.name} items={movies} />
      ))}
    </>
  );
}