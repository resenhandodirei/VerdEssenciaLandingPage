import { FaAppleAlt, FaHeartbeat, FaDumbbell, FaLeaf, FaLaptopMedical } from "react-icons/fa";

const services = [
  {
    icon: FaAppleAlt,
    title: "Consulta nutricional personalizada",
  },
  {
    icon: FaHeartbeat,
    title: "Plano alimentar para emagrecimento",
  },
  {
    icon: FaDumbbell,
    title: "Nutrição para performance esportiva",
  },
  {
    icon: FaLeaf,
    title: "Reeducação alimentar",
  },
  {
    icon: FaLaptopMedical,
    title: "Acompanhamento online",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-green-900">
          Como posso te ajudar?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Ícone flutuante */}
                <div className="text-green-700 bg-green-100 rounded-full p-4 mb-3 hover:scale-110 transition-transform duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-medium text-green-900">
                  {service.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
