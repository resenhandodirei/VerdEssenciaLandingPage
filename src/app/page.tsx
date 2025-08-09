"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SobreNutricionista from "./components/SobreNutricionista";
import ServicesSection from "./components/ServicesSection";
import BenefitsSection from "./components/BenefitsSection";
import Depoiments from "./components/Depoiments";
import Contact from "./components/Contact";
import Localizacao from "./components/Localizacao";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <SobreNutricionista />
    <ServicesSection />
    <BenefitsSection />
    <Depoiments />
    <Contact />
    <Localizacao />
    <Footer />

    </>
  );
}
