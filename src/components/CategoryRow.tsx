'use client';

import { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";
import { ChevronLeft } from "lucide-react";
import { useRef } from "react";

interface CategoryRowProps {
    title: string;
    items: Movie[];
}

export default function CategoryRow({ title, items }: CategoryRowProps) {

    const scollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scollRef.current) {
            const scrollAmount = 300;
            const currentScroll = scollRef.current.scrollLeft;
            const newScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
            scollRef.current.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            });
        }
    };


    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="relative group">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-0 bottom-0 z-10 bg-netflix-bg/80 opacity-0
                    group-hover:opacity-100 transition-opacity flex items-center justify-center w-12
                     hover:bg-netflix-bg"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-8 h-8 text-netflix-text" />
                </button>

                <div
                    ref={scollRef}
                    className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
                    {items.map((item) => (
                        <div key={item.id} className="flex-none w-40 md:w-48">
                            <MovieCard movie={item} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-0 bottom-0 z-10 bg-netflix-bg/80 opacity-0 
                    group-hover:opacity-100 transition-opacity flex items-center justify-center w-12 
                    hover:bg-netflix-bg"
                    aria-label="Scroll right"
                >
                    <ChevronLeft className="w-8 h-8 text-netflix-text transform rotate-180" />
                </button>
            </div>
        </div>
    );
}