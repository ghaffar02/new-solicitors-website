"use client";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { localFontSize, sectionPadding } from "@/app/utils/themes";

export default function DetailSection() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Box
        sx={{
          padding: sectionPadding,
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            margin: "auto",
          }}
        >
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Our client approached us after receiving an unexpected refusal of
            their residency visa application. The refusal placed their future
            plans at risk and caused significant uncertainty. The client sought
            expert legal support to challenge the decision and secure lawful
            residency.
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: 500,
              color: "#1A1A1A",
              fontFamily: "Playfair Display !important",
              fontSize: localFontSize.h3,
            }}
          >
            The Challenge
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            The visa application was initially refused due to concerns raised by
            the immigration authority regarding documentation and eligibility
            criteria. The refusal letter cited insufficient evidence and
            questioned whether the client fully met the residency requirements.
            Without a successful appeal, the client faced the possibility of
            leaving the country and restarting the application process.
          </Typography>
          <br />
          <Typography
            sx={{
              mt: 4,
              fontWeight: 500,
              fontSize: localFontSize.h3,
              color: "#1A1A1A",
              fontFamily: "Playfair Display !important",
            }}
          >
            Our Approach
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            We conducted a thorough review of the refusal notice and identified
            the key weaknesses in the original application. Our team gathered
            additional supporting documents, prepared a strong legal argument
            addressing each concern raised by the immigration authority, and
            ensured full compliance with immigration laws and procedural
            requirements. We also represented the client throughout the appeal
            process, providing clear guidance and reassurance at every stage.
          </Typography>
          <br />
          <Typography
            sx={{
              mt: 4,
              fontWeight: 500,
              color: "#1A1A1A",
              fontFamily: "Playfair Display !important",
              fontSize: localFontSize.h3,
            }}
          >
            The Outcome
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            The appeal was successful. The immigration authority overturned the
            initial refusal and granted the client residency. This decision
            allowed the client to remain in the country legally and continue
            their personal and professional plans without disruption.
          </Typography>
          <br />
          <Typography
            sx={{
              mt: 4,
              fontWeight: 500,
              color: "#1A1A1A",
              fontFamily: "Playfair Display !important",
              fontSize: localFontSize.h3,
            }}
          >
            Key Result
          </Typography>
          <ul style={{ marginLeft: "30px", color: "#00000080" }}>
            <li>
              <Typography
                sx={{
                  mt: 1,
                  color: "#00000080",
                  fontSize: localFontSize.p2,
                }}
              >
                Initial visa refusal successfully challenged
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  mt: 1,
                  color: "#00000080",
                  fontSize: localFontSize.p2,
                }}
              >
                Residency granted through a well-prepared appeal
              </Typography>
            </li>
            <li>
              <Typography
                sx={{
                  mt: 1,
                  color: "#00000080",
                  fontSize: localFontSize.p2,
                }}
              >
                Client secured long-term legal status and peace of mind
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
    </>
  );
}
