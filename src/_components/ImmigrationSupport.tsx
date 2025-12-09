"use client";

import React, { memo, useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import Image, { StaticImageData } from "next/image";
import pngs from "@/_assets/webp";
import { globalFontSize } from "@/app/utils/themes";

const accordionData = [
  {
    title: "Settling in a New Country",
    content:
      "Moving to a new country is challenging, but establishing roots and integrating into society can be even more overwhelming. The legal complexities of immigration can make this process stressful and uncertain.",
  },
  {
    title: "Navigating the Immigration System",
    content:
      "At Conquest Law Solicitors, we understand how individuals and families can struggle with endless paperwork, confusing regulations, and the risk of appeals. Our goal is to build the strongest possible case from the start to avoid unnecessary delays and complications.",
  },
  {
    title: "Getting It Right the First Time",
    content:
      "We strive to ensure every application is meticulously prepared, increasing the chances of success on the first attempt. By doing so, we help our clients avoid the emotional and financial burdens of prolonged legal battles.",
  },
  {
    title: "Culturally Aware Representation",
    content:
      "Our team of specialist immigration practitioners comes from diverse cultural and ethnic backgrounds, allowing them to approach each case with sensitivity and understanding. We are committed to providing first-class client service with a personal touch.",
  },
];

interface AccordionItem {
  title: string;
  content: string;
}

interface ImmigrationSupportProps {
  reverseOrder?: boolean;
  image?: StaticImageData;
  data?: AccordionItem[];
}

function ImmigrationSupport({
  reverseOrder = false,
  image = pngs.ImmigrationLaw,
  data,
}: ImmigrationSupportProps) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleAccordionChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const accordionsToRender = data && data.length > 0 ? data : accordionData;

  return (
    <Box
      sx={{
        padding: {
          xs: "25px 20px",
          sm: "50px 30px",
          md: "75px 50px",
          lg: "100px 100px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "1440px", xxl: "80vw" },
          margin: "auto",
          width: "100%",
        }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 2, xxl: 10 }}
          alignItems="flex-start"
          justifyContent="space-between"
          flexDirection={reverseOrder ? "row-reverse" : "row"}
        >
          {/* Left Side (Accordions) */}
          <Grid
            sx={{ paddingRight: { xl: "50px" } }}
            item
            xs={12}
            md={6}
            xl={7}
            xxl={8}
          >
            <Box
              data-aos="zoom-in"
              data-aos-duration="500"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                rowGap: { xs: "10px", md: "20px", lg: "40px" },
              }}
            >
              {accordionsToRender.map((item, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleAccordionChange(`panel${index}`)}
                  sx={{
                    boxShadow: "none",
                    borderRadius: "0 !important",
                    borderBottom: "2px solid #074592",
                    "&::before": {
                      display: "none",
                      content: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === `panel${index}` ? (
                        <Remove sx={{ color: "#074592" }} />
                      ) : (
                        <Add sx={{ color: "#074592" }} />
                      )
                    }
                    sx={{
                      color: "#565656",
                      fontSize: globalFontSize.h4,
                      lineHeight: globalFontSize.h4,
                      paddingX: "0",
                      borderRadius: "0",
                    }}
                  >
                    {item.title}
                  </AccordionSummary>
                  <AccordionDetails sx={{ paddingX: "0" }}>
                    <Typography
                      sx={{ color: "#00000080", fontSize: globalFontSize.p2 }}
                    >
                      {item.content}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Grid>

          {/* Right Side (Image) */}
          <Grid item xs={12} md={6} xl={5} xxl={4}>
            <Box
              data-aos="zoom-in"
              data-aos-duration="500"
              sx={{
                maxWidth: { xs: "600px", xxl: "100%" },
                width: "100%",
                maxHeight: { xs: "551px", xxl: "100%" },
                height: "100%",
                float: "right",
              }}
            >
              {/* <Box sx={{ overflow: "hidden" }}> */}
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  transition: "all 0.25s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  overflow: "hidden",
                }}
              >
                <Image
                  src={image}
                  alt="lawyer"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
              {/* </Box> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default memo(ImmigrationSupport);
