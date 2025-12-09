import React, { memo } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { globalFontSize } from "@/app/utils/themes";
import pngs from "@/_assets/webp";

function MissionSection() {
  return (
    <Box
      sx={{
        padding: {
          xs: "25px 20px",
          sm: "50px 30px",
          md: "75px 50px",
          lg: "100px 100px",
          xl: "100px 0",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          height: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "592px", xxl: "1100px" },
            width: "100%",
            margin: { xs: "0px auto 40px", md: "0px auto 80px" },
            textAlign: "center",
          }}
        >
          <Typography
            // data-aos="zoom-in"
            // data-aos-duration="500"
            sx={{
              fontSize: globalFontSize.p1,
              fontWeight: "500",
              color: "#074592",
            }}
          >
            Our Mission
          </Typography>
          <Typography
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              fontSize: globalFontSize.h2,
              color: "#565656",
              fontWeight: "600",
            }}
          >
            Guiding You Through Legal Challenges with Expertise and Care
          </Typography>
          <Typography
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              fontSize: globalFontSize.p2,
              color: "#808080",
              marginTop: { xs: "20px", md: "40px" },
            }}
          >
            Our mission is to provide clear, strategic, and compassionate legal
            solutions to individuals and businesses alike. At Conquest Law
            Solicitors, we are driven by a passion for justice and a deep
            commitment to our clients&apos; best interests.
          </Typography>
        </Box>
        <Box
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            maxHeight: { xs: "589px", xl: "100%" },
            height: { xs: "600px", md: "100%" },
            // maxWidth: { xs: "1240px", xl: "80vw" },
            width: "100%",
            margin: "auto",
          }}
        >
          {/* <Box sx={{ overflow: "hidden" }}> */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              transition: "all 0.25s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
              overflow: "hidden",
            }}
          >
            <Image
              src={pngs.Mission}
              alt="Mission"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>
          {/* </Box> */}
        </Box>
      </Box>
    </Box>
  );
}

export default memo(MissionSection);
