import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import PrivatePolicies from "./_sections/PrivatePolicies";
import Footer from "@/_components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <Hero
        text="Privacy Policy"
        backgroundImage="bgDetailSection.webp"
        description="This Privacy Policy outlines how we collect, use, and protect your personal data when you use our website. Your trust is important to us, and we are committed to safeguarding your privacy."
      />
      <PrivatePolicies
        businessName="Conquest Law Solicitors"
        businessEmail="info@conquestlaw.co.uk"
        businessPhone="01709458786"
      />
      <Footer />
    </>
  );
}
