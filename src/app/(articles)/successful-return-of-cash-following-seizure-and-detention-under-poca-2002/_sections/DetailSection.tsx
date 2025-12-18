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
              paddingY: "40px",
              fontSize: localFontSize.p2,
              color: "#00000080",
            }}
          >
            <span data-aos="zoom-in" data-aos-duration="500">
              Greater Manchester Police have agreed to return several thousand
              pounds to our clients after it was seized at Manchester Airport
              under section 295(8) of the Proceeds of Crime Act 2002 (“the
              Act”). Following the initial seizure of the cash the police
              successfully applied to the Magistrates’ Court for the cash to be
              further detained pursuant to section 295(2) of the Act on the
              basis “that there are reasonable grounds for suspecting that the
              cash is recoverable property.”
            </span>
            <br />
            <br />
            <span data-aos="zoom-in" data-aos-duration="500">
              A third party was travelling to Pakistan and was taking the money
              on behalf of our clients when it was seized by the police. The
              Applicant’s instructed ourselves following the detention of the
              cash by the Magistrates’ Court to help them get their money back.
            </span>
            <br />
            <br />
            <span data-aos="zoom-in" data-aos-duration="500">
              Following receipt of instructions our criminal team began
              preparing the case on behalf of the Applicants. After the service
              of numerous witness statements along with supporting
              documentation, diligently and painstakingly compiled by our team,
              we were able to demonstrate the legitimate provenance of the cash.
              Therefore, the Police have agreed to return the entire sum of
              money to our clients without the matter proceeding to a full
              contested hearing. This has saved the Applicant’s a great deal of
              expense and time.
            </span>
            <br />
            <br />
            <span data-aos="zoom-in" data-aos-duration="500">
              These types of cases require fine attention to detail, and a
              thorough review of all potential documentary evidence in order to
              build a strong case. If you or anyone you know has matters arising
              from the Proceeds of Crime Act 2002 such as confiscation then
              contact a member of our criminal defence team on 01709 458786 to
              receive expert legal advice.
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
