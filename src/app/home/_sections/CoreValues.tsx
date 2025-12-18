"use client";
import React, { memo, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import { localFontSize } from "@/app/utils/themes";

const coreValuesData = [
  {
    icon: svgs.expertLawyers,
    lightIcon: svgs.expertLawyers,

    alt: "handshake",
    title: "expert lawyers",
    description:
      "Our team brings years of experience, expertise, and dedication to every case.",
  },
  {
    icon: svgs.allTimeSupport,
    lightIcon: svgs.allTimeSupport,
    alt: "clipboard",
    title: "all time support",
    description:
      "We’re here for you whenever you need us — offering reliable legal support.",
  },
  {
    icon: svgs.successRate,
    lightIcon: svgs.successRate,
    alt: "searchfile",
    title: "success rate",
    description:
      "Our firm has a proven track record of achieving successful outcomes for our clients.",
  },
  {
    icon: svgs.clientTrust,
    lightIcon: svgs.clientTrust,
    alt: "searchfile",
    title: "Client’s trust",
    description:
      "We build lasting relationships through integrity, transparency, and results.",
  },
];

function CoreValues() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        maxWidth: "1150px",
        width: "100%",
        background: "#074592",
        borderRadius: { md: "30px" },
        padding: {
          xs: "40px 16px",
          sm: "60px 30px",
          md: "40px",
        },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "initial" },
        justifyContent: { xs: "initial", md: "center" },
        gap: { xs: "40px", sm: "60px", md: "10px" },
        boxShadow: "0px 0px 75px rgba(86, 86, 86, 0.3)",
      }}
    >
      {coreValuesData.map((value, index) => (
        <Box
          key={index}
          sx={{
            maxWidth: { xs: "270px" },
            width: "100%",
            padding: { lg: "20px" },
            textAlign: "center",
            borderRadius: "30px",
            transition: "all .4s ease-in-out",
            backgroundColor: hoveredIndex === index ? "#084592" : "transparent",
            boxShadow:
              hoveredIndex === index ? "0px 4px 20px 0px #07459280" : "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Image changes on hover */}
          <Image
            src={hoveredIndex === index ? value.lightIcon : value.icon}
            alt={value.alt}
            height={40}
            width={40}
            style={{
              transition: "opacity 0.3s ease-in-out",
              marginBottom: "20px",
            }}
          />
          {/* Title text changes color on hover */}
          <Typography
            sx={{
              fontSize: localFontSize.h3,
              color: hoveredIndex === index ? "#ffffff" : "#fff",
              fontWeight: "500",
              transition: "color 0.3s ease-in-out",
              textTransform: "capitalize",
              fontFamily: "'PlayfairDisplay', serif !important",
              maxWidth: "180px",
            }}
          >
            {value.title}
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.p3,
              color: hoveredIndex === index ? "#FFFFFF80" : "#FFFFFF80",
              fontWeight: "400",
              transition: "color 0.3s ease-in-out",
            }}
          >
            {value.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default memo(CoreValues);
