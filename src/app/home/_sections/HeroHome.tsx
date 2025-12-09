"use client";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Button from "@/_components/Button";
import { globalFontSize, localFontSize } from "@/app/utils/themes";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/_components/Navbar";
import { useRouter } from "next/navigation";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const HeroHome: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      sx={{
        display: { xs: "flex", lg: "block" },
        alignItems: { xs: "center", lg: "unset" },
        width: "100%",
        height: { xs: "100vh", md: "1050px" },
        paddingTop: {
          sm: "80px",
          md: "120px",
        },
        backgroundImage: "url(/bgHeroHome.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Navbar />
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Content Container */}
        <Box
          data-aos="fade-up"
          data-aos-duration="700"
          sx={{
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: {
              xs: "30px 20px",
              sm: "40px 40px",
              md: "60px 80px",
              lg: "80px 100px",
            },
          }}
        >
          {/* Tagline */}
          <Typography
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{
              color: "#9A9A9A",
              fontSize: globalFontSize.p2,
              fontWeight: "400",
              marginBottom: { xs: "16px", md: "24px" },
              textTransform: "uppercase",
            }}
          >
            We Stand For You
          </Typography>

          {/* Main Heading */}
          <Typography
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{
              color: "#FFFFFF",
              fontSize: localFontSize.h1,
              fontWeight: "700",
              marginBottom: { xs: "20px", md: "32px" },
              fontFamily: "'PlayfairDisplay', serif",
              maxWidth: "1000px",
            }}
          >
            Compassionate Lawyers, Powerful Advocates
          </Typography>

          {/* Description */}
          <Typography
            data-aos="fade-up"
            data-aos-delay="300"
            sx={{
              color: "rgba(255, 255, 255, 0.75)",
              fontSize: localFontSize.p2,
              fontWeight: "400",
              lineHeight: 1.7,
              marginBottom: { xs: "28px", md: "40px" },
              maxWidth: "1000px",
            }}
          >
            Our team combines compassion with unmatched legal expertise to stand
            by your side in every challenge. We take the time to understand your
            situation and fight for the outcome you deserve. With dedication and
            integrity, we turn legal obstacles into paths toward justice.
          </Typography>

          {/* Learn More Button */}
          <Box data-aos="fade-up" data-aos-delay="400">
            <Button
              onClick={() => {
                router.push("/about-us");
              }}
              text={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <InfoOutlinedIcon sx={{ fontSize: "20px" }} />
                  Learn More
                </Box>
              }
              sx={{
                backgroundColor: "#074592",
                color: "#FFFFFF",
                border: "none",
                padding: { xs: "14px 28px", md: "16px 36px" },
                fontSize: globalFontSize.p3,
                fontWeight: "500",
                borderRadius: "0px",
                width: "auto",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#053a7a",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 20px rgba(7, 69, 146, 0.4)",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#1A1A1AE5",
        }}
      />

      {/* bac color   */}
    </Box>
  );
};

export default HeroHome;
