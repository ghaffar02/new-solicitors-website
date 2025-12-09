"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import svgs from "@/_assets/svgs";
import { globalFontSize } from "@/app/utils/themes";
import { useRouter, usePathname } from "next/navigation";
export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About us", path: "/about-us" },
    { label: "Practice areas", path: "/immigration-law" },
    { label: "News", path: "/news" },
    { label: "Contact", path: "/contact-us" },
    { label: "Privacy Policy", path: "/privacy-policy" },
  ];
  const socialLinks = [
    {
      href: "https://conquestlaw.co.uk/#",
      icon: svgs.LinkedIn,
      alt: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/ConquestLawSolicitors/",
      icon: svgs.Facebook,
      alt: "Facebook",
    },
    {
      href: "https://www.instagram.com/conquestlawsolicitors/",
      icon: svgs.Instagram,
      alt: "Instagram",
    },
  ];

  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "40px 30px",
            xl: "60px 30px",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              maxWidth: "1440px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
            }}
          >
            <Box
              data-aos="fade-right"
              data-aos-duration="500"
              sx={{ width: { xs: "100px", md: "128px" } }}
            >
              <Image
                src={svgs.Logo}
                alt="logo"
                style={{ height: "100%", width: "100%" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#074592" }}>
        <Box
          sx={{
            padding: "40px 0px",
            maxWidth: "1440px",
            width: "100%",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "668px", xxl: "1000px" },
              width: "100%",
              margin: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: { xs: "center", md: "space-between" },
                gap: { xs: "30px", md: "0px" },
                "& > *": {
                  cursor: "pointer",
                },
              }}
            >
              {navLinks.map((link, index) => (
                <Typography
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  key={index}
                  onClick={() => router.push(link.path)}
                  sx={{
                    fontSize: globalFontSize.p2,
                    color: pathname === link.path ? "#FFFFFF" : "#ffffff80",
                    fontWeight: "400",
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "30px",
                margin: "50px 0px 30px",
                "& > *": {
                  cursor: "pointer",
                  height: { xs: "35px", xxl: "60px" },
                  width: { xs: "35px", xxl: "60px" },
                },
              }}
            >
              {socialLinks.map((link, index) => (
                <Link
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  key={index}
                  href={link.href}
                >
                  <Image
                    style={{ height: "100%", width: "100%" }}
                    src={link.icon}
                    alt={link.alt}
                  />
                </Link>
              ))}
            </Box>

            {/* ✅ SRA Digital Badge - Fixed height and clean */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 4,
              }}
            >
              <Box
                sx={{
                  width: "275px",
                  height: "163px", // ✅ fixed height
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://cdn.yoshki.com/iframe/55849r.html"
                  title="SRA Badge"
                  style={{
                    border: 0,
                    margin: 0,
                    padding: 0,
                    backgroundColor: "transparent",
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                />
              </Box>
            </Box>

            {/* Copyright */}
            <Typography
              sx={{
                textAlign: "center",
                fontSize: globalFontSize.p4,
                color: "#fff",
                fontWeight: "400",
                mt: 4,
              }}
            >
              &copy; Copyright 2025 - Conquest Law Solicitors{" "}
              <a
                href="https://www.qashnova.com/"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#ffffff80",
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  marginLeft: "8px",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                }}
              >
                Powered by QashNova.
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
