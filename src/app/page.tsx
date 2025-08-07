import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    {/* Other sections can be added here */}
    </>
  );
}
