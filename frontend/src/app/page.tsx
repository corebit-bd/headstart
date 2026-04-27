import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import { Contact } from "@/components/home/Contact";
import { Faculty } from "@/components/home/Faculty";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Blog />
      <Faculty />
      <Contact />
    </>
  );
}
