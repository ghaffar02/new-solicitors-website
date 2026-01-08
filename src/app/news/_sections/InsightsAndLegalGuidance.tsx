"use client";
import React, { useRef, useEffect } from "react";
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
  const dotsContainerRef = useRef<HTMLDivElement>(null);
  const sliderWrapperRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  // Move dots to navigation container after render
  useEffect(() => {
    const moveDots = () => {
      if (sliderWrapperRef.current && dotsContainerRef.current) {
        const dots = sliderWrapperRef.current.querySelector(
          ".slick-dots"
        ) as HTMLElement;
        if (
          dots &&
          dotsContainerRef.current &&
          !dotsContainerRef.current.contains(dots)
        ) {
          // Clear the container
          dotsContainerRef.current.innerHTML = "";
          // Move the actual dots element (not clone) to preserve event handlers
          dotsContainerRef.current.appendChild(dots);
        }
      }
    };

    // Move dots after initial render
    const timer = setTimeout(moveDots, 100);

    // Also move dots when window resizes (slider might recreate them)
    const resizeHandler = () => {
      setTimeout(moveDots, 100);
    };
    window.addEventListener("resize", resizeHandler);

    // Use MutationObserver to watch for dots changes
    const observer = new MutationObserver(moveDots);
    if (sliderWrapperRef.current) {
      observer.observe(sliderWrapperRef.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", resizeHandler);
      observer.disconnect();
    };
  }, []);

  const settings = {
    dots: true,
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
                fontFamily: "'PlayfairDisplay', serif !important",
              }}
            >
              Clear insights on legal matters{" "}
            </Typography>
          </Box>
        </Box>

        {/* Cards Slider */}
        <Box
          ref={sliderWrapperRef}
          sx={{
            "& .slick-dots": {
              display: "none !important", // Hide default dots position
            },
          }}
        >
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
        </Box>

        {/* Bottom Center - Navigation Controls: Arrows and Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginTop: { xs: "30px", md: "50px" },
            position: "relative",
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
          <Box
            ref={dotsContainerRef}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "& .slick-dots": {
                display: "flex !important",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                margin: 0,
                listStyle: "none",
                padding: 0,
                position: "relative",
                bottom: "unset",
              },
              "& .slick-dots li": {
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#9A9A9A",
                transition: "background-color 0.3s ease, transform 0.3s ease",
                cursor: "pointer",
                transform: "scale(1)",
                willChange: "transform, background-color",
              },
              "& .slick-dots li.slick-active": {
                width: "10px",
                height: "10px",
                background: "#074592",
                transform: "scale(1.5)",
              },
              "& .slick-dots li button": {
                display: "none",
              },
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
