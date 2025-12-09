import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import ImmigrationSupport from "@/_components/ImmigrationSupport";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
// import { Box } from "@mui/material";
export default function CriminalLaw() {
  const accordionData = [
    {
      title: "Expert Legal Support in Criminal Law",
      content:
        "Facing a criminal charge can be overwhelming. Our experienced criminal defence team provides strong representation, ensuring all possible lines of defence are explored to achieve the best outcome.",
    },
    {
      title: "Specialist Criminal Defence Team",
      content:
        "Led by an in-house Criminal Barrister, our team has extensive experience in courts across England and Wales, handling complex criminal cases with diligence and strategic expertise.",
    },
    {
      title: "Fraud, Financial & Serious Crimes",
      content:
        "We handle cases involving the Serious Fraud Office (SFO), financial crimes, POCA, Trading Standards, Health & Safety Offences, and motoring offences, ensuring expert legal representation.",
    },
    {
      title: "Defending Serious Criminal Offences",
      content:
        "Our team represents clients in serious offences such as homicide, serious violence, terrorism, modern slavery, robbery, and firearms charges, ensuring a strong legal defence.",
    },
    {
      title: "Private Representation & Fees",
      content:
        "We do not offer Legal Aid but provide competitive private rates and, where possible, fixed fees for our services, ensuring high-quality legal representation tailored to your needs.",
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
        text="Criminal Law"
        text2=""
        backgroundImage="bgImmigrationLaw.webp"
        description="Moving abroad is challenging, but our expert team ensures a strong case for a smooth and successful immigration process."
      />
      <ImmigrationSupport data={accordionData} />
      <ContactUs />
      <Footer />
      {/* </Box> */}
    </>
  );
}
