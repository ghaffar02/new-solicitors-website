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
      <Box sx={{ padding: sectionPadding }}>
        <Box
          sx={{
            maxWidth: "1440px",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              paddingY: "40px",
              fontSize: localFontSize.p2,
              color: "#00000080",
              "& a": {
                color: "#467686",
                textDecorationColor: "#467686",
              },
              "& b": {
                fontWeight: "600",
                color: "#000",
              },
            }}
          >
            <span>
              {`Dubai Courts has launched its first international hub in London, aiming to enhance global access to its judicial services. This initiative is designed to support international investors, entrepreneurs, and businesses interested in establishing or expanding their operations in Dubai.`}
            </span>
            <br />
            <br />
            <b>A Comprehensive Service Centre</b>
            <br />
            <span>
              The newly established Dubai Hub London serves as a one-stop
              centre, offering integrated support from key Dubai government
              entities. This initiative is led by Dubai Chambers and managed by
              Al Burj Holding. The hub consolidates services from:
            </span>
            <br />
            <br />
            <span>
              <li>
                <b>Dubai Courts</b>: Providing contract attestation, signature
                verification, legal translation, declaration registration, and
                personal status services.
              </li>
              <li>
                <b>Dubai Land Department</b>: Assisting with property valuations
                and documentation.
              </li>
              <li>
                <b>Dubai Department of Economy and Tourism</b>: Facilitating
                trade name reservations, business licence issuance, and
                amendments.
              </li>
              <li>
                <b>General Directorate of Residency and Foreigners Affairs</b>:
                Offering residency and immigration-related administrative
                services.
              </li>
            </span>
            <br />
            <b>Enhancing Investor Confidence</b>
            <br />
            <span>
              {`This initiative underscores Dubai's commitment to fostering
          international business relationships and providing accessible legal
          and administrative support to global investors. By establishing a
          presence in London, Dubai Courts aims to bridge geographical gaps and
          streamline processes for those interested in engaging with Dubai's
          dynamic business environment.`}
            </span>
            <br />
            <br />
            <b>Services Available at the London Hub</b>
            <br />
            <span>
              The Dubai Hub London offers a range of services designed to
              facilitate business operations and legal procedures, including:
            </span>
            <br />
            <br />
            <span>
              <li>Notary public authentication</li>
              <li>
                Attestation of contracts, powers of attorney, and meeting
                minutes
              </li>
              <li>Preparation and submission of legal documents</li>
              <li>Legal translation and verification/attestation services</li>
              <li>Remote registration and tracking of cases</li>
              <li>Attestation of Wills for non-Muslims</li>
            </span>
            <br />
            <b>Strategic Location in London</b>
            <br />
            <span>
              {`The selection of London as the location for this international hub is
          a strategic decision to strengthen economic ties between the UAE and
          the UK. It provides UK-based individuals and organisations with direct
          access to Dubai's government services, eliminating the need for
          international travel and simplifying the process of establishing
          business operations in Dubai.`}
            </span>
            <br />
            <br />
            <b>Looking Ahead</b>
            <br />
            <span>
              {`The establishment of Dubai Hub London is a testament to Dubai's vision
          of becoming a global business capital. By offering comprehensive
          services and support to international investors, Dubai Courts is
          paving the way for enhanced collaboration and business growth between
          the UAE and the international community.`}
            </span>

            <br />
            <br />
            <b>How we can help </b>
            <br />
            <span>
              {`Whether you're seeking investment opportunities within Dubai or exploring UK investments as an expatriate residing in Dubai, Conquest is equipped to provide comprehensive support and expert guidance.`}
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
