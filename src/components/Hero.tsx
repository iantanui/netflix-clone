
import { Movie } from "@/types/movie";
import Image from "next/image";

interface HeroProps {
    movie: Movie;
}

export default function Hero({ movie }: HeroProps) {
    return (
        <div className="relative h-[60vh] w-full">
            {movie.backdrop_path && (
                <Image
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    priority
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-netflix-bg to-transparent" />
            <div className="absolute bottom-8 left-8 max-w-md">
                <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
                <p className="text-sm line-clamp-3">{movie.overview}</p>
                <button className="mt-4 bg-netflix-red text-white px-6 py-2 rounded hover:bg-red-700">
                    Play
                </button>
            </div>
        </div>
    );
}