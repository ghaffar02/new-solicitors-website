import Navbar from "@/_components/Navbar";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
import Hero from "@/_components/Hero";
// import { Box } from "@mui/material";
export default function ContactUsScreen() {
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
        banner="Stronger With Us"
        heading="Expert Legal Support When You Need It Most"
      />
      <ContactUs />
      <Footer />
      {/* </Box> */}
    </>
  );
}
