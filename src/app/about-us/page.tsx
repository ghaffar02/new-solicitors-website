import Hero from "@/_components/Hero";
import Footer from "@/_components/Footer";
import InfoSection from "@/_components/InfoSection";
import pngs from "@/_assets/webp";
import OurValues from "./_sections/OurValues";

export default function AboutPage() {
  return (
    <>
      <Hero
        banner="Stronger With Us"
        heading="Expert Legal Support When You Need It Most"
        backgroundImage="bgAbout.png"
      />
      <InfoSection
        banner="Committed to Your Case"
        heading="About Our Firm"
        description="We are a client-focused law firm dedicated to delivering clear, practical, and strategic legal solutions. With a team of experienced professionals, we work closely with individuals and businesses to help them navigate complex legal challenges with confidence and clarity."
        reverse={true}
        image={pngs.aboutOurFirm}
      />
      <InfoSection
        banner="Driven by Purpose"
        heading="Our Mission"
        description="Our mission is simple—deliver exceptional legal support with honesty, precision, and care. We believe every client deserves personalized attention and strategic guidance. Whether you need representation or preventative advice, we approach every case with dedication, deep legal insight, and a strong focus on achieving the best possible outcome."
        image={pngs.ourMission}
      />
      <OurValues />
      <Footer />
    </>
  );
}
