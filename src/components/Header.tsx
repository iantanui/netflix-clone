import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-netflix-bg/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center">
        <Link href="/" className="text-netflix-red text-3xl font-bold">
          Netflix Clone
        </Link>
        <nav className="ml-8">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-netflix-red">Home</Link></li>
            <li><Link href="#" className="hover:text-netflix-red">TV Shows</Link></li>
            <li><Link href="#" className="hover:text-netflix-red">Movies</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}