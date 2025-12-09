"use client";
import { useEffect } from "react";
import { globalFontSize } from "@/app/utils/themes";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

// Define the props interface
interface HeroProps {
  text: string;
  text2?: string;
  description?: string;
  backgroundImage?: string;
}

export default function Hero({
  text,
  text2,
  description,
  backgroundImage = "./heroAboutUS.webp",
}: HeroProps) {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: {
          xs: "40px 20px",
          sm: "80px 30px",
          md: "80px 50px",
          lg: "100px 100px",
        },
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: { xs: "450px", xxl: "600px" },
        marginTop: { xs: "76px", sm: "86px", md: "90px", lg: "93px" },
        maxWidth: { xxl: "100%" },
        margin: "auto",
      }}
    >
      <Box
        data-aos="zoom-in"
        data-aos-duration="500"
        sx={{
          maxWidth: { xs: "400px", sm: "500px", md: "800px" },
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "20px", md: "40px" },
          padding: { xs: "20px", md: "40px" },
          textAlign: "center",
          margin: "auto",
          backgroundColor: "#FFFFFFB2",
          borderRadius: "20px",
          boxShadow: "0px 4px 40px 0px #FFFFFF59",
          backdropFilter: "blur(40px)",
          textTransform: "capitalize",
        }}
      >
        <Typography
          sx={{
            fontSize: globalFontSize.h1,
            color: "#565656",
            fontWeight: "700 !important",
            lineHeight: `calc(${globalFontSize.h1} + 15px)`,
            textTransform: "capitalize",
          }}
        >
          {text}
          <span
            style={{
              fontSize: "inherit",
              color: "inherit",
              fontWeight: "inherit",
              lineHeight: "inherit",
              display: "block",
              textTransform: "capitalize",
            }}
          >
            {text2}
          </span>
        </Typography>

        {description && (
          <Typography
            sx={{
              color: "#00000080",
              fontSize: globalFontSize.p2,
              maxWidth: "650px",
              margin: "auto",
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
