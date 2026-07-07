import WhyHeadStart from "@/components/home/WhyHeadStart";
import FacultyPreview from "@/components/home/FacultyPreview";
import { Contact } from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import ACCAQualificationOverview from "@/components/home/ACCAQualificationOverview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyHeadStart />
      <ACCAQualificationOverview />
      <FacultyPreview />
      <Contact />
    </>
  );
}
