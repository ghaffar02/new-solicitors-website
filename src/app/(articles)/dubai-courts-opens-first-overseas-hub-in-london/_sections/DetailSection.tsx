"use client";
import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
// import { InputBase, Typography } from "@mui/material";
import DetailSectionImage from "../_components/DetailSectionImage";
// import DetailSectionForm from "../_components/DetailSectionForm";
// import SearchIcon from "@mui/icons-material/Search";
// import { localFontSize } from "@/app/utils/themes";
// import { Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DetailSection() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  // const advocacyData = [
  //   { title: "Advocacy", number: "(01)" },
  //   { title: "Legal Advice", number: "(03)" },
  // ];
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "25px 20px",
            sm: "50px 30px",
            md: "75px 50px",
            lg: "100px 100px",
          },
          marginTop: { xs: "76px", sm: "86px", md: "90px", lg: "93px" },
        }}
      >
        <Grid
          sx={{
            maxWidth: { xs: "1440px" },
            margin: "auto",
            rowGap: { xs: "30px", sm: "50px" },
            flexDirection: { xs: "column-reverse", md: "unset" },
          }}
          container
        >
          <Grid xs={12} md={12}>
            <DetailSectionImage />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
