"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { localFontSize } from "@/app/utils/themes";
import svgs from "@/_assets/svgs";
import ContactUsForm from "./ContactUsForm";
import { StaticImageData } from "next/image";
import Image from "next/image";

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
        // background: "#5656561A",
        background: "#fff",
        padding: {
          xs: "40px 20px",
          sm: "60px 30px",
          md: "80px 50px",
          lg: "100px 100px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
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
                    fontSize: localFontSize.h2,
                    fontWeight: "700",
                  }}
                >
                  Get the Legal Support You Need
                </Typography>
                <Typography
                  sx={{
                    color: "#00000080",
                    fontSize: localFontSize.p2,
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

interface ContactInfoBoxProps {
  icon: StaticImageData;
  title: string;
  subtitle: string | string[];
}

export function ContactInfoBox({ icon, title, subtitle }: ContactInfoBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        padding: { xs: "10px", xxl: "30px" },
        justifyContent: "flex-start",
        alignItems: "center",
        bgcolor: "#074592",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          height: { xs: "30px", md: "50px" },
          width: { xs: "30px", md: "50px" },
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
          src={icon}
          alt={title}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: localFontSize.p1,
            fontWeight: "500",
          }}
        >
          {title}
        </Typography>
        {Array.isArray(subtitle) ? (
          <Box component="ul" sx={{ paddingLeft: "20px", margin: 0 }}>
            {subtitle.map((item, index) => (
              <Typography
                key={index}
                component="li"
                sx={{
                  color: "#FFFFFF80",
                  fontSize: localFontSize.p2,
                  listStyle: "disc",
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        ) : (
          <Typography
            sx={{
              color: "#FFFFFF80",
              fontSize: localFontSize.p2,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
