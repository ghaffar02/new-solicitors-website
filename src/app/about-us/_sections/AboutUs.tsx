import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import { globalFontSize } from "@/app/utils/themes";

function AboutSection() {
  return (
    <Box
      sx={{
        background: "#efefef",
        borderBottomLeftRadius: { xs: "40px", md: "80px" },
        borderBottomRightRadius: { xs: "40px", md: "80px" },
        padding: {
          xs: "25px 20px",
          sm: "50px 30px",
          md: "75px 50px",
          lg: "100px 100px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          maxWidth: { xs: "950px", lg: "1000px", xxl: "1300px" },
          width: "100%",
          margin: "auto",
        }}
      >
        <Box
          data-aos="fade-right"
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "600px", md: "450px", lg: "528px", xxl: "560px" },
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: globalFontSize.p1,
              color: "#074592",
              fontWeight: "500",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontSize: globalFontSize.h2,
              color: "#565656",
              fontWeight: "700",
            }}
          >
            Decades Of Legal Excellence - Fighting For Justice, Winning For
            Clients
          </Typography>
        </Box>
        <Box
          data-aos="fade-left"
          data-aos-duration="500"
          sx={{
            maxWidth: { xs: "600px", md: "400px", lg: "560px", xxl: "600px" },
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: globalFontSize.p2, color: "#777777" }}>
            With a proven track record of success, Conquest Law Solicitors has
            been delivering exceptional legal solutions for individuals,
            businesses, and families. Our highly skilled attorneys bring decades
            of expertise across multiple legal fields, from business law and
            real estate disputes to criminal defense and personal injury claims.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default memo(AboutSection);
