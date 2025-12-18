"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { localFontSize } from "@/app/utils/themes";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

// Card props interface
export interface InsightCardProps {
  image: StaticImageData;
  heading: string;
  description: string;
  pathname?: string;
}

// InsightCard component
const InsightCard: React.FC<InsightCardProps> = ({
  image,
  heading,
  description,
  pathname,
}) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: { xs: "540px", md: "560px", lg: "586px" },
        marginX: { xs: "5px", sm: "10px", md: "15px" },
        marginTop: { xs: "10px", sm: "0px" },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          width: "100%",
          height: "300px",
        }}
      >
        <Image
          src={image}
          alt={heading}
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
      </Box>

      {/* Content Overlay */}
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            color: "#1A1A1A",
            fontSize: localFontSize.h3,
            fontWeight: "600",
            fontFamily: "'PlayfairDisplay', serif !important",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            color: "#9A9A9A",
            fontSize: localFontSize.p4,
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
        {/* Read More Button */}
        <Typography
          onClick={() => {
            if (pathname) {
              // Remove leading slash if present, then construct /news/[pathname]
              const slug = pathname.startsWith("/")
                ? pathname.slice(1)
                : pathname;
              router.push(`/${slug}`);
            }
          }}
          component="span"
          sx={{
            color: "#074592",
            fontSize: localFontSize.p4,
            fontWeight: "500",
            borderBottom: "1px solid #074592",
            width: "fit-content",
            cursor: pathname ? "pointer" : "default",
            marginTop: "auto",
            transition: "opacity 0.2s ease",
            pointerEvents: pathname ? "auto" : "none",
            "&:hover": {
              opacity: pathname ? 0.7 : 1,
            },
          }}
        >
          Read More
        </Typography>
      </Box>
    </Box>
  );
};

export default InsightCard;
