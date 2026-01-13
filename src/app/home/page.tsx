import { Box } from "@mui/material";
import HeroHome from "./_sections/HeroHome";
import CoreValues from "./_sections/CoreValues";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
import InfoSection from "@/_components/InfoSection";
import pngs from "@/_assets/webp";
import WhatWeOffer from "./_sections/WhatWeOffer";
// import RealCasesRealResults from "./_sections/RealCasesRealResults";
import InsightsAndLegalGuidance from "./_sections/InsightsAndLegalGuidance";
import WhatOurCustomersSay from "./_sections/WhatOurCustomersSay";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <Box
        sx={{
          height: "200px",
          width: "100%",
          backgroundColor: "#fff",
          display: { xs: "none", md: "block" },
        }}
      ></Box>
      <Box
        sx={{
          display: { md: "none" },
        }}
      >
        <CoreValues />
      </Box>
      <InfoSection
        banner="LETS GET TO"
        heading="know about us"
        description="At Conquest Law we aim to provide first class legal services to our clients, both individuals and businesses, at competitive rates. We will do whatever it takes in order to achieve our clients’ desired outcome."
        buttonText="Learn More"
        reverse={true}
        image={pngs.Suit}
      />
      <WhatWeOffer />
      {/* <RealCasesRealResults /> */}
      <InsightsAndLegalGuidance />
      <WhatOurCustomersSay />
      <ContactUs />
      <Footer />
    </>
  );
}
// deploy
