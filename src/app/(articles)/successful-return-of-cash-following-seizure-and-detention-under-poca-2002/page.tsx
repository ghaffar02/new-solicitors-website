import Navbar from "@/_components/Navbar";
import DetailSection from "./_sections/DetailSection";
import Footer from "@/_components/Footer";
import Hero from "@/_components/Hero";

export default function BankruptcyOrderAnnulled() {
  return (
    <>
      <Navbar />
      <Hero
        banner="Legal Advice"
        heading="Successful return of cash following seizure and detention under POCA 2002"
        date="December 24, 2020"
        backgroundImage="bgAbout.png"
      />
      <DetailSection />
      <Footer />
    </>
  );
}
