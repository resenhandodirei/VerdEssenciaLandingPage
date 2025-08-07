import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SobreNutricionista from "./components/SobreNutricionista";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <SobreNutricionista />
    <ServicesSection />

    {/* Other sections can be added here */}
    </>
  );
}
