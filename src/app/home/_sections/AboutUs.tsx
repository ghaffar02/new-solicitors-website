import React, { memo } from "react";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import pngs from "@/_assets/webp";
import svgs from "@/_assets/svgs";

import Button from "@/_components/Button";
import { localFontSize } from "@/app/utils/themes";
function AboutUs() {
  return (
    <Box
      sx={{
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
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "35px", md: "70px" },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "350px", md: "558px", xl: "600px" },
            width: "100%",
            height: { xs: "350px", md: "551px" },
          }}
        >
          <Image
            src={pngs.Suit}
            alt="professional"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Divider
          sx={{
            height: { xs: "3px", sm: "500px", md: "700px" },
            width: { xs: "100%", sm: "3px" },
            background: "#074592",
          }}
        ></Divider>
        <Box
          sx={{
            maxWidth: { xs: "528px", xl: "600px" },
            width: "100%",
            textAlign: { xs: "center", sm: "initial" },
          }}
        >
          <Typography
            sx={{
              fontSize: localFontSize.p1,
              color: "#074592",
              fontWeight: "500",
              fontFamily: "Playfair Display !important",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              color: "#565656",
              fontWeight: "600",
              fontFamily: "Playfair Display !important",
            }}
          >
            Committed to Justice,{" "}
            <span
              style={{
                color: "#074592",
                fontSize: "inherit",
                fontWeight: "inherit",
                fontFamily: "inherit",
              }}
            >
              Dedicated to You
            </span>
          </Typography>
          <Typography
            sx={{
              maxWidth: "494px",
              width: "100%",
              fontSize: localFontSize.p2,
              fontWeight: "400",
              color: "rgba(0,0,0,.5)",
              margin: { xs: "20px auto", sm: "40px 0px" },
            }}
          >
            At Conquest Law we aim to provide first class legal services to our
            clients, both individuals and businesses, at competitive rates. We
            will do whatever it takes in order to achieve our clients’ desired
            outcome.
          </Typography>
          <Button
            sx={{
              backgroundColor: "transparent",
              width: "178px",
              color: "#074592",
              fontSize: localFontSize.p2,
              border: "2px solid #074592",
              fontWeight: "500",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              padding: "15px",
            }}
            text={"Learn More "}
            icon={svgs.BlueArrow}
          ></Button>
        </Box>
      </Box>
    </Box>
  );
}

export default memo(AboutUs);
