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
            Our client was facing serious criminal charges that carried the risk
            of severe legal consequences, including potential fines and
            imprisonment. From the outset, the case required a meticulous review
            of evidence, procedural accuracy, and a strong strategic defense to
            protect the client’s rights and reputation.{" "}
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
            The prosecution presented multiple claims supported by
            circumstantial evidence. The client maintained their innocence, but
            the complexity of the case demanded a detailed examination of police
            procedures, evidence handling, and witness statements to identify
            weaknesses in the prosecution’s argument.
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
            Our legal team conducted an in-depth investigation, carefully
            reviewing all evidence and identifying critical inconsistencies in
            the prosecution’s case. We challenged the admissibility of key
            evidence, highlighted procedural errors, and presented compelling
            counter-arguments supported by factual documentation and legal
            precedents. Strategic motions were filed to question the reliability
            and legality of the prosecution’s claims.
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
            As a result of our strong evidentiary presentation and strategic
            defense, the court found insufficient grounds to proceed with the
            case. The charges against our client were dismissed, bringing the
            matter to a successful resolution without the need for a prolonged
            trial.
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
            Conclusion
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: "#00000080",
              fontSize: localFontSize.p2,
            }}
          >
            This case highlights our firm’s commitment to thorough preparation,
            strategic thinking, and aggressive defense. By focusing on facts,
            legal precision, and client advocacy, we consistently work to
            achieve the best possible outcomes in criminal defense matters.{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
