import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import NewsArticles from "@/_components/NewsArticles";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
// import { Box } from "@mui/material";
// import { localColors } from "../utils/themes";
export default function NewsPage() {
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
        text="Legal News "
        text2="& Articles"
        backgroundImage="bgNews.webp"
      />
      <NewsArticles />
      <ContactUs />
      <Footer />
      {/* </Box> */}
    </>
  );
}
