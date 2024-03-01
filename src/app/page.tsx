import Contact from "@/components/Contact";
import { Container } from "@/components/Container";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <Reviews />
      <Contact />
    </div>
  );
}
