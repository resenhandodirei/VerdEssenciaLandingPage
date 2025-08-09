import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-50 via-green-50 to-purple-50 border-t border-green-200">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo + frase */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/logo-reduzida.png"
            alt="VerdEssência Logo"
            className="h-10 mb-2"
          />
          <p className="text-green-900 font-light text-sm italic">
            Cuidando da sua saúde com equilíbrio e essência.
          </p>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-5 items-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-900 hover:text-purple-700 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-900 hover:text-purple-700 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://wa.me/seunumerodetelefone"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 shadow-md transition-transform transform hover:scale-105"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>

        {/* Política */}
        <div className="text-xs text-green-800">
          <a
            href="/politica-de-privacidade"
            className="hover:text-purple-700 transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>

      {/* Linha separadora + copy */}
      <div className="border-t border-green-200 py-4 text-center text-xs text-green-700">
        © {new Date().getFullYear()} VerdEssência. Todos os direitos reservados.
      </div>
    </footer>
  );
}
