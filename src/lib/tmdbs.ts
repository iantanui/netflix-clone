import { Movie } from "@/types/movie";
import axios from "axios";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = process.env.TMDB_API_URL;

export async function getPopularMovies(): Promise<Movie[]> {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY },
  });
  return response.data.results;
}

export async function getMovieById(id: string): Promise<Movie> {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY },
  });
  if (response.status !== 200) {
    throw new Error(`Failed to fetch movie with ID ${id}`);
  }
  return response.data;
}
