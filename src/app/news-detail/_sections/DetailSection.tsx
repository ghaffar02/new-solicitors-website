"use client";
import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
// import { InputBase, Typography } from "@mui/material";
import DetailSectionImage from "../_components/DetailSectionImage";
// import DetailSectionForm from "../_components/DetailSectionForm";
// import SearchIcon from "@mui/icons-material/Search";
// import { localFontSize } from "@/app/utils/themes";
// import { Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DetailSection() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  // const advocacyData = [
  //   { title: "Advocacy", number: "(01)" },
  //   { title: "Legal Advice", number: "(03)" },
  // ];
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "25px 20px",
            sm: "50px 30px",
            md: "75px 50px",
            lg: "100px 100px",
          },
          marginTop: { xs: "76px", sm: "86px", md: "90px", lg: "93px" },
        }}
      >
        <Grid
          sx={{
            maxWidth: " 1440px",
            margin: "auto",
            rowGap: { xs: "30px", sm: "50px" },
            flexDirection: { xs: "column-reverse", md: "unset" },
          }}
          container
        >
          <Grid xs={12} md={12}>
            <DetailSectionImage />
            {/* <DetailSectionForm /> */}
          </Grid>
          {/* <Grid
            data-aos="fade-left"
            data-aos-duration="500"
            sx={{ paddingLeft: { md: "20px", lg: "30px", xl: "40px" } }}
            xs={12}
            md={4}
          >
             <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: { xs: "30px", md: "50px", lg: "80px" },
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    borderRadius: "50px",
                    padding: "8px 16px",
                    width: "100%",
                    maxWidth: "420px",
                    backgroundColor: "white",
                    float: { xs: "right", md: "unset" },
                    margin: { xs: "unset", md: "auto" },
                  }}
                >
                  <InputBase
                    placeholder="Search"
                    sx={{
                      flex: 1,
                      fontSize: "16px",
                      color: "#555",
                      "&::placeholder": {
                        color: "#999",
                        opacity: 1,
                      },
                    }}
                  />
                  <SearchIcon sx={{ color: "#555" }} />
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: localFontSize.p1,
                    color: "#074592",
                    fontWeight: "500",
                  }}
                >
                  Categories
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "30px",
                    paddingTop: { xs: "15px", md: "30px", lg: "50px" },
                  }}
                >
                  {advocacyData.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #00000080",
                        paddingBottom: "5px",
                        width: "100%",
                        textWrap: "nowrap",
                        columnGap: "20px",
                      }}
                    >
                      <Typography
                        sx={{ fontSize: localFontSize.p2, color: "#00000080" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{ fontSize: localFontSize.p2, color: "#00000080" }}
                      >
                        {item.number}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: localFontSize.p1,
                    color: "#074592",
                    fontWeight: "500",
                  }}
                >
                  Tags
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: "30px",
                    paddingTop: { xs: "15px", md: "30px", lg: "50px" },
                  }}
                >
                  {["Advocacy", "Legal Advice"].map((label, index) => (
                    <Button
                      key={index}
                      variant="contained"
                      sx={{
                        backgroundColor: "#074592",
                        color: "#FFFFFF",
                        fontSize: localFontSize.p2,
                        borderRadius: "12px",
                        padding: "10px",
                        textTransform: "capitalize",
                        "&:hover": {
                          backgroundColor: "#082B60",
                        },
                      }}
                    >
                      {label}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Box> 
          </Grid>*/}
        </Grid>
      </Box>
    </>
  );
}
