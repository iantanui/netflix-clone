import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-netflix-black p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/" className="text-white text-2xl font-bold">
                    Netflix Clone
                </Link>
                <nav className="space-x-4">
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="text-white hover:text-gray-400">Home</Link></li>
                        <li><Link href="/movies" className="text-white hover:text-gray-400">Movies</Link></li>
                        <li><Link href="/tv-shows" className="text-white hover:text-gray-400">TV Shows</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}