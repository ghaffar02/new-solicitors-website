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
import { useRouter } from "next/navigation";

// Card component props interface
interface OfferCardProps {
  icon: StaticImageData;
  heading: string;
  description: string;
  route: string;
  onClick: () => void;
}

// Separate OfferCard component
const OfferCard: React.FC<OfferCardProps> = ({
  icon,
  heading,
  description,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
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
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          borderColor: "#074592",
          transform: "scale(1.05)",
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
    route: "/family-law",
  },
  {
    icon: svgs.immigrationLaw,
    heading: "Immigration Law",
    description:
      "We simplify complex immigration cases, helping you achieve legal status and peace of mind.",
    route: "/immigration-law",
  },
  {
    icon: svgs.employmentLaw,
    heading: "Employment Law",
    description:
      "We defend your workplace rights and ensure fair treatment for everyone.",
    route: "/employment-law",
  },
  {
    icon: svgs.criminalLaw,
    heading: "Criminal Law",
    description:
      "We provide strong legal defense to protect your freedom, privacy and reputation.",
    route: "/criminal-law",
  },
];

// Business tab cards data
const businessCardsData = [
  {
    icon: svgs.CommercialLaw,
    heading: "Commercial Law",
    description:
      "We provide comprehensive legal support for business transactions and commercial property matters.",
    route: "/commercial-law",
  },
  {
    icon: svgs.Handshake,
    heading: "Business Mergers and Acquisitions",
    description:
      "Expert guidance through complex business sales, purchases, and merger transactions.",
    route: "/business-mergers-and-acquisitions",
  },
  {
    icon: svgs.Searchfile,
    heading: "Commercial Conveyancing",
    description:
      "Professional assistance with commercial property purchases, sales, and lease agreements.",
    route: "/commercial-conveyancing",
  },
  {
    icon: svgs.Law,
    heading: "Dispute Resolution (Commercial)",
    description:
      "Strategic legal representation for business disputes and commercial litigation matters.",
    route: "/dispute-resolution-commercial",
  },
];

function WhatWeOffer() {
  const [selectedTab, setSelectedTab] = useState("personal");
  const router = useRouter();

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newTab: string | null
  ) => {
    if (newTab !== null) {
      setSelectedTab(newTab);
    }
  };

  const handleCardClick = (route: string) => {
    router.push(route);
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
          maxWidth: { xs: "1440px", xxl: "1440px" },
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
                  route={card.route}
                  onClick={() => handleCardClick(card.route)}
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
