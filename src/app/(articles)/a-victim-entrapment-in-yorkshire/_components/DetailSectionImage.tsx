import React from "react";
import { Box, Button, Link, Typography } from "@mui/material";
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
            Yorkshire “Nightmare” Zebra Crossing – A Victim of Entrapment
          </Typography>

          <Typography
            sx={{
              fontSize: globalFontSize.p2,
              color: "#FFFFFF80",
              textTransform: "capitalize",
            }}
          >
            May 02, 2025
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          paddingY: "40px",
          fontSize: globalFontSize.p2,
          color: "#00000080",
          textAlign: "center",
          "& a": {
            color: "#467686",
            textDecorationColor: "#467686",
          },
        }}
      >
        <span>
          {`Conquest Law Solicitors have successfully challenged South Yorkshire
          Police’s (SYP) attempted prosecution of a client pursued for allegedly
          driving without reasonable consideration to others at a “Nightmare”
          zebra crossing in South Yorkshire.`}
        </span>
        <br />
        <br />
        <span>
          This comes off the back of a campaign which has since become a
          national phenomenon regarding a zebra crossing situated on Broom Lane,
          Rotherham, South Yorkshire.{" "}
          <Link href="https://www.facebook.com/story.php?story_fbid=1053686503231469&id=100057703883656&rdid=rlLh0xO51oK509tO#">
            {" "}
            Rotherham MP Sarah Champion{" "}
          </Link>{" "}
          has since expressed concerns on behalf of her constituents regarding
          this matter, with greater consideration to be applied by the Rotherham
          Metropolitan Borough Council, as confirmed by their Chief Executive,
          namely{" "}
          <Link href="https://www.facebook.com/story.php?story_fbid=1067243495209103&id=100057703883656&rdid=aDZmo5sGdgQceRYW#">
            {" "}
            Sharon Kemp OBE
          </Link>
          . Further background can be accessed on the following links:
        </span>
        <br />
        <br />
        <span>
          <Link href="https://www.bbc.co.uk/news/articles/c4gm7ymd2njo">
            https://www.bbc.co.uk/news/articles/c4gm7ymd2njo
          </Link>
          <br />
          <br />
          <Link
            href="https://www.thestar.co.uk/news/transport/police-teams-to-be-deployed-to-unsafe-
rotherham-crossing-after-concerns-raised-5021401"
          >
            https://www.thestar.co.uk/news/transport/police-teams-to-be-deployed-to-unsafe-
            rotherham-crossing-after-concerns-raised-5021401
          </Link>
          <br />
          <br />
          <Link
            href="https://www.rotherhamadvertiser.co.uk/news/people/police-teams-to-be-deployed-to-
unsafe-broom-lane-crossing-after-concerns-raised-5021444"
          >
            https://www.rotherhamadvertiser.co.uk/news/people/police-teams-to-be-deployed-to-
            unsafe-broom-lane-crossing-after-concerns-raised-5021444
          </Link>
          <br />
          <br />
          <Link
            href="https://www.examinerlive.co.uk/news/local-news/police-supervise-unsafe-zebra-
crossing-31144101"
          >
            https://www.examinerlive.co.uk/news/local-news/police-supervise-unsafe-zebra-
            crossing-31144101
          </Link>
        </span>
        <br />
        <br />
        <span>
          The BBC article dated 11 March 2025 contains a video from a member of
          the public seeking to establish that vehicles fail to stop at the
          Broom Lane “Nightmare” zebra crossing. Having analysed this video, SYP
          pursued our client.
        </span>
        <br />
        <br />
        <span>
          However, upon critical analysis from Conquest Law Solicitors’ expert
          legal team, it became apparent that the client did not break any laws;
          in fact, he may have also been the victim of entrapment.
        </span>
        <br />
        <br />
        <span></span>

        <span>
          <b style={{ fontWeight: "600", color: "#000" }}>THE LAW</b>
          <br />
          <br /> Whilst there is no dispute behind the campaign and the
          intentions of public members, this video is purporting to demonstrate
          unreasonable drivers was flawed. The video contains an element of
          biased actions from the recording pedestrian in an attempt to
          establish that drivers are breaking the law by driving over a zebra
          crossing without reasonable consideration to others; the pedestrian
          sought to ‘entrap’ our client.
        </span>
        <br />
        <br />
        <span>
          <b style={{ fontWeight: "600", color: "#000" }}>Rule 18 </b> of the
          Highway Code (all crossings) states that the pedestrian should only
          cross when the traffic has stopped.
        </span>
        <br />
        <br />
        <span>
          <b style={{ fontWeight: "600", color: "#000" }}>Rule 19 </b> of the
          Highway Code (zebra crossings) states that the pedestrians must allow
          traffic to stop in both directions or the road should be clear before
          they cross. This rule makes it clear that flowing traffic is not
          required to stop until someone has moved onto the crossing.
        </span>
        <br />
        <br />
        <span>
          <b style={{ fontWeight: "600", color: "#000" }}>Rule 195 </b> of the
          Highway Code states that drivers should give way to pedestrians
          waiting to cross; nevertheless, this is not a given and is
          discretionary is law, not mandatory. It only becomes mandatory once
          the pedestrian has moved onto the crossing.
        </span>
        <br />
        <br />
        <span>
          Before any pedestrian moves onto a crossing, they are required to
          abide by Rules 18 and 19 of the Highway Code which sets out the
          conduct to be displayed by pedestrians. In this case concerning our
          client, the pedestrian did not abide by this. Rather, they have sought
          to promote their campaign and forcefully attempt to enter the zebra
          crossing despite a flow of traffic where the drivers are not obligated
          to stop. This was a clear case of ‘entrapment’ for the benefit of the
          campaign.
        </span>
        <br />
        <br />
        <span>
          The team at Conquest Law Solicitors critically analysed the evidence
          SYP sought to rely upon, as well as diligently considering the laws
          which govern this area, and provided a robust response to SYP.
        </span>
        <br />
        <br />
        <span>
          Although SYP initially responded by stating that our client’s case had
          been authorised for prosecution so matters can only be challenged in
          court, Conquest Law Solicitors provided a further analysis on the
          contemporary case. This has now resulted in the head of department at
          SYP to overturn this decision and to cancel this offence entirely. No
          further action will be taken, and matters will no longer proceed to
          court; justice has been served.
        </span>
        <br />
        <br />
        <span>
          Our client can now go back to plying his day-to-day trade and put all
          this behind him. However, this won’t make up for months of stress and
          worry endured by him as a result of the impending prosecution. All of
          this could have been avoided if SYP had approached this objectively
          and undertook the investigation and analysis fairly, rather than being
          pressured by an ongoing campaign which became a national phenomenon.
        </span>
        <br />
        <br />
        <span>
          If you require representation to challenge a decision you believe
          should not stand or wish to appeal a matter in the Magistrates’ or
          Crown Court, please feel free to contact our Yorkshire Office at 01709
          458786 or our London Office at 0208 226 5786. Our team of experienced
          Solicitors are well placed to advise you on the best points and
          strategies to deploy and to deal with the allegations you are faced
          with.
        </span>
        <br />
        <br />
        {/* <b style={{ fontWeight: "600", color: "#000" }}>
          {" "}
          <span>#conquestlaw #fightingyourcorner</span>
        </b> */}
        <br />
        <br />
      </Typography>
    </>
  );
}
