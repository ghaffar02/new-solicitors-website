"use client";
import svgs from "@/_assets/svgs";
import { localFontSize, sectionPadding } from "@/app/utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export default function OurValues() {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          padding: sectionPadding,
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        {/* LEFT HEADING */}

        <Box
          sx={{
            textAlign: "center",
          }}
        >
          {/* Tagline */}
          <Typography
            sx={{
              color: "#9A9A9A",
              fontSize: localFontSize.p2,
              textTransform: "uppercase",
            }}
          >
            Committed to Your Case
          </Typography>
          {/* Main Heading */}
          <Typography
            sx={{
              color: "#1A1A1A",
              fontSize: localFontSize.h2,
              fontWeight: "600",
              fontFamily: "'PlayfairDisplay', serif !important",
              textTransform: "capitalize",
            }}
          >
            The Values That Defineyou
          </Typography>
          {/* Description */}
          <Typography
            sx={{
              color: "#9A9A9A",
              fontSize: localFontSize.p2,
              maxWidth: "800px",
              margin: "auto",
              marginTop: { xs: "20px", md: "30px" },
            }}
          >
            {`Our mission is to provide clear, strategic, and compassionate
              legal solutions to individuals and businesses alike. At Conquest
              Law Solicitors, we are driven by a passion for justice and a deep
              commitment to our clients' best interests.`}
          </Typography>
        </Box>
        {/* RIGHT SIDE · GRID */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          sx={{
            marginTop: { xs: "30px", md: "50px" },
            "& .MuiGrid-item": {
              display: "flex",
            },
          }}
        >
          <Grid item xs={12} md={6}>
            <OurValuesCard
              image={svgs.integrity}
              title="Integrity"
              description="We practice law with the highest standards of honesty and fairness. Our clients can trust that we act ethically in every decision and interaction, ensuring transparency and building lasting relationships based on mutual respect and trust."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <OurValuesCard
              image={svgs.professionalism}
              title="Professionalism"
              description="Every case we handle reflects our commitment to respect, discipline, and diligence. We approach each matter with thorough preparation and a focus on excellence, maintaining professionalism in our conduct and communication throughout the legal process."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <OurValuesCard
              image={svgs.clarity}
              title="Clarity"
              description="We believe that clear communication is essential to effective legal representation. We avoid confusing legal jargon and instead provide straightforward, understandable guidance so our clients feel informed and confident in every step of their case."
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <OurValuesCard
              image={svgs.commitment}
              title="Commitment"
              description="Your goals are at the center of everything we do. From the initial consultation to final resolution, we dedicate ourselves fully to achieving the best possible outcome for you, standing by your side with unwavering support and advocacy throughout your legal journey."
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export interface OurValuesCardProps {
  title: string;
  description: string;
  image?: StaticImageData;
}

export function OurValuesCard({
  title,
  description,
  image,
}: OurValuesCardProps) {
  return (
    <Box
      sx={{
        paddingLeft: { xs: "20px", md: "24px" },
        borderLeft: { xs: "2px solid #074592", md: "3px solid #074592" },
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "12px", md: "16px" },
        }}
      >
        {/* Icon and Title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "8px", md: "12px" },
          }}
        >
          {image && (
            <Box
              sx={{
                width: { xs: "36px", md: "40px" },
                height: { xs: "36px", md: "40px" },
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={image}
                alt={title}
              />
            </Box>
          )}
          <Typography
            sx={{
              fontSize: localFontSize.h3,
              fontWeight: 500,
              color: "#074592",
              fontFamily: "'PlayfairDisplay', serif !important",
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          sx={{
            fontSize: localFontSize.p3,
            color: "#9A9A9A",
            lineHeight: "1.6",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
