import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SobreNutricionista from "./components/SobreNutricionista";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <SobreNutricionista />

    {/* Other sections can be added here */}
    </>
  );
}
