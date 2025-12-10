"use client";
import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { localFontSize, sectionPadding } from "@/app/utils/themes";
import pngs from "@/_assets/webp";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "@/_components/CustomArrow";

// Card props interface
interface CaseCardProps {
  image: StaticImageData;
  heading: string;
  description: string;
}

// CaseCard component
const CaseCard: React.FC<CaseCardProps> = ({ image, heading, description }) => {
  return (
    <Box
      sx={{
        position: "relative",
        // width: "100%",
        height: { xs: "350px", sm: "400px", md: "450px" },
        borderRadius: "0px",
        marginX: { xs: "5px", sm: "10px", md: "15px" },
        marginTop: { xs: "10px", sm: "0px" },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          width: {
            xs: "calc(100% - 40px)",
            md: "calc(100% - 50px)",
            xl: "calc(100% - 80px)",
          },
          height: { xs: "calc(100% - 20px)", md: "calc(100% - 30px)" },
          position: "absolute",
        }}
      >
        <Image
          src={image}
          alt={heading}
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
      </Box>

      {/* Content Overlay */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          background: "#1A1A1AE5",
          padding: { xs: "20px", md: "24px" },
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: { xs: "calc(100% - 20px)", md: "calc(100% - 30px)" },
          height: { xs: "156px", sm: "159px", md: "179px", lg: "185px" },
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: localFontSize.h3,
            fontWeight: "600",
            fontFamily: "'PlayfairDisplay', serif",
            // elipsis
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            color: "#9A9A9A",
            fontSize: localFontSize.p2,
            // elipsis
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

// Cases data
const casesData = [
  {
    image: pngs.businessDispute,
    heading: "Business Dispute",
    description:
      "Resolved a complex partnership conflict through skilled negotiation and legal precision.",
  },
  {
    image: pngs.immigrationAppeal,
    heading: "Immigration Appeal",
    description:
      "Successfully secured residency after an initial visa refusal.",
  },
  {
    image: pngs.criminalDefense,
    heading: "Criminal Defense",
    description:
      "Achieved case dismissal by presenting strong evidence and strategic defense.",
  },
  {
    image: pngs.businessDispute,
    heading: "Business Dispute",
    description:
      "Resolved a complex partnership conflict through skilled negotiation and legal precision.",
  },
  {
    image: pngs.immigrationAppeal,
    heading: "Immigration Appeal",
    description:
      "Successfully secured residency after an initial visa refusal.",
  },
  {
    image: pngs.criminalDefense,
    heading: "Criminal Defense",
    description:
      "Achieved case dismissal by presenting strong evidence and strategic defense.",
  },
];

export default function RealCasesRealResults() {
  const sliderRef = useRef<Slider>(null);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        background: "#EFEFEF",
        padding: sectionPadding,
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            marginBottom: { xs: "30px", md: "50px" },
            gap: { xs: "20px", md: "40px" },
          }}
        >
          {/* Left Side - Heading and Description */}
          <Box sx={{ maxWidth: "700px" }}>
            <Typography
              sx={{
                color: "#1A1A1A",
                fontSize: localFontSize.h2,
                fontWeight: "600",
                fontFamily: "'PlayfairDisplay', serif",
                marginBottom: { xs: "12px", md: "16px" },
              }}
            >
              Real Cases, Real Results
            </Typography>
            <Typography
              sx={{
                color: "#9A9A9A",
                fontSize: localFontSize.p2,
              }}
            >
              Discover how our skilled legal team has helped clients overcome
              complex challenges and achieve favorable results.
            </Typography>
          </Box>

          {/* Right Side - Arrow Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: "12px",
            }}
          >
            <CustomArrow
              onClick={handlePrev}
              sx={{
                position: "relative",
                bottom: "unset",
                transform: "rotate(180deg)",
              }}
            />
            <CustomArrow
              onClick={handleNext}
              sx={{
                position: "relative",
                bottom: "unset",
              }}
            />
          </Box>
        </Box>

        {/* Cards Grid */}

        <Slider ref={sliderRef} {...settings}>
          {casesData.map((caseItem, index) => (
            <Box key={index}>
              <CaseCard
                image={caseItem.image}
                heading={caseItem.heading}
                description={caseItem.description}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
