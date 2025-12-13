import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
import pngs from "@/_assets/webp";
// import { Box } from "@mui/material";
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
      {/* <Box
        sx={{
          paddingX: { xl: "60px", xxl: "none" },
          maxWidth: { xs: "1536px", xxl: "80vw" },
          width: "100%",
          margin: "auto",
          backgroundColor: "#ffffff",
        }}
      > */}
      <Hero banner="" heading="" />
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
