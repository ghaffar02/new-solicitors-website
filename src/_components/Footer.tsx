"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import svgs from "@/_assets/svgs";
import { localFontSize, sectionPadding } from "@/app/utils/themes";
import { useRouter } from "next/navigation";
import FooterMobile from "./FooterMobile";

export default function Footer() {
  const router = useRouter();

  const servicesLinks = [
    { label: "Business Law", path: "/practice-area/business-law" },
    { label: "Criminal", path: "/practice-area/criminal-law" },
    { label: "Family Law", path: "/practice-area/family-law" },
    { label: "Employment Law", path: "/practice-area/employment-law" },
    { label: "Commercial Law", path: "/practice-area/commercial-law" },
  ];

  const pageLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Practice Areas", path: "/practice-area" },
    { label: "News", path: "/news" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const linksLinks = [
    { label: "Cookies", path: "/cookies" },
    { label: "Privacy Policy", path: "/privacy-policy" },
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
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            margin: "auto",
          }}
        >
          {/* Main Footer Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: "40px", md: "60px", lg: "80px", xl: "120px" },
              marginBottom: { xs: "40px", md: "60px" },
            }}
          >
            {/* Left Section - Logo, Mission, Social Media */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: "20px", md: "30px", lg: "40px" },
                alignItems: "center",
                maxWidth: "280px",
                textAlign: "center",
                // flex: { md: "0 0 30%" },
              }}
            >
              {/* Logo */}
              <Box sx={{ width: { xs: "120px", md: "150px", lg: "170px" } }}>
                <Image
                  src={svgs.logoBlack}
                  alt="logoBlack"
                  style={{ height: "100%", width: "100%" }}
                />
              </Box>

              {/* Mission Statement */}
              <Typography
                sx={{
                  color: "#9A9A9A",
                  fontSize: localFontSize.p4,
                  lineHeight: "1.6",
                  maxWidth: "400px",
                }}
              >
                Conquest Law Solicitors delivers trusted, results-driven legal
                representation with integrity and excellence.
              </Typography>

              {/* Social Media Icons */}
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  "& > *": {
                    cursor: "pointer",
                    width: { xs: "25px", md: "28px", xl: "30px" },
                    height: { xs: "25px", md: "28px", xl: "30px" },
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

            {/* Middle Section - Navigation Links */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column" },
                gap: { xs: "30px", sm: "40px", md: "60px" },
                flex: { md: "1 1 auto" },
              }}
            >
              {/* Services Column */}
              <Box>
                <Typography
                  sx={{
                    color: "#074592",
                    fontSize: localFontSize.p1,
                    fontWeight: "600",
                    marginBottom: { xs: "12px", md: "16px" },
                  }}
                >
                  Services
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: { xs: "20px", md: "30px" },
                  }}
                >
                  {servicesLinks.map((link, index) => (
                    <Typography
                      key={index}
                      onClick={() => router.push(link.path)}
                      sx={{
                        color: "#9A9A9A",
                        fontSize: localFontSize.p3,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        "&:hover": {
                          color: "#074592",
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Page Column */}
              <Box>
                <Typography
                  sx={{
                    color: "#074592",
                    fontSize: localFontSize.p1,
                    fontWeight: "600",
                    marginBottom: { xs: "12px", md: "16px" },
                  }}
                >
                  Page
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: { xs: "20px", md: "30px" },
                  }}
                >
                  {pageLinks.map((link, index) => (
                    <Typography
                      key={index}
                      onClick={() => router.push(link.path)}
                      sx={{
                        color: "#9A9A9A",
                        fontSize: localFontSize.p3,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        "&:hover": {
                          color: "#074592",
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Links Column */}
              <Box>
                <Typography
                  sx={{
                    color: "#074592",
                    fontSize: localFontSize.p1,
                    fontWeight: "600",
                    marginBottom: { xs: "12px", md: "16px" },
                  }}
                >
                  Links
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: { xs: "20px", md: "30px" },
                  }}
                >
                  {linksLinks.map((link, index) => (
                    <Typography
                      key={index}
                      onClick={() => router.push(link.path)}
                      sx={{
                        color: "#9A9A9A",
                        fontSize: localFontSize.p3,
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        "&:hover": {
                          color: "#074592",
                        },
                      }}
                    >
                      {link.label}
                    </Typography>
                  ))}
                </Box>
              </Box>

              {/* Right Section - Contact Us */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: { md: "0 0 25%" },
                }}
              >
                <Typography
                  sx={{
                    color: "#074592",
                    fontSize: localFontSize.p1,
                    fontWeight: "600",
                    marginBottom: { xs: "12px", md: "16px" },
                  }}
                >
                  Contact Us
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: { xs: "20px", md: "30px" },
                    justifyContent: "space-between",
                  }}
                >
                  {/* Phone */}
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
                    <Typography
                      sx={{
                        color: "#9A9A9A",
                        fontSize: localFontSize.p3,
                      }}
                    >
                      +22 7272 8282
                    </Typography>
                  </Box>

                  {/* Address */}
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
                    <Box>
                      <Typography
                        sx={{
                          color: "#9A9A9A",
                          fontSize: localFontSize.p3,
                          marginBottom: "4px",
                        }}
                      >
                        139 Wellgate, Rotherham, S60 2NN
                      </Typography>
                      <Typography
                        sx={{
                          color: "#9A9A9A",
                          fontSize: localFontSize.p3,
                        }}
                      >
                        2 Milton Avenue, London, E6 1BQ
                      </Typography>
                    </Box>
                  </Box>

                  {/* Email */}
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
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Horizontal Line */}
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#1A1A1A",
              marginY: { xs: "20px", md: "40px" },
            }}
          />

          {/* Copyright */}
          <Typography
            sx={{
              textAlign: "center",
              fontSize: localFontSize.p3,
              color: "#9A9A9A",
              fontWeight: "400",
            }}
          >
            Copyright © 2025 Conquest Law Solicitors. All Rights Reserved.{" "}
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
      </Box>
      <FooterMobile />
    </>
  );
}
