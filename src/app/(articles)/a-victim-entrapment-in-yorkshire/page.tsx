import Navbar from "@/_components/Navbar";
import DetailSection from "./_sections/DetailSection";
import Footer from "@/_components/Footer";
import Hero from "@/_components/Hero";

export default function AvictimEntrapmentInYorkshire() {
  return (
    <>
      <Navbar />
      <Hero
        banner="Advocacy, Legal Advice"
        heading="Yorkshire “Nightmare” Zebra Crossing – A Victim of Entrapment"
        date="May 02, 2025"
        backgroundImage="bgAbout.png"
      />
      <DetailSection />
      <Footer />
    </>
  );
}
