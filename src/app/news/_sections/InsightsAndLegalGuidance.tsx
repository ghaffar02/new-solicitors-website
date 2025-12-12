"use client";
import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { localFontSize, sectionPadding } from "@/app/utils/themes";
import pngs from "@/_assets/webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "@/_components/CustomArrow";
import InsightCard from "@/_components/InsightCard";

// Insights data
const insightsData = [
  {
    image: pngs.insightsAndLegalGuidance1,
    heading: "Resolving Legal Conflicts with Clarity and Confidence",
    description:
      "Disputes can be stressful, but the right legal approach can save time and money. Learn how experienced lawyers help clients reach fair settlements through strategy and negotiation.",
  },
  {
    image: pngs.insightsAndLegalGuidance2,
    heading: "Navigating Immigration Laws with Expert Legal Guidance",
    description:
      "Immigration matters require precision, patience, and professional support. Discover how our lawyers simplify complex immigration procedures, assist with appeals, and help you secure your legal status successfully.",
  },
  {
    image: pngs.insightsAndLegalGuidance3,
    heading: "Understanding and Protecting Your Legal Rights Effectively",
    description:
      "Knowing your rights empowers you to face legal challenges with strength. Explore how our expert counsel ensures you stay informed, protected, and prepared in every situation—from disputes to defense.",
  },
  {
    image: pngs.insightsAndLegalGuidance1,
    heading: "Resolving Legal Conflicts with Clarity and Confidence",
    description:
      "Disputes can be stressful, but the right legal approach can save time and money. Learn how experienced lawyers help clients reach fair settlements through strategy and negotiation.",
  },
  {
    image: pngs.insightsAndLegalGuidance2,
    heading: "Navigating Immigration Laws with Expert Legal Guidance",
    description:
      "Immigration matters require precision, patience, and professional support. Discover how our lawyers simplify complex immigration procedures, assist with appeals, and help you secure your legal status successfully.",
  },
  {
    image: pngs.insightsAndLegalGuidance3,
    heading: "Understanding and Protecting Your Legal Rights Effectively",
    description:
      "Knowing your rights empowers you to face legal challenges with strength. Explore how our expert counsel ensures you stay informed, protected, and prepared in every situation—from disputes to defense.",
  },
];

export default function InsightsAndLegalGuidance() {
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
    rows: 2,
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
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        background: "#fff",
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
            gap: { xs: "40px", md: "60px", lg: "80px" },
          }}
        >
          {/* Left Side - Heading and Description */}
          <Box
            sx={{
              maxWidth: { xs: "300px", sm: "400px", md: "580px" },
              margin: "auto",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#9A9A9A",
                fontSize: localFontSize.p2,
                marginBottom: { xs: "12px", md: "16px" },
                textTransform: "uppercase",
              }}
            >
              Expert Legal Insights
            </Typography>
            <Typography
              sx={{
                color: "#1A1A1A",
                fontSize: localFontSize.h2,
                fontWeight: "600",
                fontFamily: "'PlayfairDisplay', serif",
              }}
            >
              Clear insights on legal matters{" "}
            </Typography>
          </Box>
        </Box>

        {/* Cards Slider */}
        <Slider ref={sliderRef} {...settings}>
          {insightsData.map((insight, index) => (
            <Box key={index}>
              <InsightCard
                image={insight.image}
                heading={insight.heading}
                description={insight.description}
              />
            </Box>
          ))}
        </Slider>

        {/* Bottom Center - Arrow Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: { xs: "30px", md: "50px" },
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
    </Box>
  );
}
