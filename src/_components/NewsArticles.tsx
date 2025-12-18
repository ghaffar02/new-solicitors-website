"use client";
import React, { memo, useState } from "react";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { localFontSize } from "@/app/utils/themes";
import Button from "@/_components/Button";
import svgs from "@/_assets/svgs";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import Image from "next/image";

const boxData = [
  {
    title: "Legal Advice",
    heading: "Bankruptcy Order Annulled",
    description:
      "Our Litigation Team represented a client who succeeded in his Bankruptcy Annulment Application. The Applicant was made bankrupt.",
    bgImage: "./newsArticles/bgBar.webp",
    path: "/bankruptcy-order-annulled",
  },
  {
    title: "Advocacy, Legal Advice",
    heading: "Taxi Licence Appeal Win",
    description:
      "This morning our team represented a Rotherham private hire taxi driver who won his taxi licence appeal at.",
    bgImage: "./newsArticles/bgBar2.webp",
    path: "/taxi-licence-appeal-win",
  },
  {
    title: "Legal Advice",
    heading:
      "Successful return of cash following seizure and detention under POCA 2002",
    description:
      "Greater Manchester Police have agreed to return several thousand pounds to our clients after it was seized at.",
    bgImage: "./newsArticles/bgBar3.webp",
    path: "/successful-return-of-cash-following-seizure-and-detention-under-poca-2002",
  },
  {
    title: "Legal Advice",
    heading: "Yorkshire “Nightmare” Zebra Crossing – A Victim of Entrapment",
    description: `Conquest Law Solicitors have successfully challenged South Yorkshire Police’s (SYP) attempted prosecution of a client pursued for allegedly driving without reasonable consideration to others at a “Nightmare” zebra crossing in South Yorkshire.`,
    bgImage: "./newsArticles/bgBar.webp",
    path: "/a-victim-entrapment-in-yorkshire",
  },
  {
    title: "Legal Advice",
    heading:
      "Beneficial Interest Claim – Proprietary Estoppel & Resulting Trust",
    description:
      "Successfully secured full property ownership for a client through claims of proprietary estoppel and resulting trust after decades of investment in a family home.",
    bgImage: "./newsArticles/bgBar3.webp",
    path: "/beneficial-interest-proprietary-estoppel",
  },
  {
    title: "Legal Advice",
    heading: "Dubai Courts Opens First Overseas Hub in London",
    description:
      "Dubai Courts opens first international hub in London, offering integrated services with Dubai Chambers to support global investors, entrepreneurs & businesses.",
    bgImage: "./newsArticles/bgBar4.webp",
    path: "/dubai-courts-opens-first-overseas-hub-in-london",
  },
  {
    title: "Legal Advice",
    heading: "Bankruptcy Order Annulled",
    description:
      "Our Litigation Team represented a client who succeeded in his Bankruptcy Annulment Application. The Applicant was made bankrupt.",
    bgImage: "./newsArticles/bgBar.webp",
    path: "/bankruptcy-order-annulled",
  },
  {
    title: "Advocacy, Legal Advice",
    heading: "Taxi Licence Appeal Win",
    description:
      "This morning our team represented a Rotherham private hire taxi driver who won his taxi licence appeal at.",
    bgImage: "./newsArticles/bgBar2.webp",
    path: "/taxi-licence-appeal-win",
  },
  {
    title: "Legal Advice",
    heading:
      "Successful return of cash following seizure and detention under POCA 2002",
    description:
      "Greater Manchester Police have agreed to return several thousand pounds to our clients after it was seized at.",
    bgImage: "./newsArticles/bgBar3.webp",
    path: "/successful-return-of-cash-following-seizure-and-detention-under-poca-2002",
  },
  {
    title: "Legal Advice",
    heading: "Yorkshire “Nightmare” Zebra Crossing – A Victim of Entrapment",
    description: `Conquest Law Solicitors have successfully challenged South Yorkshire Police’s (SYP) attempted prosecution of a client pursued for allegedly driving without reasonable consideration to others at a “Nightmare” zebra crossing in South Yorkshire.`,
    bgImage: "./newsArticles/bgBar.webp",
    path: "/a-victim-entrapment-in-yorkshire",
  },
  {
    title: "Legal Advice",
    heading:
      "Beneficial Interest Claim – Proprietary Estoppel & Resulting Trust",
    description:
      "Successfully secured full property ownership for a client through claims of proprietary estoppel and resulting trust after decades of investment in a family home.",
    bgImage: "./newsArticles/bgBar3.webp",
    path: "/beneficial-interest-proprietary-estoppel",
  },
  {
    title: "Legal Advice",
    heading: "Dubai Courts Opens First Overseas Hub in London",
    description:
      "Dubai Courts opens first international hub in London, offering integrated services with Dubai Chambers to support global investors, entrepreneurs & businesses.",
    bgImage: "./newsArticles/bgBar4.webp",
    path: "/dubai-courts-opens-first-overseas-hub-in-london",
  },
];

