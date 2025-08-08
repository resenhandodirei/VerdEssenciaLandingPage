import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SobreNutricionista from "./components/SobreNutricionista";
import ServicesSection from "./components/ServicesSection";
import BenefitsSection from "./components/BenefitsSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <SobreNutricionista />
    <ServicesSection />
    <BenefitsSection />

    {/* Other sections can be added here */}
    </>
  );
}
