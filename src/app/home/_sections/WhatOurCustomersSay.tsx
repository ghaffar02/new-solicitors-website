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

// Testimonial Card props interface
interface TestimonialCardProps {
  image: StaticImageData;
  quote: string;
  name: string;
  title: string;
}

// TestimonialCard component
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  quote,
  name,
  title,
}) => {
  return (
    <Box sx={{ margin: "auto", width: "fit-content" }}>
      <Box
        sx={{
          background: "#FFFFFF",
          borderRadius: "0px",
          padding: "10px",
          marginX: { xs: "5px", sm: "10px", md: "15px" },
          marginTop: { xs: "10px", sm: "0px" },
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          height: "100%",
          textAlign: "center",
          maxWidth: "450px",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        {/* Quote */}
        <Typography
          sx={{
            color: "#9A9A9A",
            fontSize: localFontSize.p4,
          }}
        >
          {quote}
        </Typography>

        {/* Customer Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          {/* Profile Picture */}
          <Box
            sx={{
              width: { xs: "60px", md: "70px" },
              height: { xs: "60px", md: "70px" },
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src={image}
              alt={name}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>

          {/* Name and Title */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Typography
              sx={{
                color: "#1A1A1A",
                fontSize: localFontSize.p1,
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                color: "#074592",
                fontSize: localFontSize.p4,
              }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// Testimonials data
const testimonialsData = [
  {
    image: pngs.customer1,
    quote:
      "The team was incredibly supportive and professional throughout my case. They explained every step clearly and achieved a result better than I expected. Truly grateful for their dedication.",
    name: "Sarah Thompson",
    title: "Small Business Owner",
  },
  {
    image: pngs.customer2,
    quote:
      "Their lawyers handled my immigration appeal with care and precision. I felt confident knowing my case was in experienced hands. I highly recommend their services.",
    name: "James Patel",
    title: "Software Engineer",
  },
  {
    image: pngs.customer3,
    quote:
      "Exceptional service from start to finish. They genuinely cared about my situation and fought hard to protect my rights. I wouldn't hesitate to work with them again.",
    name: "Emily Carter",
    title: "Marketing Manager",
  },
];

export default function WhatOurCustomersSay() {
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
          <Box sx={{ maxWidth: "700px" }}>
            <Typography
              sx={{
                color: "#1A1A1A",
                fontSize: localFontSize.h2,
                fontWeight: "600",
                fontFamily: "'PlayfairDisplay', serif !important",
                marginBottom: { xs: "12px", md: "16px" },
                textTransform: "capitalize",
              }}
            >
              what our clients say
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
          {testimonialsData.map((testimonial, index) => (
            <Box sx={{}} key={index}>
              <TestimonialCard
                image={testimonial.image}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
