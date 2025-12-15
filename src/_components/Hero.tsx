"use client";
import { useEffect } from "react";
import { globalFontSize, sectionPadding } from "@/app/utils/themes";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";

// Define the props interface
interface HeroProps {
  heading: string;
  banner?: string;
  backgroundImage?: string;
}

export default function Hero({ heading, banner, backgroundImage }: HeroProps) {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", lg: "block" },
          alignItems: { xs: "center", lg: "unset" },
          width: "100%",
          height: { xs: "400px", md: "550px", lg: "600px" },
          paddingTop: {
            sm: "80px",
            md: "120px",
          },
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : "url(/bgHeroHome.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          padding: sectionPadding,
        }}
      >
        <Navbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "780px",
            height: "100%",
            width: "100%",
            margin: "auto",
            flexDirection: "column",
            gap: "20px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: globalFontSize.p2,
              color: "#9A9A9A",
              textTransform: "uppercase",
              margin: "auto",
              textAlign: "center",
              marginY: "0px",
            }}
          >
            {banner}
          </Typography>
          <Typography
            sx={{
              fontSize: globalFontSize.h1,
              color: "#FFFFFF",
              fontWeight: "700 !important",
              lineHeight: `calc(${globalFontSize.h1} + 15px)`,
              textTransform: "capitalize",
              maxWidth: "780px",
              margin: "auto",
              textAlign: "center",
              fontFamily: "'PlayfairDisplay', serif !important",
              marginY: "0px",
            }}
          >
            {heading}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#1A1A1AE5",
            zIndex: 1,
          }}
        />
      </Box>
    </>
  );
}
