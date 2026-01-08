"use client";
import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import Button from "@/_components/Button";
import { localFontSize, sectionPadding } from "@/app/utils/themes";
import pngs from "@/_assets/webp";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "@/_components/CustomArrow";
import svgs from "@/_assets/svgs";
import InsightCard from "@/_components/InsightCard";
import { useRouter } from "next/navigation";

// Insights data
const insightsData = [
  {
    image: pngs.insightsAndLegalGuidance1,
    heading: "Bankruptcy Order Annulled",
    description:
      "Our Litigation Team represented a client who succeeded in his Bankruptcy Annulment Application. The Applicant was made bankrupt.",
    pathname: "/news-details/bankruptcy-order-annulled",
  },
  {
    image: pngs.insightsAndLegalGuidance2,
    heading: "Taxi Licence Appeal Win",
    description:
      "This morning our team represented a Rotherham private hire taxi driver who won his taxi licence appeal at.",
    pathname: "/news-details/taxi-licence-appeal-win",
  },
  {
    image: pngs.insightsAndLegalGuidance3,
    heading:
      "Successful return of cash following seizure and detention under POCA 2002",
    description:
      "Greater Manchester Police have agreed to return several thousand pounds to our clients after it was seized at.",
    pathname:
      "/news-details/successful-return-of-cash-following-seizure-and-detention-under-poca-2002",
  },
  {
    image: pngs.insightsAndLegalGuidance3,
    heading: "Yorkshire “Nightmare” Zebra Crossing – A Victim of Entrapment",
    description: `Conquest Law Solicitors have successfully challenged South Yorkshire Police’s (SYP) attempted prosecution of a client pursued for allegedly driving without reasonable consideration to others at a “Nightmare” zebra crossing in South Yorkshire.`,
    pathname: "/news-details/a-victim-entrapment-in-yorkshire",
  },
  {
    image: pngs.insightsAndLegalGuidance3,
    heading:
      "Beneficial Interest Claim – Proprietary Estoppel & Resulting Trust",
    description:
      "Successfully secured full property ownership for a client through claims of proprietary estoppel and resulting trust after decades of investment in a family home.",
    pathname: "/news-details/beneficial-interest-proprietary-estoppel",
  },
  {
    image: pngs.insightsAndLegalGuidance3,
    heading: "Dubai Courts Opens First Overseas Hub in London",
    description:
      "Dubai Courts opens first international hub in London, offering integrated services with Dubai Chambers to support global investors, entrepreneurs & businesses.",
    pathname: "/news-details/dubai-courts-opens-first-overseas-hub-in-london",
  },
];

export default function InsightsAndLegalGuidance() {
  const sliderRef = useRef<Slider>(null);
  const router = useRouter();

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
            gap: { xs: "20px", md: "40px" },
          }}
        >
          {/* Left Side - Heading and Description */}
          <Box sx={{ maxWidth: "700px", margin: "auto", textAlign: "center" }}>
            <Typography
              sx={{
                color: "#1A1A1A",
                fontSize: localFontSize.h2,
                fontWeight: "600",
                fontFamily: "'PlayfairDisplay', serif !important",
                marginBottom: { xs: "12px", md: "16px" },
              }}
            >
              Insights & Legal Guidance
            </Typography>
            <Typography
              sx={{
                color: "#9A9A9A",
                fontSize: localFontSize.p2,
              }}
            >
              Stay informed with expert articles on law, rights, and justice.
              Our blogs cover real cases, practical advice, and legal insights
              to help you make confident decisions.{" "}
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
                pathname={insight.pathname}
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

        <Button
          onClick={() => router.push("/news")}
          text={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              See more
              <Image
                src={svgs.arrowWhite}
                alt="arrow"
                style={{ width: "18px" }}
              />
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
            width: "180px",
            textTransform: "none",
            transition: "all 0.3s ease",
            margin: "auto",
            marginTop: { xs: "30px", md: "40px", lg: "60px" },
            "&:hover": {
              backgroundColor: "#053a7a",
              transform: "translateY(-2px)",
              boxShadow: "0 4px 20px rgba(7, 69, 146, 0.4)",
            },
          }}
        />
      </Box>
    </Box>
  );
}
