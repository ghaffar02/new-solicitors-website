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
            sx={{
              fontSize: localFontSize.p2,
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
              creditor who petitioned the court, but each and every single
              creditor he owed money to. Cash in his bank was immediately seized
              by the Official Receiver, and only limited funds were to be
              released to fund basic essentials with the authorisation of the
              Official Receiver. The instant impact on our Client’s credit
              rating meant that he would be unable to mortgage or have access to
              any other form of finance.
            </span>
            <br />
            <br />
            <span data-aos="zoom-in" data-aos-duration="500">
              Once we were instructed our Litigation Team began communicating
              with the creditors and initiated the process of exploring the
              options available to our Client. We advised that in the
              circumstances the best route to take would be to apply to have the
              bankruptcy annulled. Last week, the County Court allowed our
              Client’s application and annulled the original bankruptcy which
              our Client was made subject of after RMBC’s successful petitioning
              of the court. The funds from our Client’s bank account that had
              been seized by the Official Receiver have also now been released
              back to him.
            </span>
            <br />
            <br />
            <span data-aos="zoom-in" data-aos-duration="500">
              A positive outcome that now enables our Client to put all this
              behind him and move forward with his life without losing his
              family home or being constrained by the shackles of bankruptcy.
            </span>
            <br />
            <br />
            <span data-aos="zoom-in" data-aos-duration="500">
              If you are contemplating Litigation or if you are being sued and
              need someone act in your defence then our team of experienced
              Litigators are on hand to help you every step of the way. Legal
              proceedings can be emotionally draining and worrisome; Conquest
              Law Solicitors aim to take as much pressure and burden off you,
              and fight your corner without fear or fervour to get you the best
              possible outcome.
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
