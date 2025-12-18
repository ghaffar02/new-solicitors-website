import React, { memo } from "react";
import { Box, Divider, Typography } from "@mui/material";

import { localFontSize } from "@/app/utils/themes";
import Button from "@/_components/Button";
import svgs from "@/_assets/svgs";

const boxData = [
  {
    title: "Legal Advice",
    heading: "Bankruptcy Order Annulled",
    description:
      "Our Litigation Team represented a client who succeeded in his Bankruptcy Annulment Application. The Applicant was made bankrupt.",
  },
  {
    title: "Advocacy, Legal Advice",
    heading: "Taxi Licence Appeal Win",
    description:
      "This morning our team represented a Rotherham private hire taxi driver who won his taxi licence appeal at.",
  },
  {
    title: "Legal Advice",
    heading:
      "Successful return of cash following seizure and detention under POCA 2002",
    description:
      "Greater Manchester Police have agreed to return several thousand pounds to our clients after it was seized at.",
  },
];

function NewsUpdates() {
  return (
    <Box
      sx={{
        padding: {
          xs: "25px 20px",
          sm: "50px 30px",
          md: "75px 50px",
          lg: "100px 100px",
        },
      }}
    >
      <Box sx={{ maxWidth: "1440px", width: "100%", margin: "auto" }}>
        <Box sx={{ maxWidth: "542px", width: "100%", margin: "0px auto" }}>
          <Typography
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: "600",
              textAlign: "center",
              fontFamily: "Playfair Display !important",
            }}
          >
            Stay Informed with Latest{" "}
            <span
              style={{
                color: "#074592",
                fontSize: "inherit",
                fontWeight: "inherit",
                textAlign: "inherit",
                fontFamily: "inherit",
              }}
            >
              News
            </span>{" "}
            &{" "}
            <span
              style={{
                color: "#074592",
                fontSize: "inherit",
                fontWeight: "inherit",
                textAlign: "inherit",
                fontFamily: "inherit",
              }}
            >
              Articles
            </span>
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            marginTop: "75px",
            background: "rgba(86, 86, 86, 0.1)",
            borderRadius: "50px",
            padding: "40px 25px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", xl: "space-evenly" },
            alignItems: "center",
            gap: "30px",
          }}
        >
          {boxData.map((data, i) => {
            const isLast = i === boxData.length - 1;
            return (
              <React.Fragment key={i}>
                <Box
                  sx={{
                    backgroundImage: `url("./bgBar.webp")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "346px",
                    maxWidth: "300px",
                    width: "100%",
                    borderRadius: "20px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    ...(isLast && {
                      gap: "5px",
                    }),
                    //   justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: localFontSize.p4,
                      color: "#FFFFFF80",
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: localFontSize.p1,
                      color: "#fff",
                      fontFamily: "Playfair Display !important",
                    }}
                  >
                    {data.heading}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: localFontSize.p3,
                      color: "#FFFFFF80",
                      ...(isLast && {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                      }),
                    }}
                  >
                    {data.description}
                  </Typography>
                  <Button
                    sx={{
                      fontSize: localFontSize.p4,
                      color: "#fff",
                      width: "120px",
                      height: "auto",
                      border: "none",
                      justifyContent: "flex-start",
                      padding: "0px",
                      gap: "10px",
                    }}
                    text={"Read More"}
                    icon={svgs.ButtonArrow}
                    iconHeight={12}
                    iconWidth={12}
                  ></Button>
                </Box>
                {i < 2 && (
                  <Divider
                    sx={{
                      height: { xs: "3px", md: "400px" },
                      maxWidth: { xs: "500px", md: "3px" },
                      width: "100%",
                      background: "#074592",
                    }}
                  ></Divider>
                )}
              </React.Fragment>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default memo(NewsUpdates);
