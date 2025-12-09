import React from "react";
import { Box, Button as MuiButton } from "@mui/material";
import CustomInputField from "@/_components/CustomInputField";
import { globalFontSize } from "@/app/utils/themes";

const formGap = {
  gap: { xs: "20px", md: "30px" },
};

export default function DetailSectionForm() {
  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        display: "flex",
        gap: formGap.gap,
        flexDirection: "column",
        padding: { xs: "20px", md: "40px" },
        borderRadius: "20px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 40px 0px #00000026",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: formGap.gap,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <CustomInputField
          label="Full Name"
          inputLabel="Enter your name"
          inputType="text"
        />
        <CustomInputField
          label="Full Name"
          inputLabel="Enter your name"
          inputType="text"
        />
      </Box>

      <CustomInputField
        label="Full Name"
        inputLabel="Enter your name"
        inputType="text"
        rows={6}
        multiline={true}
      />

      <MuiButton
        sx={{
          backgroundColor: "transparent",
          width: "100%",
          color: "#074592",
          fontSize: globalFontSize.p2,
          border: "2px solid #074592",
          fontWeight: "500",
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          padding: "15px",
          borderRadius: "10px",
        }}
      >
        Submit
      </MuiButton>
    </Box>
  );
}
