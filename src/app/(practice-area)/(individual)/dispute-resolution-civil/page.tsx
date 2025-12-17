import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import Footer from "@/_components/Footer";
import pngs from "@/_assets/webp";

export default function DisputeResolutionCivil() {
  const accordionData = [
    {
      title: "Expert Assistance in Civil Disputes",
      content:
        "Disputes with individuals or businesses can arise unexpectedly. Our skilled litigators at Conquest Law Solicitors provide expert guidance to help you reach the best possible settlement, often resolving matters amicably without needing legal proceedings.",
    },
    {
      title: "Strong Advocacy in Legal Proceedings",
      content:
        "If legal action becomes necessary, we ensure a strong case representation throughout the courts in England and Wales. Our team is experienced in litigation strategies to protect your interests and achieve the most favorable outcome.",
    },
    {
      title: "Resolving Civil & Commercial Disputes",
      content:
        "We handle a broad range of civil and commercial litigation matters, providing effective dispute resolution strategies to safeguard your rights and business interests while minimizing risks and legal costs.",
    },
    {
      title: "Contract and Consumer Disputes",
      content:
        "Our team provides expert legal support in contract disputes and consumer rights cases, ensuring fair resolutions while protecting clients from breaches and unfair practices.",
    },
    {
      title: "Neighbour and Debt Disputes",
      content:
        "We assist in resolving neighbour conflicts and debt recovery cases, helping clients navigate legal complexities to achieve a fair and lawful resolution with minimal conflict.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero
        banner="Resolution. Strategy. Success."
        heading="Expert Civil Dispute Resolution"
        backgroundImage="bgIndividual.png"
      />
      <ImmigrationSupport
        reverseOrder={true}
        image={pngs.CommercialLaw}
        data={accordionData}
      />
      <Footer />
    </>
  );
}
