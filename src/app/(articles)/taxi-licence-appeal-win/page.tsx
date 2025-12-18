import Navbar from "@/_components/Navbar";
import DetailSection from "./_sections/DetailSection";
import Footer from "@/_components/Footer";
import Hero from "@/_components/Hero";

export default function BankruptcyOrderAnnulled() {
  return (
    <>
      <Navbar />
      <Hero
        banner="Advocacy, Legal Advice"
        heading="Taxi Licence Appeal Win"
        date="December 8, 2022"
        backgroundImage="bgAbout.png"
      />
      <DetailSection />
      <Footer />
    </>
  );
}
