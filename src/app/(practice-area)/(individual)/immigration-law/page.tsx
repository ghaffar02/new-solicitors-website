import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import Footer from "@/_components/Footer";

export default function ImmigrationLaw() {
  const accordionData = [
    {
      title: "Expert Guidance in Immigration Law",
      content:
        "Moving to a new country is challenging, and settling in can be even harder. We assist individuals in navigating complex immigration laws to help them establish their new home with legal certainty and ease.",
    },
    {
      title: "Building a Strong Immigration Case",
      content:
        "We ensure your immigration case is strong from the start, minimizing delays and appeals. Our team works diligently to handle applications accurately, reducing stress and financial burdens.",
    },
    {
      title: "Diverse & Culturally Aware Legal Support",
      content:
        "Our immigration specialists come from diverse backgrounds, allowing them to understand cultural sensitivities while providing expert legal assistance tailored to your unique situation.",
    },
    {
      title: "Visa Assistance & Immigration Appeals",
      content:
        "We assist with Spouse, Fiancé, Student, Visit, and Work Visas, as well as European Economic Area applications. Our team helps navigate appeals and tribunals for immigration-related issues.",
    },
    {
      title: "Asylum, Citizenship & Deportation Cases",
      content:
        "We provide legal support for asylum seekers, British citizenship applications, deportation defense, and human rights cases. Our goal is to ensure fairness and legal protection for our clients.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero
        banner="Trust You Can Count On"
        heading="Helping You Build Your Future Abroad"
        backgroundImage="bgIndividual.png"
      />
      <ImmigrationSupport data={accordionData} />
      <Footer />
    </>
  );
}
