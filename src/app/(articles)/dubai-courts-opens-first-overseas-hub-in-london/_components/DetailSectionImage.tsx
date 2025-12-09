import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { globalFontSize } from "@/app/utils/themes";

// const globalFontSize = {
//   p2: "14px",
//   h2: "32px",
// };

export default function DetailSectionImage() {
  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(./newsArticles/bgBar4.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          width: "100%",
          color: "#fff",
          height: "590px",
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        {/* Content container */}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            bottom: 0,
            color: "#0000001A",
            backdropFilter: "blur(40px)",
            width: "100%",
            minHeight: "38%",
            padding: { xs: "30px 20px", md: "40px 30px" },
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Box>
            <Button
              onClick={() => router.push("/contact-us")}
              sx={{
                borderRadius: "10px",
                padding: "10px",
                fontWeight: "600",
                backgroundColor: "#F1ECFF",
                color: "#074592",
                fontSize: globalFontSize.p2,
                textTransform: "capitalize",
              }}
            >
              Advocacy, Legal Advice
            </Button>
          </Box>

          <Typography
            sx={{
              fontSize: globalFontSize.h2,
              fontWeight: "700",
              color: "#ffffff",
              textTransform: "capitalize",
            }}
          >
            Dubai Courts Opens First Overseas Hub in London
          </Typography>

          <Typography
            sx={{
              fontSize: globalFontSize.p2,
              color: "#FFFFFF80",
              textTransform: "capitalize",
            }}
          >
            Aug 18, 2025
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          paddingY: "40px",
          fontSize: globalFontSize.p2,
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
          The newly established Dubai Hub London serves as a one-stop centre,
          offering integrated support from key Dubai government entities. This
          initiative is led by Dubai Chambers and managed by Al Burj Holding.
          The hub consolidates services from:
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
            <b>Dubai Land Department</b>: Assisting with property valuations and
            documentation.
          </li>
          <li>
            <b>Dubai Department of Economy and Tourism</b>: Facilitating trade
            name reservations, business licence issuance, and amendments.
          </li>
          <li>
            <b>General Directorate of Residency and Foreigners Affairs</b>:
            Offering residency and immigration-related administrative services.
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
          The Dubai Hub London offers a range of services designed to facilitate
          business operations and legal procedures, including:
        </span>
        <br />
        <br />
        <span>
          <li>Notary public authentication</li>
          <li>
            Attestation of contracts, powers of attorney, and meeting minutes
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
    </>
  );
}
