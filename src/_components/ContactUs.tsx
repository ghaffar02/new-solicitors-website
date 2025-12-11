"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { sectionPadding, localFontSize } from "@/app/utils/themes";
import svgs from "@/_assets/svgs";
import ContactUsForm from "./ContactUsForm";
import { ContactInfoBox } from "./ContactInfoBox";

export default function ContactUs() {
  const contactInfoData = [
    {
      icon: svgs.phone,
      title: "Phone",
      subtitle: ["01709458786", "0208 226 5786"],
    },
    {
      icon: svgs.email,
      title: "Mail",
      subtitle: "info@conquestlaw.co.uk",
    },
    {
      icon: svgs.location,
      title: "Address",
      subtitle: [
        "139 Wellgate, Rotherham, S60 2NN",
        "2 Milton Avenue, London, E6 1BQ",
      ],
    },
  ];

  return (
    <Box
      sx={{
        background: "#FFFFFF",
        padding: sectionPadding,
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
          // gap: { xs: "40px", md: "60px" },
          "& > :not(:last-child)": {
            marginBottom: {
              xs: "20px",
              sm: "30px",
              md: "50px",
              lg: "60px",
              xl: "80px",
            },
          },
        }}
      >
        {/* Form Section */}
        {/* GET STARTED Label */}
        <Box>
          <Typography
            sx={{
              color: "#9A9A9A",
              fontSize: localFontSize.p4,
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            GET STARTED
          </Typography>

          {/* Main Heading */}
          <Typography
            sx={{
              color: "#1A1A1A",
              fontSize: localFontSize.h2,
              fontWeight: "600",
              fontFamily: "'PlayfairDisplay', serif",
              marginBottom: { xs: "20px", md: "30px" },
              maxWidth: { xs: "330px", sm: "430px", md: "560px" },
            }}
          >
            {` Get In Touch With Us. We're Here To Assist You.`}
          </Typography>
        </Box>

        <Box
          sx={{
            // maxWidth: { xs: "100%", md: "800px" },
            width: "100%",
          }}
        >
          <ContactUsForm />
        </Box>

        {/* Contact Info Footer */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "20px", md: "40px" },
            justifyContent: { md: "center" },
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          {contactInfoData.map((info, index) => (
            <ContactInfoBox
              key={index}
              icon={info.icon}
              title={info.title}
              subtitle={info.subtitle}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
