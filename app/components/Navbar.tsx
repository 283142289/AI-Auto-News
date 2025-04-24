import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white py-3 px-4 shadow-sm transition-colors duration-200">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-800">🎮 GameVerse</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/streams" className="text-gray-700 hover:text-gray-900">Streams</Link>
            <Link href="/forums" className="text-gray-700 hover:text-gray-900">Forums</Link>
            <Link href="/news" className="text-gray-700 hover:text-gray-900">News</Link>
            <Link href="/events" className="text-gray-700 hover:text-gray-900">Events</Link>
            <Link href="/clans" className="text-gray-700 hover:text-gray-900">Clans</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <button className="text-gray-700 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3"></span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-full overflow-hidden">
              <Image src="/avatar-placeholder.png" alt="User" width={32} height={32} className="object-cover" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800">Stray</p>
              <p className="text-xs text-gray-500">@straycat</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}