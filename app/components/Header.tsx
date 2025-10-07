import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-950 shadow-md h-[50px]">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-white">
          <Link href="/">João Protásio Jr</Link>
        </div>
        <nav className="hidden md:flex space-x-6 h-[50px] items-center">
          <Link href="/" className="text-white hover:text-slate-300">Home</Link>
          <Link href="/about" className="text-white hover:text-slate-300">Sobre</Link>
          <Link href="/services" className="text-white hover:text-slate-300">Serviços</Link>
          <Link href="/contact" className="text-white hover:text-slate-300">Contato</Link>
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