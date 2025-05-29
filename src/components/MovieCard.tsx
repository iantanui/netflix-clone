import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";

interface MovieCardProps {
    movie: Movie;
}

export default function MovieCard({ movie } : MovieCardProps) {
    return (
        <Link href={`/movies/${movie.id}`} className="group">
            <div className="relative w-full aspect-[2/3] rounded overflow-hidden">
                {movie.poster_path ? (
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        fill
                    />
                ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                </div>
                )}
            </div>
            <h3 className="text-white text-lg font-semibold">{movie.title}</h3>
        </Link>
    );
}