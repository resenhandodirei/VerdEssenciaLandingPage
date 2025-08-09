import React from "react";

export default function Localizacao() {
  return (
    <section className="w-full bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Texto */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-purple-800 mb-3">
          Localização / Atendimentos Online
        </h2>
        <p className="text-lg text-green-900">
          Atendimento presencial em{" "}
          <span className="font-semibold text-green-700">Fortaleza-CE</span> ou{" "}
          <span className="font-semibold text-green-700">100% online</span>.
        </p>
      </div>

      {/* Mapa */}
      <div className="flex-1 w-full h-64">
        <iframe
          title="Localização em Fortaleza-CE"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8641450406136!2d-38.542298!3d-3.730451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7490a7c2f0df1%3A0x8b2f5b7aa78ec9d2!2sFortaleza%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v123456789"
          className="w-full h-full rounded-xl border-2 border-green-200"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
