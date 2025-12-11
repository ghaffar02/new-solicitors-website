"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import svgs from "@/_assets/svgs";
import {
  localFontSize,
  sectionPadding,
  sectionPaddingX,
} from "@/app/utils/themes";
import { useRouter } from "next/navigation";

export default function FooterMobile() {
  const router = useRouter();

  const servicesLinks = [
    { label: "Home", path: "/" },
    { label: "Business Law", path: "/practice-area/business-law" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "About Us", path: "/about-us" },
    { label: "Criminal", path: "/practice-area/criminal-law" },
    { label: "Cookies", path: "/cookies" },
    { label: "Practice Areas", path: "/practice-area" },
    { label: "Family Law", path: "/practice-area/family-law" },
    { label: "News", path: "/news" },
    { label: "Employment Law", path: "/practice-area/employment-law" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Commercial Law", path: "/practice-area/commercial-law" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/ConquestLawSolicitors/",
      icon: svgs.facebook,
      alt: "Facebook",
    },
    {
      href: "https://conquestlaw.co.uk/#",
      icon: svgs.linkedin,
      alt: "LinkedIn",
    },
    {
      href: "https://twitter.com",
      icon: svgs.twitter,
      alt: "Twitter",
    },
    {
      href: "https://www.instagram.com/conquestlawsolicitors/",
      icon: svgs.instagram,
      alt: "Instagram",
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#EFEFEF",
          padding: sectionPadding,
          paddingBottom: { xs: "20px !important", md: "40px !important" },
          display: { xs: "block", md: "block", lg: "none" },
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            margin: "auto",
          }}
        >
          {/* Logo - Top Center */}
          <Box
            sx={{
              width: { xs: "120px", md: "150px" },
              margin: "auto",
              marginBottom: { xs: "30px", md: "40px" },
            }}
          >
            <Image
              src={svgs.logoBlack}
              alt="logoBlack"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#1A1A1A",
              marginBottom: { xs: "30px", md: "40px" },
              maxWidth: "250px",
              margin: "auto",
            }}
          />

          {/* Follow Us Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "center", sm: "center" },
              justifyContent: "space-between",
              gap: { xs: "16px", sm: "20px" },
              marginBottom: { xs: "30px", md: "40px" },
              maxWidth: "360px",
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                color: "#1A1A1A",
                fontSize: localFontSize.h3,
                fontWeight: "500",
                fontFamily: "Playfair Display !important",
              }}
            >
              Follow Us
            </Typography>

            {/* Social Media Icons */}
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                "& > *": {
                  cursor: "pointer",
                  width: "26px",
                  height: "26px",
                },
              }}
            >
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} target="_blank">
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    style={{ height: "100%", width: "100%" }}
                  />
                </Link>
              ))}
            </Box>
          </Box>

          {/* Horizontal Line */}
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#1A1A1A",
              marginBottom: { xs: "30px", md: "40px" },
              maxWidth: "250px",
              margin: "auto",
            }}
          />

          {/* Main Footer Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { xs: "30px", md: "40px" },
              marginBottom: { xs: "30px", md: "40px" },
              maxWidth: "360px",
              margin: "auto",
            }}
          >
            {/* Services Column */}
            <Box>
              <Typography
                sx={{
                  marginBottom: { xs: "12px", md: "16px" },
                  color: "#1A1A1A",
                  fontSize: localFontSize.h3,
                  fontWeight: "500",
                  fontFamily: "Playfair Display !important",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Services
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  // gap: { xs: "12px 20px", md: "12px 24px" },
                  justifyContent: "space-between",
                }}
              >
                {servicesLinks.map((link, index) => (
                  <Typography
                    key={index}
                    onClick={() => router.push(link.path)}
                    sx={{
                      color: "#9A9A9A",
                      fontSize: localFontSize.p4,
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        color: "#074592",
                      },
                      width: "calc(33.33% - 28px)",
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Horizontal Line */}
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#1A1A1A",
              marginBottom: { xs: "30px", md: "40px" },
              maxWidth: "250px",
              margin: "auto",
            }}
          />

          {/* Contact Us Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: { xs: "20px", md: "24px" },
              marginBottom: { xs: "30px", md: "40px" },
              maxWidth: "250px",
              margin: "auto",
            }}
          >
            <Typography
              sx={{
                color: "#1A1A1A",
                fontSize: localFontSize.h3,
                fontWeight: "500",
                fontFamily: "Playfair Display !important",
                width: "100%",
                textAlign: "center",
              }}
            >
              Contact Us
            </Typography>

            {/* Email */}
            <Box
              sx={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: "20px", md: "24px" },
                  height: { xs: "20px", md: "24px" },
                  flexShrink: 0,
                }}
              >
                <Image
                  src={svgs.emailBlue}
                  alt="Email"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
              <Typography
                sx={{
                  color: "#9A9A9A",
                  fontSize: localFontSize.p3,
                }}
              >
                info@conquestlaw.co.uk
              </Typography>
            </Box>

            {/* Phone Numbers */}
            <Box
              sx={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: { xs: "20px", md: "24px" },
                  height: { xs: "20px", md: "24px" },
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                <Image
                  src={svgs.phoneBlue}
                  alt="Phone"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
              <Box component="ul" sx={{ paddingLeft: "20px", margin: 0 }}>
                <Typography
                  component="li"
                  sx={{
                    color: "#9A9A9A",
                    fontSize: localFontSize.p3,
                    listStyle: "disc",
                    marginBottom: "4px",
                  }}
                >
                  0170 945 8786
                </Typography>
                <Typography
                  component="li"
                  sx={{
                    color: "#9A9A9A",
                    fontSize: localFontSize.p3,
                    listStyle: "disc",
                  }}
                >
                  0208 226 5786
                </Typography>
              </Box>
            </Box>

            {/* Addresses */}
            <Box
              sx={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  width: { xs: "20px", md: "24px" },
                  height: { xs: "20px", md: "24px" },
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                <Image
                  src={svgs.locationBlue}
                  alt="Location"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>
              <Box component="ul" sx={{ paddingLeft: "20px", margin: 0 }}>
                <Typography
                  component="li"
                  sx={{
                    color: "#9A9A9A",
                    fontSize: localFontSize.p3,
                    listStyle: "disc",
                    marginBottom: "4px",
                  }}
                >
                  139 Wellgate, Rotherham, S60 2NN
                </Typography>
                <Typography
                  component="li"
                  sx={{
                    color: "#9A9A9A",
                    fontSize: localFontSize.p3,
                    listStyle: "disc",
                  }}
                >
                  2 Milton Avenue, London, E6 1BQ
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* Horizontal Line */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#074592",
            marginBottom: { xs: "20px", md: "24px" },
          }}
        />

        {/* Copyright */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: localFontSize.p3,
            color: "#9A9A9A",
            fontWeight: "400",
            paddingX: sectionPaddingX,
          }}
        >
          Copyright © 2025 Conquest Law Solicitors. All Rights Reserved.
          <Link
            href="https://www.qashnova.com/"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#074592",
              fontWeight: "500",
            }}
          >
            Powered By Qashnova
          </Link>
        </Typography>
      </Box>
    </>
  );
}
