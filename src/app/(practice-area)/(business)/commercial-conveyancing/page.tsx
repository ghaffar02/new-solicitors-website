import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import Footer from "@/_components/Footer";
import pngs from "@/_assets/webp";

export default function CommercialConveyancing() {
  const accordionData = [
    {
      title: "Expertise in Commercial Conveyancing",
      content:
        "Our real estate experts provide high-quality legal services, ensuring smooth transactions while addressing complex issues like planning, environmental, and tax considerations.",
    },
    {
      title: "Navigating Commercial Property Laws",
      content:
        "We assist with legal aspects of buying commercial property, including environmental concerns, planning regulations, VAT, and stamp duty, ensuring compliance and efficiency.",
    },
    {
      title: "Trusted Legal Support for Businesses",
      content:
        "With years of experience, our team helps businesses with property transactions, lease agreements, and regulatory compliance, providing reliable legal guidance for clients.",
    },
    {
      title: "Handling Property Transfers & Leasing",
      content:
        "We offer expert assistance in rent payments, property transfers, lease contracts, and buying or selling commercial properties, ensuring legal security and smooth operations.",
    },
    {
      title: "Client-Focused Real Estate Solutions",
      content:
        "Our constructive approach has earned us the trust of clients who rely on us for commercial property matters, helping them achieve their long-term real estate goals.",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero
        banner="Professional. Reliable. Efficient."
        heading="Your Commercial Property Partners"
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
