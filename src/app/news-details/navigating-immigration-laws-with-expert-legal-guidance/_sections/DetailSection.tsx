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
            Immigration laws are constantly evolving, often shaped by political
            decisions, international relations, and national security concerns.
            For individuals, families, and businesses, understanding and
            complying with these laws can be overwhelming. From visa
            applications to permanent residency and citizenship matters, expert
            legal guidance plays a critical role in ensuring a smooth and lawful
            immigration journey.
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
            The Complexity of Modern Immigration Laws
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Immigration regulations are rarely straightforward. Each case is
            influenced by multiple factors such as nationality, purpose of
            travel, employment status, family ties, and current government
            policies. Even a small error in documentation or timing can result
            in delays, refusals, or legal complications. This complexity makes
            professional legal support not just helpful, but often essential.
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
            Why Expert Legal Guidance Matters
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            An experienced immigration Solicitor brings clarity to a complicated
            process. They stay up to date with policy changes, legal precedents,
            and procedural requirements that may not be easily accessible to the
            general public. With expert guidance, clients can better understand
            their rights, obligations, and the most suitable immigration
            pathways available to them.
            <br />
            <br />
            Legal professionals also anticipate potential risks and address them
            proactively, helping clients avoid costly mistakes that could impact
            their future plans.
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
            Tailored Solutions for Every Immigration Need
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            No two immigration cases are the same. Whether you are applying for
            a work visa, sponsoring a family member, seeking asylum, or planning
            to establish a business abroad, tailored legal advice ensures your
            application aligns with your specific circumstances.
            <br />
            <br />
            Immigration Solicitors assess each case individually, recommend the
            strongest options, and prepare strategies that maximize the
            likelihood of success while remaining fully compliant with the law.
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
            Support Through Every Stage of the Process
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: "#00000080",
              fontSize: localFontSize.p2,
            }}
          >
            From initial consultation to final decision, expert legal guidance
            provides continuous support. Solicitors assist with document
            preparation, application submissions, correspondence with
            immigration authorities, and representation in appeals or hearings
            if required. This end-to-end support offers peace of mind, allowing
            clients to focus on their personal or professional goals.
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
            Reducing Stress and Uncertainty
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: "#00000080",
              fontSize: localFontSize.p2,
            }}
          >
            Immigration matters often involve tight deadlines, high stakes, and
            emotional pressure. Professional legal guidance reduces uncertainty
            by offering clear timelines, realistic expectations, and transparent
            communication. Clients gain confidence knowing their case is being
            handled by a knowledgeable professional who understands both the
            legal and human aspects of immigration.
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
            A Trusted Partner in Your Immigration Journey
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: "#00000080",
              fontSize: localFontSize.p2,
            }}
          >
            Navigating immigration laws does not have to be a daunting
            experience. With expert legal guidance, individuals and businesses
            can move forward with confidence, knowing their applications are
            accurate, compliant, and strategically prepared. A trusted
            immigration Solicitor is not just a legal advisor, but a long-term
            partner in achieving your future plans across borders.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
