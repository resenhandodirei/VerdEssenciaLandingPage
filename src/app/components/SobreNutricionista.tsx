import Image from "next/image";

const SobreNutricionista = () => {
  return (
    <section id="sobre" className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sobre a Nutricionista
          </h2>
          <p className="text-gray-600 mb-4 text-lg leading-relaxed">
            A Dra. Camila é nutricionista apaixonada por promover saúde e bem-estar de forma leve e acessível. Com um olhar acolhedor, ela acompanha seus pacientes em jornadas reais de transformação.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Formada pela Universidade Federal do Ceará (UFC), possui especializações em Nutrição Clínica Funcional e Comportamental. Atua principalmente com reeducação alimentar, saúde da mulher e nutrição integrativa.
          </p>
        </div>

        {/* Imagem secundária */}
        <div className="flex justify-center md:justify-end">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-sm">
            <Image
              src="/camila-descontraida.jpg"
              alt="Foto descontraída da Dra. Camila"
              width={500}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNutricionista;
