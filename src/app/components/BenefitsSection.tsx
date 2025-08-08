import { CheckCircle, Heart, Leaf } from "lucide-react";

const benefits = [
  {
    icon: <CheckCircle className="text-green-600 animate-bounce" size={28} />,
    text: "Mais energia no dia a dia",
  },
  {
    icon: <Heart className="text-pink-500 animate-pulse" size={28} />,
    text: "Relacionamento equilibrado com a comida",
  },
  {
    icon: <CheckCircle className="text-blue-500 animate-bounce" size={28} />,
    text: "Orientação profissional baseada em evidências",
  },
  {
    icon: <Leaf className="text-emerald-500 animate-spin-slow" size={28} />,
    text: "Resultados sustentáveis",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-white px-4 md:px-8 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Por que investir na sua saúde?
        </h2>
        <ul className="space-y-6 text-left">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-4">
              <div>{benefit.icon}</div>
              <p className="text-lg text-gray-700">{benefit.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
