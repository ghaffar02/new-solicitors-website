// import { Box } from "@mui/material";
import HeroHome from "./_sections/HeroHome";
import CoreValues from "./_sections/CoreValues";
// import AboutUs from "./_sections/AboutUs";
import ClientsExperiences from "./_sections/ClientsExperiences";
import NewsArticles from "@/_components/NewsArticles";
// import NewsUpdates from "./_sections/NewsUpdates";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
import CommitedToJustice from "./_sections/CommitedToJustice";
import LegalServicesTabs from "./_sections/LegalServicesTabs";
// import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      {/* <Box
        sx={{
          // paddingX: { xl: "60px", xxl: "none" },
          maxWidth: { xs: "1536px", xxl: "80vw" },
          width: "100%",
          margin: "auto",
          backgroundColor: "#ffffff",
        }}
      > */}
      <CoreValues />
      {/* <AboutUs /> */}
      <CommitedToJustice />
      <LegalServicesTabs />
      <ClientsExperiences />
      <NewsArticles />
      {/* <NewsUpdates /> */}
      <ContactUs />
      {/* </Box> */}
      <Footer />
    </>
  );
}
