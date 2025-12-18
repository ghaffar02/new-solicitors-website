"use client";
import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import svgs from "@/_assets/svgs";
import Image from "next/image";
import { localFontSize, sectionPaddingX } from "@/app/utils/themes";
import { useRouter, usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  const pathname = usePathname();
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  const getBgColor = (route: string) =>
    pathname === route ? "#FFFFFF" : "#074592";

  const pagesData = [
    {
      title: "Home",
      icon: svgs.HomeWhiteIcon,
      whiteIcon: svgs.HomeWhiteIcon,
      path: "/",
      getColor: getBgColor,
    },
    {
      title: "About Us",
      icon: svgs.aboutWhiteIcon,
      whiteIcon: svgs.aboutWhiteIcon,
      path: "/about-us",
      getColor: getBgColor,
    },
    {
      title: "News",
      icon: svgs.newsWhiteIcon,
      whiteIcon: svgs.newsWhiteIcon,
      path: "/news",
      getColor: getBgColor,
    },
    {
      title: "Contact",
      icon: svgs.contactWhiteIcon,
      whiteIcon: svgs.contactWhiteIcon,
      path: "/contact-us",
      getColor: getBgColor,
    },
  ];

  const practiceAreasData = [
    {
      heading: "Practice Areas For Individuals",
      items: [
        {
          label: "Actions Against Public Bodies",
          path: "/practice-area/actions-against-public-bodies",
        },
        {
          label: "Dispute Resolution (Civil)",
          path: "/practice-area/dispute-resolution-civil",
        },
        { label: "Family Law", path: "/practice-area/family-law" },
        {
          label: "Immigration Law",
          path: "/practice-area/immigration-law",
        },
        {
          label: "Employment Law",
          path: "/practice-area/employment-law",
        },
        {
          label: "Criminal Law",
          path: "/practice-area/criminal-law",
        },
        {
          label: "Probate and Estate Administration",
          path: "/practice-area/probate-and-estate-administration",
        },
        {
          label: "Residential Conveyancing",
          path: "/practice-area/residential-conveyancing",
        },
      ],
    },
    {
      heading: "Practice Areas For Businesses",
      items: [
        {
          label: "Business Mergers and Acquisitions",
          path: "/practice-area/business-mergers-and-acquisitions",
        },
        {
          label: "Commercial Law",
          path: "/practice-area/commercial-law",
        },
        {
          label: "Commercial Conveyancing",
          path: "/practice-area/commercial-conveyancing",
        },
        {
          label: "Dispute Resolution (Commercial)",
          path: "/practice-area/dispute-resolution-commercial",
        },
        {
          label: "Shariah Compliant Financing",
          path: "/practice-area/shariah-compliant-financing",
        },
        {
          label: "Succession and Estate Planning",
          path: "/practice-area/succession-and-estate-planning",
        },
      ],
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Box
        sx={{
          position: "fixed",
          top: "0",
          zIndex: "100",
          width: "100%",
          left: "0",
          backgroundColor: "rgba(26, 26, 26, 0.4)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            paddingX: sectionPaddingX,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "row-reverse", md: "row" },
              height: { xs: "80px", md: "90px" },

              maxWidth: "1440px",
              margin: "auto",
              width: "100%",
              borderBottom: { md: "1px solid #FFFFFF" },
            }}
          >
            <Box
              onClick={() => toggleDrawer(true)}
              sx={{
                transform: {
                  xs: "rotate(180deg)",
                  md: "none",
                },
              }}
            >
              <Image
                style={{ cursor: "pointer", height: "20px", width: "22px" }}
                src={svgs.Hamburger}
                alt="Hamburger"
              />
            </Box>
            <Box
              onClick={() => router.push("/")}
              sx={{
                height: "auto",
                width: "50px",
                display: { xs: "flex", md: "none" },
                alignItems: "center",
              }}
            >
              <Image
                style={{ cursor: "pointer", height: "100%", width: "100%" }}
                src={svgs.Logo}
                alt="logo"
              />
            </Box>
            <Button
              onClick={() => router.push("/contact-us")}
              sx={{
                backgroundColor: "#074592",
                padding: { xs: "10px", md: "15px 20px" },
                textTransform: "capitalize",
                fontSize: localFontSize.p3,
                fontWeight: "500",
                fontFamily: "inherit",
                display: { xs: "none", md: "flex" },
                gap: "10px",
                alignItems: "center",
                borderRadius: "0px",
              }}
              variant="contained"
            >
              <Image
                style={{ width: "20px", objectFit: "contain" }}
                src={svgs.Profile}
                alt="profile"
              />
              book consultation
            </Button>
          </Box>
          <Box
            onClick={() => router.push("/")}
            sx={{
              position: "absolute",
              height: "auto",
              width: { md: "60px" },
              // width: { xs: "50px", md: "90px", lg: "100px", xxl: "120px" },
              display: { xs: "none", md: "block" },
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              alignItems: "center",
              aspectRatio: "1/1",
            }}
          >
            <Image
              style={{
                cursor: "pointer",
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
              src={svgs.Logo}
              alt="logo"
            />
          </Box>
        </Box>
      </Box>
      {/* Drawer Navigation */}
      <Box
        sx={{
          backgroundImage: "url(./bgModal.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "100vw",
          overflowX: "hidden",
          transition: "all .5s ease-out",
          zIndex: "999",

          transform: isDrawerOpen ? "translateX(0)" : "translateX(-150%)",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#000000CC",
            backdropFilter: "blur(10px)",
            padding: isDrawerOpen ? { xs: "40px 20px", md: "50px" } : "0",
            height: "100%",
            width: "100vw",
          }}
        >
          <Box onClick={() => toggleDrawer(false)}>
            <Image
              style={{ cursor: "pointer", height: "20px", width: "22px" }}
              src={svgs.Cross}
              alt="Cross"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: { xs: "40px", sm: "60", md: "80px", xl: "100px" },
              padding: {
                xs: "20px 0",
                sm: "20px",
                md: "20px 50px",
                lg: "10px 50px",
              },
              width: "100%",
              maxWidth: { xs: "1200px", xxl: "1440px" },
              margin: "auto",
              flexWrap: "wrap",
              justifyContent: { xs: "flex-start", sm: "center" },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Grid sx={{ rowGap: "30px" }} container spacing={4}>
              <Grid item xs={12} sm={4}>
                <Box>
                  <Typography
                    sx={{
                      color: "#074592",
                      fontSize: localFontSize.p1,
                      fontWeight: "700",
                      paddingBottom: { xs: "15px", md: "20px" },
                    }}
                  >
                    Pages
                  </Typography>

                  {pagesData.map((page, index) => (
                    <Box
                      onClick={() => router.push(page.path)}
                      key={index}
                      sx={{
                        width: "100%",
                        display: "flex",
                        gap: { xs: "15px", md: "20px" },
                        padding: { xs: "15px", md: "20px" },
                        borderRadius: "20px",
                        alignItems: "center",
                        cursor: "pointer",
                        // route specific bgcolor
                        backgroundColor:
                          pathname === page.path ? "#074592" : "transparent",
                        transition: "background-color 0.4s ease-in-out",
                        "&:hover": {
                          backgroundColor: "#074592",
                        },
                        marginBottom: "5px",
                      }}
                    >
                      <Image
                        style={{
                          height: "33px",
                          width: "33px",
                          objectFit: "contain",
                        }}
                        src={
                          pathname === page.path ? page.whiteIcon : page.icon
                        }
                        alt={page.title}
                      />
                      <Typography
                        sx={{
                          color: pathname === page.path ? "#FFFFFF" : "#FFFFFF",
                          fontSize: localFontSize.p3,
                          textWrap: "nowrap",
                        }}
                      >
                        {page.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
              {practiceAreasData.map((area, index) => (
                <Grid item xs={12} sm={4} key={index}>
                  <Box>
                    {/* Heading */}
                    <Typography
                      sx={{
                        color: "#074592",
                        fontSize: localFontSize.p1,
                        fontWeight: "700",
                        paddingBottom: "40px",
                      }}
                    >
                      {area.heading}
                    </Typography>

                    {/* List of Practice Areas */}
                    <Box
                      sx={{
                        fontSize: localFontSize.p2,
                        color: "#00000080",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "5px",
                      }}
                    >
                      {area.items.map((item, idx) => (
                        <Typography
                          onClick={() => router.push(item.path)}
                          sx={{
                            padding: { xs: "10px", md: "20px" },
                            cursor: "pointer",
                            backgroundColor:
                              pathname === item.path ? "#074592" : "none",
                            color:
                              pathname === item.path ? "#ffffff" : "#FFFFFF80",
                            borderRadius: "15px",
                            maxWidth: {
                              sm: "200px",
                              md: "250px",
                              lg: "300px",
                              xl: "350px",
                              xxl: "400px",
                            },
                            transition: "all 0.4s ease-in-out",
                            "&:hover": {
                              color: "#084592",
                              backgroundColor: "#ffffff",
                            },
                          }}
                          key={idx}
                        >
                          {item.label}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
