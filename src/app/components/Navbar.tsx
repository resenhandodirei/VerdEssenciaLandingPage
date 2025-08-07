// components/Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700 tracking-wide">
          VerdEssência
        </div>

        {/* Links */}
        <ul className="flex gap-6 text-gray-700 font-medium text-sm">
          <li>
            <a href="#inicio" className="hover:text-green-700 transition-colors duration-300">Início</a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-green-700 transition-colors duration-300">Sobre</a>
          </li>
          <li>
            <a href="#beneficios" className="hover:text-green-700 transition-colors duration-300">Benefícios</a>
          </li>
          <li>
            <a href="#depoimentos" className="hover:text-green-700 transition-colors duration-300">Depoimentos</a>
          </li>
          <li>
            <a href="#contato" className="hover:text-green-700 transition-colors duration-300">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
