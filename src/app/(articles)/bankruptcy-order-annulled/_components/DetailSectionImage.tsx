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
        data-aos="fade-right"
        data-aos-duration="500"
        sx={{
          backgroundImage: "url(./newsArticles/bgBar.webp)",
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
              Legal Advice
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
            Bankruptcy Order Annulled
          </Typography>

          <Typography
            sx={{
              fontSize: globalFontSize.p2,
              color: "#FFFFFF80",
              textTransform: "capitalize",
            }}
          >
            December 8, 2022
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          paddingY: "40px",
          fontSize: globalFontSize.p2,
          color: "#00000080",
        }}
      >
        <span data-aos="zoom-in" data-aos-duration="500">
          Our Litigation Team represented a client who succeeded in his
          Bankruptcy Annulment Application. The Applicant was made bankrupt
          after Rotherham Metropolitan Borough Council (RMBC) petitioned the
          County Court to have him declared bankrupt for unpaid council tax
          arrears.
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          The bankruptcy had a significant impact on his life as the home he
          owned was in the process of being sold in order repay not just the
          creditor who petitioned the court, but each and every single creditor
          he owed money to. Cash in his bank was immediately seized by the
          Official Receiver, and only limited funds were to be released to fund
          basic essentials with the authorisation of the Official Receiver. The
          instant impact on our Client’s credit rating meant that he would be
          unable to mortgage or have access to any other form of finance.
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          Once we were instructed our Litigation Team began communicating with
          the creditors and initiated the process of exploring the options
          available to our Client. We advised that in the circumstances the best
          route to take would be to apply to have the bankruptcy annulled. Last
          week, the County Court allowed our Client’s application and annulled
          the original bankruptcy which our Client was made subject of after
          RMBC’s successful petitioning of the court. The funds from our
          Client’s bank account that had been seized by the Official Receiver
          have also now been released back to him.
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          A positive outcome that now enables our Client to put all this behind
          him and move forward with his life without losing his family home or
          being constrained by the shackles of bankruptcy.
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          If you are contemplating Litigation or if you are being sued and need
          someone act in your defence then our team of experienced Litigators
          are on hand to help you every step of the way. Legal proceedings can
          be emotionally draining and worrisome; Conquest Law Solicitors aim to
          take as much pressure and burden off you, and fight your corner
          without fear or fervour to get you the best possible outcome.
        </span>
      </Typography>
    </>
  );
}
