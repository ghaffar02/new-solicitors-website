import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import AboutSection from "./_sections/AboutUs";
import MissionSection from "./_sections/Mission";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
// import { Box } from "@mui/material";

export default function AboutPage() {
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
        text="Get To Know "
        text2="About Us"
        backgroundImage="heroAboutUS.webp"
      />
      <AboutSection />
      <MissionSection />
      <ContactUs />
      <Footer />
      {/* </Box> */}
    </>
  );
}
