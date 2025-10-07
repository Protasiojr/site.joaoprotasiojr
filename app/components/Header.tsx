import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 pt-4 pb-0 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">João Protásio Jr</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">Sobre</Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">Serviços</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contato</Link>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}