import WhyHeadStart from "@/components/home/WhyHeadStart";
import Blog from "@/components/home/Blog";
import { Contact } from "@/components/home/Contact";
import { Faculty } from "@/components/home/Faculty";
import Hero from "@/components/home/Hero";
import ACCAQualificationOverview from "@/components/home/ACCAQualificationOverview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyHeadStart />
      <ACCAQualificationOverview />
      <Blog />
      <Faculty />
      <Contact />
    </>
  );
}
