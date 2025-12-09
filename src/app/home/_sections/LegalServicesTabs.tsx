"use client";
import React, { useState, memo } from "react";
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { globalFontSize } from "@/app/utils/themes";
import LegalServicesTabsComponent from "../_components/LegalServicesTabsComponent";
import pngs from "@/_assets/webp";
import svgs from "@/_assets/svgs";

function LegalServicesTabs() {
  const [selectedTab, setSelectedTab] = useState("personal");

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newTab: string | null
  ) => {
    if (newTab !== null) {
      setSelectedTab(newTab);
    }
  };

  const personalTabCardData = [
    {
      id: 1,
      image: svgs.FamilyLaw,
      title: "Actions Against Public Bodies",
      description:
        "At Conquest Law we know from working with a number of high profile campaigns.",
      path: "/actions-against-public-bodies",
    },
    {
      id: 2,
      image: svgs.ImmigrationLaw,
      title: "Criminal Law",
      description:
        "Our criminal defence team consists of highly skilled criminal law practitioners who appreciate.",
      path: "/criminal-law",
    },

    {
      id: 3,
      image: svgs.ImmigrationLaw,
      title: "Dispute Resolution (Civil)",
      description:
        "As much as we would all like to avoid it, there may come a time when you find yourself in a dispute with another individual or business.",
      path: "/dispute-resolution-civil",
    },
    {
      id: 4,
      image: svgs.EmploymentLaw,
      title: "Employment Law",
      description:
        "At Conquest Law Solicitors, our Employment Solicitors can help with all employment law matters.",
      path: "/employment-law",
    },
    {
      id: 5,
      image: svgs.FamilyLaw,
      title: "Family Law",
      description:
        "Relationships and families are ever evolving, nevertheless, protecting and taking care of your loved ones is non-negotiable.",
      path: "/family-law",
    },

    {
      id: 6,
      image: svgs.CommercialLaw,
      title: "Immigration Law",
      description:
        "Moving to a new country is difficult in of itself, but trying to put down roots in your new home.",
      path: "/immigration-law",
    },

    {
      id: 7,
      image: svgs.FamilyLaw,
      title: "Probate And Estate Administration",
      description:
        "It is understandable that the administration of a person’s estate can be seen to be a complex and time-consuming issue.",
      path: "/probate-and-estate-administration",
    },
  ];

  const BusinessTabCardData = [
    {
      id: 1,
      image: svgs.FamilyLaw,
      title: "Business Mergers and Acquisitions",
      description:
        "The mergers and acquisitions team at Conquest Law Solicitors have extensive expertise counselling clients.",
      path: "/business-mergers-and-acquisitions",
    },
    {
      id: 2,
      image: svgs.EmploymentLaw,
      title: "Commercial Conveyancing",
      description:
        "Our commercial real estate experts are committed to providing all of our clients with consistently high-quality and prompt service.",
      path: "/commercial-conveyancing",
    },

    {
      id: 3,
      image: svgs.ImmigrationLaw,
      title: "Commercial Law",
      description:
        "Our highly experienced team can handle a range of commercial and business transactions on your behalf.",
      path: "/commercial-law",
    },

    {
      id: 4,
      image: svgs.CommercialLaw,
      title: "Dispute Resolution (Commercial)",
      description:
        "Businesses are rarely a one-person endeavour; they're usually joint ventures that rely on a variety of people with different skills.",
      path: "/dispute-resolution-commercial",
    },
    {
      id: 5,
      image: svgs.CommercialLaw,
      title: "Shariah Compliant Financing",
      description:
        "When sourcing funds for personal or commercial ventures in the UK, Conquest Law Solicitors are available to assist.",
      path: "/shariah-compliant-financing",
    },
    {
      id: 6,
      image: svgs.CommercialLaw,
      title: "Succession and Estate Planning",
      description:
        "The death of a business owner or business partner can seriously affect the continuation of the business.",
      path: "/succession-and-estate-planning",
    },
  ];

  console.log(selectedTab, "selectedTab");
  return (
    <Box
      sx={{
        background: "#ffffff",
        padding: {
          xs: "25px 20px",
          sm: "50px 30px",
          md: "75px 50px",
          lg: "100px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "1440px", xxl: "1536px" },
          width: "100%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <ToggleButtonGroup
          data-aos="zoom-in"
          data-aos-duration="500"
          value={selectedTab}
          exclusive
          onChange={handleChange}
          sx={{
            backgroundColor: "#074592",
            borderRadius: "40px",
            padding: "10px",
            display: "inline-flex",
            gap: "20px",
          }}
        >
          <ToggleButton
            value="personal"
            sx={{
              backgroundColor:
                selectedTab === "personal" ? "#ffffff" : "#074592",
              color: selectedTab === "personal" ? "#074592" : "#ffffff",
              fontSize: globalFontSize.p1,
              fontWeight: "500",
              padding: "10px 20px",
              borderRadius: "40px !important",
              textTransform: "none",
              transition: "all 0.3s ease-in-out",
              "&.Mui-selected": {
                backgroundColor: "#ffffff !important",
                color: "#074592 !important",
              },
              "&:not(.Mui-selected)": {
                backgroundColor: "#074592 !important",
                color: "#ffffff !important",
              },
              "&:hover": {
                backgroundColor: "#ffffff !important",
                color: "#074592 !important",
              },
            }}
          >
            Personal
          </ToggleButton>

          <ToggleButton
            value="business"
            sx={{
              backgroundColor:
                selectedTab === "business" ? "#ffffff" : "#074592",
              color: selectedTab === "business" ? "#074592" : "#ffffff",
              fontSize: globalFontSize.p1,
              fontWeight: "500",
              padding: "10px 20px",
              borderRadius: "40px !important",
              textTransform: "none",
              transition: "all 0.3s ease-in-out",
              "&.Mui-selected": {
                backgroundColor: "#ffffff !important",
                color: "#074592 !important",
              },
              "&:not(.Mui-selected)": {
                backgroundColor: "#074592 !important",
                color: "#ffffff !important",
              },
              "&:hover": {
                backgroundColor: "#ffffff !important",
                color: "#074592 !important",
              },
            }}
          >
            Business
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Tab Content */}
        <Box sx={{ marginTop: "30px" }}>
          {selectedTab === "personal" ? (
            <Typography
              sx={{ fontSize: "20px", color: "#074592", fontWeight: 500 }}
            >
              <LegalServicesTabsComponent
                image={pngs.LegalServicesTab1}
                cardsData={personalTabCardData}
              />
            </Typography>
          ) : (
            <Typography
              sx={{ fontSize: "20px", color: "#074592", fontWeight: 500 }}
            >
              <LegalServicesTabsComponent
                reverseOrder={true}
                image={pngs.LegalServicesTab2}
                cardsData={BusinessTabCardData}
              />
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default memo(LegalServicesTabs);
