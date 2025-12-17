import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import Footer from "@/_components/Footer";
import pngs from "@/_assets/webp";

export default function ShariahCompliantFinancing() {
  const accordionData = [
    {
      title: "Shariah-Compliant Financing Support",
      content:
        "We assist individuals and businesses in securing funds that align with Shariah principles, ensuring full transparency and adherence to Islamic financial laws.",
    },
    {
      title: "Trusted Legal Guidance in Islamic Finance",
      content:
        "With strong national and international networks, we provide organized and efficient legal services tailored to the needs of the Muslim community in the UK.",
    },
    {
      title: "Supporting UK’s Muslim Community",
      content:
        "With nearly 3 million Muslims in the UK, we offer expertise in structuring Shariah-compliant financial solutions for individuals and corporate entities.",
    },
    {
      title: "Structuring Business & Investment Affairs",
      content:
        "Our legal experts help structure personal and business finances in compliance with Shariah law, ensuring ethical and legally sound financial practices.",
    },
    {
      title: "Realising Your Shariah-Compliant Goals",
      content:
        "We help individuals and businesses build their investment profile in the UK while strictly adhering to Islamic financial principles and ethical funding practices.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero
        banner="Ethical. Compliant. Trusted."
        heading="Shariah-Compliant Financial Solutions"
        backgroundImage="bgBusiness.png"
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
