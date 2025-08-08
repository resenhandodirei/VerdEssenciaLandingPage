import React from "react";

export default function Contact() {
  return (
    <section className="bg-white py-12 px-6 rounded-2xl shadow-md border border-gray-100 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-purple-800 mb-2">
        Entre em Contato
      </h2>
      <p className="text-gray-600 mb-8">
        Tem alguma dúvida ou sugestão? Preencha o formulário abaixo e retornaremos o mais rápido possível.
      </p>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Nome
          </label>
          <input
            type="text"
            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            E-mail
          </label>
          <input
            type="email"
            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-green-900 mb-1">
            Mensagem
          </label>
          <textarea
            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Enviar
        </button>
      </form>
    </section>
  );
}
