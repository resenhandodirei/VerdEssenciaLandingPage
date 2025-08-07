'use client';

import Image from 'next/image';
//import { Button } from '@/components/ui/button';
import React from 'react';
import { Button } from './Button'; // Adjust the import path as necessary

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F2E9E4] via-[#FDFCFB] to-[#fff] py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#4A4A4A] mb-4">
            Dra. Camila Oliveira
          </h1>
          <p className="text-lg sm:text-xl text-[#7A7A7A] mb-6">
            Psicóloga Clínica – CRP 00/00000
          </p>
          <p className="text-base sm:text-lg text-[#5E5E5E] mb-8 italic">
            "Cuidar da mente é um ato de amor próprio."
          </p>

          <a href="#contato">
            {/* <Button className="px-8 py-4 text-base rounded-full shadow-md bg-[#9F86C0] hover:bg-[#7C679A] transition-colors text-white">
              Agendar Consulta
            </Button> */}
            <Button aria-placeholder='Agende aqui' children={undefined}/>
            
          </a>
        </div>

        {/* Foto da Dra. Camila */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-full overflow-hidden w-60 h-60 sm:w-72 sm:h-72 border-4 border-[#9F86C0] shadow-lg">
            <Image
              src="/camila.jpg"
              alt="Foto da Dra. Camila"
              width={300}
              height={300}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
