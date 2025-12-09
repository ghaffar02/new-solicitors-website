import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
import pngs from "@/_assets/webp";
// import { Box } from "@mui/material";
export default function SuccessionAndEstatePlanning() {
  const accordionData = [
    {
      title: "Planning for Business Succession",
      content:
        "The death of a business owner can disrupt operations. We provide expert legal advice on will drafting and inheritance tax planning to ensure a smooth transition.",
    },
    {
      title: "Protecting Business Continuity",
      content:
        "We help business owners, partners, and shareholders secure their business legacy, ensuring financial security and smooth succession planning.",
    },
    {
      title: "Expert Will Drafting Services",
      content:
        "Our legal team assists in drafting wills tailored to business owners, ensuring assets are distributed according to their wishes while minimizing legal complications.",
    },
    {
      title: "Inheritance Tax Planning Advice",
      content:
        "We provide strategies to reduce inheritance tax burdens, helping business owners and their families protect wealth and plan for the future effectively.",
    },
    {
      title: "Trusted Legal Support for Succession",
      content:
        "With years of experience, our team offers expert guidance on estate and succession planning, ensuring long-term financial stability for businesses and families.",
    },
  ];

  return (
    <>
      <Navbar />
      {/* <Box
        sx={{
          paddingX: { xl: "60px", xxl: "none" },
          maxWidth: { xs: "1536px", xxl: "80vw" },
          width: "100%",
          margin: "auto",
          backgroundColor: "#ffffff",
        }}
      > */}
      <Hero
        text="Succession And Estate "
        text2="Planning"
        backgroundImage="commercialLaw.webp"
        description="We provide expert legal support to protect your business interests, ensuring seamless transactions, compliance, and risk management."
      />
      <ImmigrationSupport
        reverseOrder={true}
        image={pngs.CommercialLaw}
        data={accordionData}
      />
      <ContactUs />
      <Footer />
      {/* </Box> */}
    </>
  );
}
