"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { globalFontSize } from "@/app/utils/themes";
import Image, { StaticImageData } from "next/image";

interface ContactInfoBoxProps {
  icon: StaticImageData;
  title: string;
  subtitle: string | string[];
}

export function ContactInfoBox({ icon, title, subtitle }: ContactInfoBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        alignItems: "flex-start",
        justifyContent: "space-between !important",
      }}
    >
      {/* Blue Square Icon */}
      <Box
        sx={{
          height: { xs: "40px", md: "50px" },
          width: { xs: "40px", md: "50px" },
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
          src={icon}
          alt={title}
        />
      </Box>

      {/* Content */}
      <Box>
        {Array.isArray(subtitle) ? (
          <Box component="ul" sx={{ paddingLeft: "20px", margin: 0 }}>
            {subtitle.map((item, index) => (
              <Typography
                key={index}
                component="li"
                sx={{
                  color: "#9A9A9A",
                  fontSize: globalFontSize.p2,
                  listStyle: "disc",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        ) : (
          <Typography
            sx={{
              color: "#9A9A9A",
              fontSize: globalFontSize.p2,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
