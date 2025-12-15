import Navbar from "@/_components/Navbar";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
import Hero from "@/_components/Hero";

export default function ContactUsScreen() {
  return (
    <>
      <Navbar />
      <Hero
        banner="Stronger With Us"
        heading="Expert Legal Support When You Need It Most"
        backgroundImage="bgContactus.png"
      />
      <ContactUs />
      <Footer />
    </>
  );
}
