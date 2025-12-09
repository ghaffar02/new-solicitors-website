"use client";
import React, { useState, memo } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import {
  globalFontSize,
  localFontSize,
  sectionPadding,
} from "@/app/utils/themes";

function WhatWeOffer() {
  const [selectedTab, setSelectedTab] = useState("personal");

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newTab: string | null
  ) => {
    if (newTab !== null) {
      setSelectedTab(newTab);
    }
  };

  return (
    <Box
      sx={{
        background: "#ffffff",
        padding: sectionPadding,
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "1440px", xxl: "1536px" },
          width: "100%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <ToggleButtonGroup
          // data-aos="zoom-in"
          // data-aos-duration="500"
          value={selectedTab}
          exclusive
          onChange={handleChange}
          sx={{
            display: "inline-flex",
            border: "none",
            gap: "10px",
          }}
        >
          <ToggleButton
            value="personal"
            sx={{
              fontSize: localFontSize.p3,
              fontWeight: "500",
              padding: "10px 20px",
              borderRadius: "0px !important",
              textTransform: "none",
              transition: "all 0.3s ease-in-out",
              border: "none",
              "&.Mui-selected": {
                backgroundColor: "#074592 !important",
                color: "#ffffff !important",
              },
              "&:not(.Mui-selected)": {
                backgroundColor: "transparent !important",
                color: "#000 !important",
              },
              "&:hover": {
                backgroundColor: "#074592 !important",
                color: "#ffffff !important",
              },
            }}
          >
            Personal
          </ToggleButton>

          <ToggleButton
            value="business"
            sx={{
              fontSize: localFontSize.p3,
              fontWeight: "500",
              padding: "10px 20px",
              borderRadius: "0px !important",
              border: "none",
              textTransform: "none",
              transition: "all 0.3s ease-in-out",
              "&.Mui-selected": {
                backgroundColor: "#074592 !important",
                color: "#ffffff !important",
              },
              "&:not(.Mui-selected)": {
                backgroundColor: "transparent !important",
                color: "#000 !important",
              },
              "&:hover": {
                backgroundColor: "#074592 !important",
                color: "#ffffff !important",
              },
            }}
          >
            Business
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Tab Content */}
        <Box sx={{ marginTop: "30px" }}>
          {selectedTab === "personal" ? (
            <Typography
              sx={{ fontSize: "20px", color: "#074592", fontWeight: 500 }}
            >
              {/* <LegalServicesTabsComponent
                image={pngs.LegalServicesTab1}
                cardsData={personalTabCardData}
              /> */}
            </Typography>
          ) : (
            <Typography
              sx={{ fontSize: "20px", color: "#074592", fontWeight: 500 }}
            >
              {/* <LegalServicesTabsComponent
                reverseOrder={true}
                image={pngs.LegalServicesTab2}
                cardsData={BusinessTabCardData}
              /> */}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default memo(WhatWeOffer);
