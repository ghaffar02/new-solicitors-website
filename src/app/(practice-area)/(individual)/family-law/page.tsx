import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";

export default function FamilyLaw() {
  const accordionData = [
    {
      title: "Compassionate Legal Support in Family Law",
      content:
        "Family matters can be emotionally challenging. Our experienced Family Solicitors provide empathetic and professional guidance, ensuring you receive calm, transparent, and effective legal support tailored to your needs.",
    },
    {
      title: "Guidance Through Family Legal Issues",
      content:
        "We understand the complexity of family law and offer expert advice to navigate sensitive matters with confidence and professionalism. Our team is committed to supporting you through difficult legal challenges.",
    },
    {
      title: "Legal Assistance for Child Matters",
      content:
        "We handle cases involving child custody, child arrangement orders, protection orders, and abduction cases. Our team ensures the best interests of the child while guiding families through legal processes.",
    },
    {
      title: "Divorce & Separation Legal Support",
      content:
        "From divorce proceedings to financial settlements and separation agreements, we provide professional legal guidance to help individuals navigate the emotional and legal aspects of relationship breakdowns.",
    },
    {
      title: "Protection Against Domestic Abuse",
      content:
        "We offer legal support for domestic abuse victims, including emergency protection orders, occupation orders, and advice on forced marriages, ensuring your safety and legal rights are upheld.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero
        banner="Trust You Can Count On"
        heading="Helping You Build Your Future Abroad"
      />
      <ImmigrationSupport data={accordionData} />
      <ContactUs />
      <Footer />
    </>
  );
}
