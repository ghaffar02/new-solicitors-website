import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import PrivatePolicies from "./_sections/PrivatePolicies";
import Footer from "@/_components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <Hero banner="" heading="" />
      <PrivatePolicies
        businessName="Conquest Law Solicitors"
        businessEmail="info@conquestlaw.co.uk"
        businessPhone="01709458786"
      />
      <Footer />
    </>
  );
}
