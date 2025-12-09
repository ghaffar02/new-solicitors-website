import Navbar from "@/_components/Navbar";
import DetailSection from "./_sections/DetailSection";
import ContactUs from "@/_components/ContactUs";
import Footer from "@/_components/Footer";
// import { Box } from "@mui/material";
// import { localColors } from "@/app/utils/themes";

export default function AVictimEntrapmentInYorkshire() {
  return (
    <>
      <Navbar />
      {/*  <Box
        sx={{
          width: "100%",
          backgroundColor: localColors.sideColor,
          paddingX: { xl: "60px" },
        }}
      >
        <Box
          sx={{
            // maxWidth: "1536px",
            width: "100%",
            margin: "auto",
            backgroundColor: "#ffffff",
          }}
        > */}
      <DetailSection />
      {/* </Box>
      </Box> */}
      <ContactUs />
      <Footer />
    </>
  );
}
