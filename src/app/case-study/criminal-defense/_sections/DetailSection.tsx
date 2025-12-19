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
            A long-standing business partnership faced a serious internal
            dispute due to disagreements over profit distribution, management
            control, and future direction. The conflict threatened daily
            operations and posed a risk of costly litigation.
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
            Both partners held equal stakes in the business but had conflicting
            interpretations of their partnership agreement. Communication had
            broken down, trust was damaged, and legal action seemed inevitable.
            The client needed a swift, strategic solution that protected their
            financial interests while minimizing reputational and operational
            damage.
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
            We conducted a detailed review of the partnership agreement,
            financial records, and correspondence between the parties. Using a
            negotiation-first strategy, we identified key leverage points and
            potential areas of compromise. Our legal team facilitated structured
            discussions, ensuring clarity, fairness, and legal precision at
            every stage.
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
            The Resolution
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Through skilled negotiation and careful drafting of revised terms,
            the dispute was resolved without court intervention. A mutually
            acceptable settlement was reached, redefining roles,
            responsibilities, and profit-sharing arrangements. The agreement was
            legally reinforced to prevent future conflicts.
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
            Outcome
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
                Avoided lengthy and expensive litigation
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
                Preserved business continuity and professional relationships
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
                Achieved a fair, enforceable settlement for all parties
              </Typography>
            </li>
          </ul>

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
            Client Impact
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            The client regained stability, clarity, and confidence in their
            business operations, allowing them to refocus on growth rather than
            conflict.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