function NewsArticles() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleHover = (index: number | null) => {
    setHoveredIndex(index);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          lidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          lidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          dots: false,
          arrows: true,
          prevArrow: (
            <CustomArrow
              sx={{
                left: "calc(50% - 20px)",
                transform: "translateX(-50%) rotate(180deg)",
              }}
              imgSrc={svgs.whiteIcon}
            />
          ),
          nextArrow: (
            <CustomArrow
              sx={{
                left: "calc(50% + 20px)",
                transform: "translateX(-50%)",
              }}
              imgSrc={svgs.blackIcon}
            />
          ),
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: {
          xs: "30px 20px",
          sm: "50px 30px",
          md: "75px 50px",
          lg: "100px 100px",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "1440px", xxl: "1800px" },
          width: "100%",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "542px", xxl: "1440px" },
            width: "100%",
            margin: "0px auto",
          }}
        >
          <Typography
            data-aos="zoom-in"
            data-aos-duration="500"
            sx={{
              fontSize: localFontSize.h2,
              fontWeight: "600",
              textAlign: "center",
              color: "#565656",
            }}
          >
            Stay Informed with Latest News & Articles
          </Typography>
        </Box>
        <Box
          className="slider-container"
          sx={{
            maxWidth: { xs: "1440px", xxl: "1800px" },
            width: "100%",
            marginTop: { xs: "30px", md: "75px" },
            background: "rgba(86, 86, 86, 0.1)",
            borderRadius: "50px",
            padding: { xs: "40px 20px 60px 20px", sm: "40px 20px " },
          }}
        >
          <Slider {...settings}>
            {boxData.map((data, index) => (
              <Box
                data-aos="zoom-in"
                data-aos-duration="500"
                sx={{
                  position: "relative",
                  paddingX: "5px",
                  paddingBottom: "20px",
                }}
                key={index}
              >
                <Box
                  onClick={() => router.push(data.path)}
                  onMouseEnter={() => toggleHover(index)}
                  onMouseLeave={() => toggleHover(null)}
                  sx={{
                    backgroundImage:
                      hoveredIndex === index ? "none" : `url(${data.bgImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: { xs: "346px", xxl: "465px" },
                    maxWidth: { xs: "300px", xxl: "390px" },
                    width: "100%",
                    borderRadius: "20px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    marginX: "auto",
                    cursor: "pointer",
                    transition:
                      "background-color 0.4s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(120deg, #fff 0%, #fff 50%, #fff 50%)",
                      backgroundSize: "200%",
                    },
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "100%",
                      height: "100%",
                      zIndex: "1",
                      backgroundColor:
                        hoveredIndex === index ? "none" : "#00000080",
                      transition: "all 0.4s ease-in",
                    }}
                  ></Box>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: localFontSize.p4,
                      color: hoveredIndex === index ? "#B3B3B3" : "#858483",
                      transition: "color 0.3s ease-in-out",
                      position: "relative",
                      zIndex: "10",
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    className="heading-text"
                    sx={{
                      fontWeight: "500",
                      fontSize: localFontSize.p1,
                      color: hoveredIndex === index ? "#074592" : "#fff",
                      transition: "color 0.3s ease-in-out",
                      position: "relative",
                      zIndex: "10",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {data.heading}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: localFontSize.p3,
                      color: hoveredIndex === index ? "#B3B3B3" : "#858483",
                      transition: "color 0.3s ease-in-out",
                      position: "relative",
                      zIndex: "10",
                      display: "-webkit-box",
                      WebkitLineClamp: 6,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {data.description}
                  </Typography>
                  <Box
                    sx={{ position: "relative", zIndex: "10" }}
                    onClick={() => {
                      router.push("./news-detail");
                    }}
                  >
                    <Button
                      sx={{
                        fontSize: localFontSize.p4,
                        width: { xs: "120px", xxl: "150px" },
                        height: "auto",
                        border: "none",
                        justifyContent: "flex-start",
                        padding: "0px",
                        gap: "10px",
                        transition: "color 0.3s ease-in-out",
                        color: hoveredIndex === index ? "#074592" : "#fff",
                      }}
                      text={"Read More"}
                      icon={
                        hoveredIndex === index
                          ? svgs.BlueButtonArrow
                          : svgs.ButtonArrow
                      }
                      iconHeight={12}
                      iconWidth={12}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}

export default memo(NewsArticles);

type ArrowProps = {
  onClick?: () => void;
  sx?: SxProps<Theme>;
  imgSrc: StaticImageData;
  alt?: string;
};
export function CustomArrow({
  onClick,
  sx = {},
  imgSrc,
  alt = "arrow",
}: ArrowProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        bottom: "-35px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "auto",
        height: 34,
        cursor: "pointer",
        zIndex: 2,
        ...sx,
      }}
    >
      <Image
        style={{ objectFit: "contain", height: "100%", width: "100%" }}
        src={imgSrc as StaticImageData}
        alt={alt}
      />
    </Box>
  );
}
