"use client";
import React, { memo } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { globalFontSize } from "@/app/utils/themes";
import Image from "next/image";
import pngs from "@/_assets/webp";

function CommitedToJustice() {
  return (
    <Box
      sx={{
        background: "#ffffff",
        padding: {
          xs: "25px 20px",
          sm: "50px 30px",
          md: "75px 50px",
          lg: "100px 100px",
        },
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          rowGap: "30px",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
        // spacing={3}
      >
        <Grid item xs={12} md={5.8}>
          <Box
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              maxWidth: "600px",
              width: "100%",
              height: "100%",
            }}
          >
            <Box sx={{ overflow: "hidden" }}>
              <Box
                sx={{
                  transition: "all 0.25s ease-in-out",
                  height: "100%",
                  width: "100%",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  src={pngs.CommitedToJustice}
                  alt="commitedToJustice"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={5.8}>
          <Box
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              maxWidth: "600px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                fontSize: globalFontSize.h2,
                color: "#565656",
                fontWeight: "600",
              }}
            >
              Committed to Justice, Dedicated to You
            </Typography>
            <Typography
              sx={{
                fontSize: globalFontSize.p2,
                color: "#00000080",
                paddingTop: { xs: "15px", md: "30px" },
              }}
            >
              {` At Conquest Law we aim to provide first class legal services to
              our clients, both individuals and businesses, at competitive
              rates. We will do whatever it takes in order to achieve our
              clients’ desired outcome.`}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default memo(CommitedToJustice);
