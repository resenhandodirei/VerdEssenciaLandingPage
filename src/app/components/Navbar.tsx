import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur bg-white/70">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
          VerdEssência
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {['Início', 'Sobre', 'Benefícios', 'Depoimentos', 'Contato'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative transition duration-300 text-gray-700 hover:text-purple-600 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-gradient-to-r after:from-green-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
