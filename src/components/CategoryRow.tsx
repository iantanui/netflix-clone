import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";

interface CategoryRowProps {
    title: string;
    items: Movie[];
}

export default function CategoryRow({ title, items }: CategoryRowProps) {
    return (
        <div className="container mx-auto px-4 py-4">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="flex">
                {items.map((item) => (
                    <div key={item.id} className="flex-none w-40 md:w-48">
                        <MovieCard movie={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}