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

  const clearStrategyPoints = [
    "Recognize when your rights have been violated",
    "Take timely and appropriate action",
    "Avoid unnecessary legal disputes",
    "Protect your personal, professional, and financial interests",
  ];

  const legalRightsAtRiskPoints = [
    "Employment matters such as unfair dismissal, workplace discrimination, or unpaid wages",
    "Business disputes involving contracts, partnerships, or client disagreements",
    "Property and tenancy issues including ownership disputes or lease violations",
    "Personal matters such as family law, inheritance, or consumer protection",
  ];

  const earlyLegalAwarenessPoints = [
    "Understand your options clearly",
    "Strengthen your position in negotiations",
    "Reduce legal costs and time",
    "Avoid emotional and financial stress",
  ];

  const howToProtectYourLegalRightsEffectivelyPoints = [
    "Keep records of agreements, communications, and transactions",
    "Read contracts carefully before signing and seek clarification when needed",
    "Know relevant laws that apply to your situation or industry",
    "Consult a legal professional when in doubt",
  ];

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
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            In today’s fast-moving world, understanding your legal rights is
            more important than ever. Whether you are dealing with a business
            matter, a workplace issue, a property dispute, or a personal legal
            concern, knowing your rights empowers you to make informed decisions
            and avoid costly mistakes. Legal awareness is not just for
            Solicitors it is a vital tool for individuals and businesses alike.
          </Typography>
          <Typography
            sx={{
              mt: 4,
              fontWeight: 500,
              color: "#1A1A1A",
              fontFamily: "Playfair Display !important",
              fontSize: localFontSize.h3,
            }}
          >
            What Are Legal Rights and Why Do They Matter?
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Legal rights are protections and entitlements granted by law to
            ensure fairness, justice, and equality. These rights govern how
            individuals, organizations, and authorities interact with one
            another. They exist to protect you from unlawful treatment and to
            provide remedies when things go wrong.
            <br />
            <br />
            Understanding your legal rights helps you:
          </Typography>
          <br />
          <ul style={{ marginLeft: "30px", color: "#00000080" }}>
            {clearStrategyPoints.map((point, index) => (
              <li key={index}>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#00000080",
                    fontSize: localFontSize.p2,
                  }}
                >
                  {point}
                </Typography>
              </li>
            ))}
          </ul>
          <br />
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            When people are unaware of their rights, they are more likely to be
            taken advantage of or miss opportunities for legal protection.
          </Typography>
          <br />
          <Typography
            sx={{
              mt: 4,
              fontWeight: 500,
              fontSize: localFontSize.h3,
              color: "#1A1A1A",
              fontFamily: "Playfair Display !important",
            }}
          >
            Common Situations Where Legal Rights Are at Risk
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Legal issues can arise unexpectedly in everyday life. Some of the
            most common situations where legal rights are at risk include:
          </Typography>
          <br />
          <ul style={{ marginLeft: "30px", color: "#00000080" }}>
            {legalRightsAtRiskPoints.map((point, index) => (
              <li key={index}>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#00000080",
                    fontSize: localFontSize.p2,
                  }}
                >
                  {point}
                </Typography>
              </li>
            ))}
          </ul>
          <br />
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Being proactive and informed in these situations can prevent minor
            issues from turning into serious legal problems.
          </Typography>
          <br />
          <Typography
            sx={{
              mt: 4,
              fontWeight: 500,
              fontSize: localFontSize.h3,
              color: "#1A1A1A",
              fontFamily: "Playfair Display !important",
            }}
          >
            The Importance of Early Legal Awareness{" "}
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            One of the biggest mistakes people make is seeking legal advice too
            late. Early awareness and consultation can often resolve issues
            before they escalate. Understanding your legal position from the
            start allows you to plan strategically and choose the best course of
            action.One of the biggest mistakes people make is seeking legal
            advice too late. Early awareness and consultation can often resolve
            issues before they escalate. Understanding your legal position from
            the start allows you to plan strategically and choose the best
            course of action.
            <br />
            <br />
            Early legal guidance can help you:
          </Typography>
          <br />
          <ul style={{ marginLeft: "30px", color: "#00000080" }}>
            {earlyLegalAwarenessPoints.map((point, index) => (
              <li key={index}>
                <Typography
                  sx={{
                    mt: 1,
                    color: "#00000080",
                    fontSize: localFontSize.p2,
                  }}
                >
                  {point}
                </Typography>
              </li>
            ))}
          </ul>
          <br />
          <Typography
            sx={{
              mt: 4,
              fontWeight: 500,
              fontSize: localFontSize.h3,
              color: "#1A1A1A",
              fontFamily: "Playfair Display !important",
            }}
          >
            How to Protect Your Legal Rights Effectively{" "}
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Protecting your legal rights requires a combination of awareness,
            documentation, and professional guidance. Some practical steps
            include:
          </Typography>
          <br />
          <ul style={{ marginLeft: "30px", color: "#00000080" }}>
            {howToProtectYourLegalRightsEffectivelyPoints.map(
              (point, index) => (
                <li key={index}>
                  <Typography
                    sx={{
                      mt: 1,
                      color: "#00000080",
                      fontSize: localFontSize.p2,
                    }}
                  >
                    {point}
                  </Typography>
                </li>
              )
            )}
          </ul>
          <br />
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            A qualified legal advisor can help interpret complex laws, identify
            risks, and guide you toward the most effective solution.
          </Typography>
          <br />
          <Typography
            sx={{
              mt: 4,
              fontWeight: 500,
              color: "#1A1A1A",
              fontFamily: "Playfair Display !important",
              fontSize: localFontSize.h3,
            }}
          >
            The Role of Legal Professionals in Safeguarding Your Rights{" "}
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Legal professionals play a crucial role in protecting your rights.
            They provide expert advice, represent your interests, and ensure
            that legal processes are followed correctly. Whether through
            negotiation, mediation, or litigation, a solicitor helps you
            navigate the legal system with confidence.
            <br />
            <br />
            Having professional legal support ensures that your rights are not
            only understood but also enforced in the most effective way
            possible.
          </Typography>
          <br />
          <Typography
            sx={{
              mt: 4,
              fontWeight: 500,
              color: "#1A1A1A",
              fontFamily: "Playfair Display !important",
              fontSize: localFontSize.h3,
            }}
          >
            Final Thoughts
          </Typography>
          <Typography
            sx={{ mt: 1, color: "#9A9A9A", fontSize: localFontSize.p2 }}
          >
            Understanding and protecting your legal rights is an essential part
            of personal and professional responsibility. Legal knowledge
            empowers you, protects your interests, and helps you make informed
            decisions in challenging situations. By staying informed, acting
            early, and seeking professional advice when needed, you can
            safeguard your rights and move forward with confidence.
            <br />
            <br />
            If you are facing a legal issue or simply want to better understand
            your rights, consulting a trusted legal professional is the first
            step toward effective protection.
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
      </Box>
    </>
  );
}
