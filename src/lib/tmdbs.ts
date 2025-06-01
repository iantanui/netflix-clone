import { Movie } from "@/types/movie";
import axios from "axios";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.TMDB_API_URL;

export async function getTrendingMovies(): Promise<Movie[]> {
  const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
    params: { api_key: API_KEY },
  });
  return response.data.results.slice(0, 10); // Limit to 10 for performance
}

export async function getTrendingShows(): Promise<Movie[]> {
  const response = await axios.get(`${BASE_URL}/trending/tv/week`, {
    params: { api_key: API_KEY },
  });
  return response.data.results.slice(0, 10);
}

export async function getLatestMovies(): Promise<Movie[]> {
  const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
    params: { api_key: API_KEY },
  });
  return response.data.results.slice(0, 10);
}

export async function getLatestShows(): Promise<Movie[]> {
  const response = await axios.get(`${BASE_URL}/tv/on_the_air`, {
    params: { api_key: API_KEY },
  });
  return response.data.results.slice(0, 10);
}

export async function getMoviesByGenre(genreId: number): Promise<Movie[]> {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_genres: genreId,
    },
  });
  return response.data.results.slice(0, 10);
}

export async function getGenres(): Promise<{ id: number; name: string }[]> {
  const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
    params: { api_key: API_KEY },
  });
  return response.data.genres;
}

export async function getMovieById(id: string): Promise<Movie> {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
}


