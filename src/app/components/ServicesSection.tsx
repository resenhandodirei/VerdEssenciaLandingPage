import { FaAppleAlt, FaHeartbeat, FaDumbbell, FaLeaf, FaLaptopMedical } from "react-icons/fa";

const services = [
  {
    icon: <FaAppleAlt size={32} />,
    title: "Consulta nutricional personalizada",
  },
  {
    icon: <FaHeartbeat size={32} />,
    title: "Plano alimentar para emagrecimento",
  },
  {
    icon: <FaDumbbell size={32} />,
    title: "Nutrição para performance esportiva",
  },
  {
    icon: <FaLeaf size={32} />,
    title: "Reeducação alimentar",
  },
  {
    icon: <FaLaptopMedical size={32} />,
    title: "Acompanhamento online",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Como posso te ajudar?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4 text-primary">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
