import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { localFontSize } from "@/app/utils/themes";

// const localFontSize = {
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
          backgroundImage: "url(./newsArticles/bgBar3.webp)",
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
                fontSize: localFontSize.p2,
                textTransform: "capitalize",
              }}
            >
              Legal Advice
            </Button>
          </Box>

          <Typography
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: "700",
              color: "#ffffff",
              textTransform: "capitalize",
            }}
          >
            Successful return of cash following seizure and detention under POCA
            2002
          </Typography>

          <Typography
            sx={{
              fontSize: localFontSize.p2,
              color: "#FFFFFF80",
              textTransform: "capitalize",
            }}
          >
            December 24, 2020
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          paddingY: "40px",
          fontSize: localFontSize.p2,
          color: "#00000080",
        }}
      >
        <span data-aos="zoom-in" data-aos-duration="500">
          Greater Manchester Police have agreed to return several thousand
          pounds to our clients after it was seized at Manchester Airport under
          section 295(8) of the Proceeds of Crime Act 2002 (“the Act”).
          Following the initial seizure of the cash the police successfully
          applied to the Magistrates’ Court for the cash to be further detained
          pursuant to section 295(2) of the Act on the basis “that there are
          reasonable grounds for suspecting that the cash is recoverable
          property.”
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          A third party was travelling to Pakistan and was taking the money on
          behalf of our clients when it was seized by the police. The
          Applicant’s instructed ourselves following the detention of the cash
          by the Magistrates’ Court to help them get their money back.
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          Following receipt of instructions our criminal team began preparing
          the case on behalf of the Applicants. After the service of numerous
          witness statements along with supporting documentation, diligently and
          painstakingly compiled by our team, we were able to demonstrate the
          legitimate provenance of the cash. Therefore, the Police have agreed
          to return the entire sum of money to our clients without the matter
          proceeding to a full contested hearing. This has saved the Applicant’s
          a great deal of expense and time.
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          These types of cases require fine attention to detail, and a thorough
          review of all potential documentary evidence in order to build a
          strong case. If you or anyone you know has matters arising from the
          Proceeds of Crime Act 2002 such as confiscation then contact a member
          of our criminal defence team on 01709 458786 to receive expert legal
          advice.
        </span>
      </Typography>
    </>
  );
}
