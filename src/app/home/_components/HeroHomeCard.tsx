import React from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { globalFontSize } from "@/app/utils/themes";

interface HeroHomeCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const HeroHomeCard: React.FC<HeroHomeCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: "20px", md: "40px" },
        padding: { xs: "20px", md: "20px 30px" },
        backgroundColor: "#074592",
        borderRadius: "30px",
        alignItems: "center",
        marginY: "15px",
        height: {
          xs: "130px",
          sm: "150px",
          lg: "180px",
          xl: "200px",
        },
      }}
    >
      <Box sx={{ maxWidth: "100px", height: "auto", width: "100%" }}>
        <Image
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: globalFontSize.h4,
            fontWeight: "500",
            // elipsis there
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF80",
            fontSize: globalFontSize.p2,
            // elipsis there
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroHomeCard;
