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

  const clearStrategyPoints = [
    "The strengths and weaknesses of each party's case",
    "Possible legal outcomes",
    "Timeframes and costs involved",
    "Opportunities for negotiation or settlement",
  ];

  const confidentRepresentationPoints = [
    "Advocating firmly for client interests+",
    "Communicating clearly with opposing parties",
    "Remaining calm and strategic under pressure",
    "Adapting quickly to changing circumstances",
  ];

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
            Legal conflicts can arise unexpectedly, affecting businesses,
            partnerships, and individuals alike. When disputes occur, the
            difference between prolonged stress and a successful resolution
            often lies in how clearly the issue is understood and how
            confidently it is handled. Resolving legal conflicts with clarity
            and confidence is not just a goal—it is a disciplined approach that
            leads to fair, timely, and effective outcomes.
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
            Understanding the Root of Legal Disputes
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Every legal conflict has an underlying cause. It may stem from
            unclear contracts, miscommunication between parties, unmet
            obligations, or differing interpretations of the law. Without
            identifying the true source of the dispute, resolutions remain
            temporary or ineffective.
            <br />
            <br />A structured legal approach begins with a thorough review of
            facts, documentation, and legal responsibilities. This clarity
            allows all parties to understand their position, potential risks,
            and available options before moving forward.
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
            The Importance of Clear Legal Strategy
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Clarity in legal matters means more than understanding the law—it
            involves translating complex legal language into actionable
            guidance. A clear strategy outlines:
          </Typography>
          <br />
          <ul style={{ marginLeft: "30px", color: "#00000080" }}>
            {clearStrategyPoints.map((point, index) => (
              <li key={index}>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#00000080",
                    fontSize: localFontSize.p2,
                  }}
                >
                  {point}
                </Typography>
              </li>
            ))}
          </ul>
          <br />
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            When clients are informed and prepared, decision-making becomes more
            confident and less reactive. This reduces uncertainty and helps
            avoid unnecessary escalation.
          </Typography>
          {/* sdjfksfjsdfj   */}
          <Typography
            sx={{
              mt: 4,
              fontWeight: 500,
              fontSize: localFontSize.h3,
              color: "#1A1A1A",
              fontFamily: "Playfair Display !important",
            }}
          >
            Confidence Through Professional Representation
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Confidence in resolving legal conflicts comes from experienced
            representation. Skilled legal professionals combine legal knowledge
            with practical insight, ensuring that clients feel supported at
            every stage of the process.
          </Typography>
          <br />
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Whether through negotiation, mediation, arbitration, or litigation,
            confident representation means:
          </Typography>
          <br />
          <ul style={{ marginLeft: "30px", color: "#00000080" }}>
            {confidentRepresentationPoints.map((point, index) => (
              <li key={index}>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#00000080",
                    fontSize: localFontSize.p2,
                  }}
                >
                  {point}
                </Typography>
              </li>
            ))}
          </ul>
          <br />
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            This approach builds trust and increases the likelihood of favorable
            outcomes.
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
            Alternative Dispute Resolution: A Smarter Path Forward
          </Typography>
          <br />
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Not all legal conflicts need to end in court. Alternative Dispute
            Resolution (ADR) methods such as mediation and negotiation often
            provide faster, more cost-effective solutions.
            <br />
            <br />
            ADR encourages open dialogue, preserves professional relationships,
            and allows parties greater control over the outcome. When handled
            with clarity and confidence, these methods can resolve disputes
            while minimizing emotional and financial strain.
          </Typography>
          {/* this s th break   */}
          <Typography
            sx={{
              mt: 4,
              fontWeight: 500,
              color: "#1A1A1A",
              fontFamily: "Playfair Display !important",
              fontSize: localFontSize.h3,
            }}
          >
            Moving Forward with Assurance{" "}
          </Typography>
          <br />
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Legal disputes can be complex, but they do not have to be
            overwhelming. With the right guidance, conflicts can be resolved
            efficiently and decisively. Clarity brings understanding, confidence
            drives action, and together they form the foundation of effective
            legal resolution.
            <br />
            <br />
            When legal challenges arise, a calm, informed, and confident
            approach makes all the difference.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
