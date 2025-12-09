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
          backgroundImage: "url(./newsArticles/bgBar2.webp)",
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
            Taxi Licence Appeal Win
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
          This morning our team represented a Rotherham private hire taxi driver
          who won his taxi licence appeal at Doncaster Magistrates’ Court.
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          Rotherham Metropolitan Borough Council (RMBC) refused to renew our
          Client’s taxi licence on three principal grounds:
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          1. For making inappropriate and sexually suggestive comments to a lone
          female passenger;
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          2. Not having working audio and video recording equipment in his
          vehicle at the time of this alleged incident; and
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          3. On a separate occasion for allegedly being under the influence of
          Cannabis which resulted in him causing a Road Traffic Accident.
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          In response to RMBC’s evidence (which included mobile phone footage in
          respect of the third ground) our team went through each and every
          point made, and we were able to show evidence to the contrary that
          either disproved the Council’s position, or cast significant doubt on
          the credibility of their witnesses and their version of events.
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          Our Client’s response was set out in a detailed witness statement and
          accompanied by a comprehensive skeleton argument which set out the key
          submissions rebutting the allegations he faced.
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          This morning at court, RMBC’s barrister conceded that based on the
          witness statement, supporting evidence and skeleton argument served by
          us, the Council would not be contesting the appeal. In court, RMBC’s
          barrister confirmed that the Licencing Department now accept they were
          wrong to revoke our Client’s taxi licence, following which our
          Client’s appeal was allowed, resulting in the return of his taxi
          licence.
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          Our Client can now go back to plying his trade as a private hire taxi
          driver, as he has been doing for the last 20 years and put all this
          behind him. However, this won’t make up for months of stress and worry
          endured by him as a result of these proceedings hanging over him. All
          of this could have been easily avoided if RMBC had approached this
          objectively and undertook an investigation fairly, rather than on the
          basis that our Client was not to be believed, and what the
          Complainants’ were saying was unquestionably true.
        </span>
        <br />
        <br />
        <span data-aos="zoom-in" data-aos-duration="500">
          If you are a taxi driver in Rotherham, or indeed elsewhere and need
          representation before a local authority’s licencing sub-committee, or
          wish to appeal a revocation in the Magistrates’ or Crown Court, the
          please feel to contact us on 01709 458786 for a 30-minute free
          consultation. Our team of experienced litigators and advocates are
          well placed to advise you on the best points and strategies to deploy
          to deal with the allegations you are faced with.
        </span>
        <br />
        <br />
      </Typography>
    </>
  );
}
