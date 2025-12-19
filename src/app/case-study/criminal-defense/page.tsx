import Navbar from "@/_components/Navbar";
import DetailSection from "./_sections/DetailSection";
import Footer from "@/_components/Footer";
import Hero from "@/_components/Hero";

export default function AvictimEntrapmentInYorkshire() {
  return (
    <>
      <Navbar />
      <Hero heading="Criminal Defense" backgroundImage="/bgAbout.png" />
      <DetailSection />
      <Footer />
    </>
  );
}
