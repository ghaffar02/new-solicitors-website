"use client";
import React from "react";
import { Box, SxProps } from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";

type CustomArrowProps = {
  onClick?: () => void;
  sx?: SxProps;
  src?: string;
};
export default function CustomArrow({
  onClick,
  sx,
  src = svgs.arrowBlue,
}: CustomArrowProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        bottom: { xs: "-47px", md: "-67px", lg: "-85px" },
        cursor: "pointer",
        zIndex: 2,
        height: { xs: "30px", md: "40px" },
        width: { xs: "30px", md: "40px" },
        ...sx,
      }}
    >
      <Image
        src={src}
        style={{
          height: "100%",
          width: "100%",
          opacity: 0.5,
          transition: "opacity 0.2s",
        }}
        alt="arrowRed"
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.6")}
      />
    </Box>
  );
}
