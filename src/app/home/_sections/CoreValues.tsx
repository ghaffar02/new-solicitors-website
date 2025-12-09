"use client";
import React, { memo, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import { globalFontSize } from "@/app/utils/themes";

const coreValuesData = [
  {
    icon: svgs.Handshake,
    lightIcon: svgs.HandshakeWhite,
    alt: "handshake",
    title: "We Value Our Clients",
    description:
      "We understand the unique challenges of each case and find flexible solutions to deal with them, ensuring the best possible outcomes for our clients.",
  },
  {
    icon: svgs.Clipboard,
    lightIcon: svgs.ClipboardWhite,
    alt: "clipboard",
    title: "Result-Driven Approach",
    description:
      "We tailor solutions that suit our client’s needs and use our deep industry knowledge and result-driven approach to deliver desired results.",
  },
  {
    icon: svgs.Searchfile,
    lightIcon: svgs.SearchfileWhite,
    alt: "searchfile",
    title: "Track Record",
    description:
      "We are proud to maintain an impeccable track record continuously striving to provide the best legal practices with accuracy, expertise, and efficiency.",
  },
];

function CoreValues() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      sx={{
        background: "#5656561A",
        padding: {
          xs: "25px 20px",
          sm: "50px 30px",
          md: "75px 50px",
          lg: "100px 100px",
        },
        borderBottomLeftRadius: "80px",
        borderBottomRightRadius: "80px",
      }}
    >
      <Box
        data-aos="zoom-in"
        data-aos-duration="500"
        sx={{
          maxWidth: { sm: "600px", md: "1440px", xxl: "1536px" },
          width: "100%",
          margin: "auto",
          background: "#fff",
          borderRadius: "50px",
          padding: {
            xs: "30px 20px",
            sm: "50px 30px",
            md: "75px 50px",
            lg: "50px 60px",
          },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "initial" },
          justifyContent: { xs: "initial", md: "center" },
          gap: { xs: "20px", sm: "40px", md: "55px" },
          boxShadow: "0px 0px 75px rgba(86, 86, 86, 0.3)",
        }}
      >
        {coreValuesData.map((value, index) => (
          <Box
            key={index}
            sx={{
              maxWidth: { xs: "339px", xxl: "380px" },
              width: "100%",
              padding: "25px 20px",
              textAlign: "center",
              borderRadius: "30px",
              transition: "all .4s ease-in-out",
              backgroundColor:
                hoveredIndex === index ? "#084592" : "transparent",
              boxShadow:
                hoveredIndex === index ? "0px 4px 20px 0px #07459280" : "none",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image changes on hover */}
            <Image
              src={hoveredIndex === index ? value.lightIcon : value.icon}
              alt={value.alt}
              height={64}
              width={64}
              style={{ transition: "opacity 0.3s ease-in-out" }}
            />
            {/* Title text changes color on hover */}
            <Typography
              sx={{
                fontSize: globalFontSize.h3,
                color: hoveredIndex === index ? "#ffffff" : "#074592",
                fontWeight: "500",
                transition: "color 0.3s ease-in-out",
              }}
            >
              {value.title}
            </Typography>
            <Typography
              sx={{
                fontSize: globalFontSize.p2,
                color: hoveredIndex === index ? "#ffffff80" : "#00000080",
                fontWeight: "400",
                transition: "color 0.3s ease-in-out",
              }}
            >
              {value.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default memo(CoreValues);
