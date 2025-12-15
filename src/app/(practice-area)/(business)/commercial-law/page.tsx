import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import Footer from "@/_components/Footer";
import pngs from "@/_assets/webp";

export default function CommercialLaw() {
  const accordionData = [
    {
      title: "Comprehensive Commercial Law Support",
      content:
        "Our expert team handles business transactions, property acquisitions, and land development. We provide transparent and competitively priced legal support tailored to your commercial needs.",
    },
    {
      title: "Protecting Your Business Interests",
      content:
        "We aim to build strong client relationships, ensuring you have a designated legal contact for advice. Our team works proactively to protect your long-term business goals.",
    },
    {
      title: "Sales & Acquisitions Expertise",
      content:
        "We assist in buying and selling businesses, commercial properties, and development sites, keeping you informed throughout the transaction and securing the best possible outcome.",
    },
    {
      title: "Investor & Developer Legal Support",
      content:
        "Our team helps investors and developers navigate contracts, agreements, easements, and lender negotiations, ensuring smooth real estate and commercial property transactions.",
    },
    {
      title: "Commercial Lease Negotiation & Advice",
      content:
        "We assist landlords and tenants in lease agreements, renewals, assignments, and disputes, ensuring fair terms and minimizing risks before entering legally binding commitments.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero
        banner="Clarity. Strategy. Results."
        heading="Your Trusted Commercial Law Partners"
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
