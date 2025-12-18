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
    heading: "Resolving Legal Conflicts with Clarity and Confidence",
    description:
      "Disputes can be stressful, but the right legal approach can save time and money. Learn how experienced lawyers help clients reach fair settlements through strategy and negotiation.",
    pathname: "/news-detail/news-detail/a-victim-entrapment-in-yorkshire",
  },
  {
    image: pngs.insightsAndLegalGuidance2,
    heading: "Navigating Immigration Laws with Expert Legal Guidance",
    description:
      "Immigration matters require precision, patience, and professional support. Discover how our lawyers simplify complex immigration procedures, assist with appeals, and help you secure your legal status successfully.",

    pathname: "/news-detail/a-victim-entrapment-in-yorkshire",
  },
  {
    image: pngs.insightsAndLegalGuidance3,
    heading: "Understanding and Protecting Your Legal Rights Effectively",
    description:
      "Knowing your rights empowers you to face legal challenges with strength. Explore how our expert counsel ensures you stay informed, protected, and prepared in every situation—from disputes to defense.",
    pathname: "/news-detail/a-victim-entrapment-in-yorkshire",
  },
  {
    image: pngs.insightsAndLegalGuidance4,
    heading: "Current Trends Impacting Legal Developments",
    description:
      "Explore how emerging trends are influencing the legal landscape across different sectors. From technology to finance, we analyze key developments that could affect your business or personal affairs.",
    pathname: "/news-detail/a-victim-entrapment-in-yorkshire",
  },
  {
    image: pngs.insightsAndLegalGuidance5,
    heading: "In-Depth Case Studies and Client Success Stories",
    description:
      "Dive into detailed case studies showcasing how our expertise has helped clients achieve successful outcomes. Learn about the challenges faced, strategies employed, and the results that made a difference.",
    pathname: "/news-detail/a-victim-entrapment-in-yorkshire",
  },
  {
    image: pngs.insightsAndLegalGuidance6,
    heading: "Practical Legal Advice and Tips for Everyday Situations",
    description:
      "Access practical advice from our experienced attorneys on common legal issues. From contracts and compliance to dispute resolution, our tips are designed to empower you.",
    pathname: "/news-detail/a-victim-entrapment-in-yorkshire",
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
