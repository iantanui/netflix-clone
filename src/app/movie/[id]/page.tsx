import { getMovieById } from "@/lib/tmdbs";
import Image from "next/image";

interface MoviePageProps {
    params: { id: string };
}

export default async function MoviePage({ params }: MoviePageProps) {
    const movie = await getMovieById(params.id);

    if (!movie) {
        return <div className="p-4">Movie not found</div>;
    }

    return (
        <div className="container mx-auto p-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="relative w-full md:w-1/3 aspect-[`2/3]">
                    {movie.poster_path ? (
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            fill
                            className="object-cover rounded"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                            <span>No Image Available</span>
                        </div>
                    )}
                </div>
                <div className="md:w-2/3">
                    <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                    <p className="text-sm mb-4">{movie.overview}</p>
                    <p className="text-sm"><strong>Release Date:</strong> {movie.release_date}</p>
                    <button className="mt-4 bg-netflix-red text-white px-6 py-2 rounded hover:bg-red-700">
                        Play
                    </button>
                </div>
            </div>
        </div>
    );
}