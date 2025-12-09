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
        gap: "20px",
        padding: { xs: "10px", xxl: "30px" },
        justifyContent: "flex-start",
        alignItems: "center",
        bgcolor: "#074592",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          height: { xs: "30px", md: "50px" },
          width: { xs: "30px", md: "50px" },
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
      <Box>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: globalFontSize.p1,
            fontWeight: "500",
          }}
        >
          {title}
        </Typography>
        {Array.isArray(subtitle) ? (
          <Box component="ul" sx={{ paddingLeft: "20px", margin: 0 }}>
            {subtitle.map((item, index) => (
              <Typography
                key={index}
                component="li"
                sx={{
                  color: "#FFFFFF80",
                  fontSize: globalFontSize.p2, // This will now work with breakpoints
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
              color: "#FFFFFF80",
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
