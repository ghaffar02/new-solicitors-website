"use client";
import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { localFontSize, sectionPadding } from "@/app/utils/themes";
import svgs from "@/_assets/svgs";
import Image, { StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";

interface InfoSectionProps {
  banner: string;
  heading: string;
  description: string;
  buttonText?: string;
  image: StaticImageData;
  reverse?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  banner,
  heading,
  description,
  buttonText,
  image,
  reverse = false,
}) => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box sx={{ maxWidth: "1440px", margin: "auto", padding: sectionPadding }}>
        <Grid
          container
          spacing={{ xs: 2, md: 4, lg: 6 }}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: "column", md: reverse ? "row-reverse" : "row" }}
        >
          {/* Left Side - Overlapping Images */}
          <Grid item xs={12} md={6}>
            <Box
              data-aos="fade-right"
              sx={{
                position: "relative",
                maxWidth: "550px",
                width: "100%",
                height: "auto",
              }}
            >
              <Image
                src={image}
                alt={heading}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Text Content */}
          <Grid item xs={12} md={6}>
            <Box
              data-aos="fade-left"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "16px", md: "20px" },
              }}
            >
              {/* Tagline */}
              <Typography
                sx={{
                  color: "#9A9A9A",
                  fontSize: localFontSize.p2,
                }}
              >
                {banner}
              </Typography>
              {/* Main Heading */}
              <Typography
                sx={{
                  color: "#1A1A1A",
                  fontSize: localFontSize.h2,
                  fontWeight: "600",
                  fontFamily: "'PlayfairDisplay', serif !important",
                  textTransform: "capitalize",
                }}
              >
                {heading}
              </Typography>
              {/* Description */}
              <Typography
                sx={{
                  color: "#9A9A9A",
                  fontSize: localFontSize.p2,
                  maxWidth: "600px",
                }}
              >
                {description}
              </Typography>
              {/* button */}
              {buttonText && (
                <Box>
                  <Button
                    text={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Image
                          src={svgs.info}
                          alt="info"
                          width={20}
                          height={20}
                        />
                        {buttonText}
                      </Box>
                    }
                    sx={{
                      backgroundColor: "#074592",
                      color: "#FFFFFF",
                      border: "none",
                      padding: { xs: "14px 28px", md: "16px 36px" },
                      fontSize: localFontSize.p3,
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
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default InfoSection;
