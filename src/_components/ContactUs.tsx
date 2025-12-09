"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { globalFontSize } from "@/app/utils/themes";
import svgs from "@/_assets/svgs";
import ContactUsForm from "./ContactUsForm";
import { ContactInfoBox } from "./ContactInfoBox";

export default function ContactUs() {
  const contactInfoData = [
    {
      icon: svgs.Phone,
      title: "Phone",
      subtitle: ["01709458786", "0208 226 5786"],
    },
    {
      icon: svgs.Mail,
      title: "Mail",
      subtitle: "info@conquestlaw.co.uk",
    },
    {
      icon: svgs.Location,
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
        background: "#5656561A",
        padding: {
          xs: "40px 20px",
          sm: "60px 30px",
          md: "80px 50px",
          lg: "100px 100px",
        },
        borderRadius: { xs: "40px", md: "80px" },
        // marginTop: { xxl: "60px" },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "1440px", xxl: "80vw" },
          width: "100%",
          margin: "auto",
        }}
      >
        <Grid sx={{ rowGap: "40px" }} container>
          <Grid
            data-aos="fade-right"
            data-aos-duration="500"
            sx={{
              borderRight: { md: "3px solid #074592" },
              paddingRight: { md: "20px", lg: "35px" },
            }}
            item
            xs={12}
            md={7}
            // xxl={8}
          >
            <ContactUsForm />
          </Grid>
          <Grid
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{
              paddingLeft: { md: "20px", lg: "35px" },
            }}
            item
            xs={12}
            md={5}
            // xxl={4}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "20px", md: "40px" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: { xs: "10px", md: "20px" },
                }}
              >
                <Typography
                  sx={{
                    color: "#565656",
                    fontSize: globalFontSize.h2,
                    fontWeight: "700",
                  }}
                >
                  Get the Legal Support You Need
                </Typography>
                <Typography
                  sx={{
                    color: "#00000080",
                    fontSize: globalFontSize.p2,
                  }}
                >
                  Have legal questions or need expert advice? Our team of
                  experienced solicitors is here to help you.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
