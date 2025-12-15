import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import Footer from "@/_components/Footer";

export default function ProbateAndEstateAdministration() {
  const accordionData = [
    {
      title: "Simplifying Probate & Estate Matters",
      content:
        "Administering an estate can be complex and stressful. Our solicitors work to ease this burden, guiding clients through the process with clarity and expertise to ensure a smooth legal experience.",
    },
    {
      title: "Responsibilities of Personal Representatives",
      content:
        "Personal Representatives are personally liable for their actions in estate administration. We provide legal support to help navigate these responsibilities and avoid potential legal risks.",
    },
    {
      title: "Expert Guidance for Estate Administration",
      content:
        "Estate administration involves legal complexities that must be handled properly. Our Probate experts assist in addressing legal issues efficiently, ensuring a seamless estate distribution process.",
    },
    {
      title: "Avoiding Legal Risks in Probate Cases",
      content:
        "Handling an estate without legal assistance can lead to mistakes. Our team helps Personal Representatives comply with legal requirements and manage estate affairs with confidence.",
    },
    {
      title: "Consult with Our Probate Specialists",
      content:
        "If you need legal advice regarding probate or estate administration, contact Conquest Law Solicitors. Our experts are ready to provide personalized support for your legal needs.",
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
      <Footer />
    </>
  );
}
