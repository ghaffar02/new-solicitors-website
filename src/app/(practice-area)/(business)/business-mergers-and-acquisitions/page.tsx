import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import Footer from "@/_components/Footer";
import pngs from "@/_assets/webp";

export default function BusinessMergersAndAcquisitions() {
  const accordionData = [
    {
      title: "Expert Guidance in Mergers & Acquisitions",
      content:
        "Our mergers and acquisitions team provides expert legal counsel on business purchases, sales, and disposals across various industries, ensuring a smooth and strategic transaction process.",
    },
    {
      title: "Comprehensive Legal Support for Deals",
      content:
        "We offer tailored legal solutions, leveraging national and regional market knowledge to provide commercially focused advice that aligns with your business objectives and growth strategies.",
    },
    {
      title: "Multi-Disciplinary Approach to Transactions",
      content:
        "Our team collaborates with experts in commercial property, employment, and disputes to ensure all legal aspects of mergers, acquisitions, and disposals are thoroughly managed.",
    },
    {
      title: "Coordination with Corporate Advisors",
      content:
        "We work closely with accountants and financial advisors to address tax and financial considerations, ensuring transactions comply with all legal and commercial requirements.",
    },
    {
      title: "Strategic & Practical Legal Advice",
      content:
        "Beyond legal formalities, we provide clear, practical insights on mergers and acquisitions, helping businesses understand the full implications of their transactions.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero
        banner="Clarity. Strategy. Results."
        heading="Your Trusted Commercial Law Partners"
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
