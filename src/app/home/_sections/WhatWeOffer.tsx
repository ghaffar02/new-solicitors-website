"use client";
import React, { useState, memo } from "react";
import {
  Box,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { localFontSize, sectionPadding } from "@/app/utils/themes";
import svgs from "@/_assets/svgs";
import Image, { StaticImageData } from "next/image";

// Card component props interface
interface OfferCardProps {
  icon: StaticImageData;
  heading: string;
  description: string;
}

// Separate OfferCard component
const OfferCard: React.FC<OfferCardProps> = ({
  icon,
  heading,
  description,
}) => {
  return (
    <Box
      sx={{
        border: "2px solid #9A9A9A",
        borderRadius: { xs: "10px", md: "20px" },
        padding: { xs: "15px", md: "20px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "16px",
        height: "100%",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          borderColor: "#074592",
        },
      }}
    >
      <Image src={icon} alt={heading} width={50} height={50} />
      <Typography
        sx={{
          color: "#1A1A1A",
          fontSize: localFontSize.h3,
          fontWeight: "600",
          fontFamily: "'PlayfairDisplay', serif !important",
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          color: "#9A9A9A",
          fontSize: localFontSize.p4,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

// Personal tab cards data
const personalCardsData = [
  {
    icon: svgs.familyLaw,
    heading: "Family Law",
    description:
      "We handle family matters with care, protecting your rights and your family",
  },
  {
    icon: svgs.immigrationLaw,
    heading: "Immigration Law",
    description:
      "We simplify complex immigration cases, helping you achieve legal status and peace of mind.",
  },
  {
    icon: svgs.employmentLaw,
    heading: "Employment Law",
    description:
      "We defend your workplace rights and ensure fair treatment for everyone.",
  },
  {
    icon: svgs.criminalLaw,
    heading: "Criminal Law",
    description:
      "We provide strong legal defense to protect your freedom, privacy and reputation.",
  },
];

// Business tab cards data
const businessCardsData = [
  {
    icon: svgs.employmentLaw,
    heading: "Employment Law",
    description:
      "We defend your workplace rights and ensure fair treatment for everyone.",
  },
  {
    icon: svgs.criminalLaw,
    heading: "Criminal Law",
    description:
      "We provide strong legal defense to protect your freedom, privacy and reputation.",
  },
  {
    icon: svgs.familyLaw,
    heading: "Family Law",
    description:
      "We handle family matters with care, protecting your rights and your family",
  },
  {
    icon: svgs.immigrationLaw,
    heading: "Immigration Law",
    description:
      "We simplify complex immigration cases, helping you achieve legal status and peace of mind.",
  },
];

function WhatWeOffer() {
  const [selectedTab, setSelectedTab] = useState("personal");

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newTab: string | null
  ) => {
    if (newTab !== null) {
      setSelectedTab(newTab);
    }
  };

  const cardsData =
    selectedTab === "personal" ? personalCardsData : businessCardsData;

  return (
    <Box
      sx={{
        background: "#ffffff",
        padding: sectionPadding,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          marginBottom: { xs: "40px", md: "50px", lg: "80px" },
        }}
      >
        {/* Main Heading */}
        <Typography
          data-aos="fade-up"
          data-aos-delay="200"
          sx={{
            color: "#1A1A1A",
            fontSize: localFontSize.h2,
            fontWeight: "600",
            marginBottom: { xs: "10px", md: "20px" },
            fontFamily: "'PlayfairDisplay', serif !important",
          }}
        >
          What We Offer
        </Typography>

        {/* Description */}
        <Typography
          data-aos="fade-up"
          data-aos-delay="300"
          sx={{
            color: "#9A9A9A",
            fontSize: localFontSize.p2,
            fontWeight: "400",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          We offer a wide range of legal services tailored to meet your unique
          needs. Our experienced team provides expert guidance and
          representation across all major areas of law.{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: { xs: "1440px", xxl: "1536px" },
          width: "100%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <ToggleButtonGroup
          value={selectedTab}
          exclusive
          onChange={handleChange}
          sx={{
            display: "inline-flex",
            border: "none",
            gap: "10px",
          }}
        >
          <ToggleButton
            value="personal"
            sx={{
              fontSize: localFontSize.p3,
              fontWeight: "500",
              padding: "10px 20px",
              borderRadius: "0px !important",
              textTransform: "none",
              transition: "all 0.3s ease-in-out",
              border: "none",
              "&.Mui-selected": {
                backgroundColor: "#074592 !important",
                color: "#ffffff !important",
              },
              "&:not(.Mui-selected)": {
                backgroundColor: "transparent !important",
                color: "#000 !important",
              },
              "&:hover": {
                backgroundColor: "#074592 !important",
                color: "#ffffff !important",
              },
            }}
          >
            Personal
          </ToggleButton>

          <ToggleButton
            value="business"
            sx={{
              fontSize: localFontSize.p3,
              fontWeight: "500",
              padding: "10px 20px",
              borderRadius: "0px !important",
              border: "none",
              textTransform: "none",
              transition: "all 0.3s ease-in-out",
              "&.Mui-selected": {
                backgroundColor: "#074592 !important",
                color: "#ffffff !important",
              },
              "&:not(.Mui-selected)": {
                backgroundColor: "transparent !important",
                color: "#000 !important",
              },
              "&:hover": {
                backgroundColor: "#074592 !important",
                color: "#ffffff !important",
              },
            }}
          >
            Business
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Cards Grid */}
        <Box sx={{ marginTop: "40px" }}>
          <Grid container spacing={{ xs: 2.5, md: 3.75 }}>
            {cardsData.map((card, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <OfferCard
                  icon={card.icon}
                  heading={card.heading}
                  description={card.description}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default memo(WhatWeOffer);
