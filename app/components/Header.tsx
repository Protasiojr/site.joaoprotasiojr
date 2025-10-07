import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900 shadow-md h-[80px]">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <Link href="/">João Protásio Jr</Link>
        </div>
        <nav className="hidden md:flex space-x-6 h-[80px] items-center">
          <Link href="/" className="text-white hover:text-yellow-600">Home</Link>
          <Link href="/about" className="text-white hover:text-yellow-600">Sobre</Link>
          <Link href="/services" className="text-white hover:text-yellow-600">Serviços</Link>
          <Link href="/contact" className="text-white hover:text-yellow-600">Contato</Link>
        </nav>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}