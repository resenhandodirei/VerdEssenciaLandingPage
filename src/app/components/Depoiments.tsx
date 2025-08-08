"use client";
import { use, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mariana Alves",
    text: "Excelente atendimento! Me senti acolhida e respeitada o tempo todo.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Carlos Pereira",
    text: "A consulta foi clara, objetiva e me ajudou muito. Recomendo!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Fernanda Costa",
    text: "Profissional incrível! Explica tudo com muita paciência.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-50 py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        O que dizem meus pacientes
      </h2>

      <div className="relative max-w-xl mx-auto">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center transition-transform duration-300 hover:scale-[1.02]">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
          />
          <h3 className="text-lg font-semibold text-gray-900">
            {testimonials[current].name}
          </h3>

          {/* Stars */}
          <div className="flex justify-center mt-1 mb-3">
            {Array.from({ length: testimonials[current].rating }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>

          <p className="text-gray-600 italic leading-relaxed">
            "{testimonials[current].text}"
          </p>
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
