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
import InfoSection from "@/_components/InfoSection";
import pngs from "@/_assets/webp";
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
      <InfoSection
        banner="lets get to"
        heading="know about us"
        description="At Conquest Law we aim to provide first class legal services to our clients, both individuals and businesses, at competitive rates. We will do whatever it takes in order to achieve our clients’ desired outcome."
        buttonText="Learn More"
        reverse={true}
        image={pngs.Suit}
      />
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
