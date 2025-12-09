"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Grid, SxProps, Theme } from "@mui/material";
import HeroHomeCard from "./HeroHomeCard";
import svgs from "@/_assets/svgs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface LegalServicesTabsProps {
  reverseOrder?: boolean;
  image: StaticImageData;
  cardsData?: {
    image: StaticImageData;
    title: string;
    description: string;
    path: string;
  }[];
}

const LegalServicesTabsComponent: React.FC<LegalServicesTabsProps> = ({
  reverseOrder = false,
  image,
  cardsData,
}) => {
  const router = useRouter();
  const [centerIndex, setCenterIndex] = useState(0);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (_: number, next: number) => setCenterIndex(next),
    nextArrow: (
      <CustomSlider
        styles={{
          left: "50%",
          transform: "rotate(180deg)",
          bottom: "-20px",
        }}
      />
    ),
    prevArrow: (
      <CustomSlider
        styles={{
          left: "50%",
          transform: "translateX(-50%)",
          top: "-30px",
        }}
      />
    ),
  };

  return (
    <Grid
      container
      sx={{
        alignItems: "center",
        height: "auto",
        maxWidth: { xs: "1440px", xxl: "1536px" },
        margin: "auto",
      }}
    >
      {/* First Grid Item (Slider Section) */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          padding: { xs: "40px 0", sm: "50px 0", md: "50px 0", lg: "80px 0" },
          margin: "auto",
          order: reverseOrder ? 2 : 1,
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "600px", xl: "100%" },
            margin: "auto",
            position: "relative",
          }}
        >
          <Slider className="hero-home-slider" {...settings}>
            {cardsData?.map((card, index) => (
              <Box
                key={index}
                sx={{
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  opacity: index === centerIndex ? 1 : 0.4,
                  filter: index === centerIndex ? "none" : "blur(3px)",
                  transform: index === centerIndex ? "scale(1)" : "scale(0.9)",
                }}
                onClick={() => router.push(card.path)}
              >
                <HeroHomeCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Grid>

      {/* Second Grid Item (Image Section) */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          padding: { xs: "40px 20px", sm: "50px 30px", md: "50px", lg: "80px" },
          width: "100%",
          height: "100%",
          order: reverseOrder ? 1 : 2,
          display: { xs: "none", md: "block" },
        }}
      >
        <Box sx={{ overflow: "hidden" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              transition: "all 0.25s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "600px",
                margin: "auto",
                display: "block",
              }}
              src={image}
              alt="Legal Services Tab"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LegalServicesTabsComponent;

interface CustomSliderProps {
  styles?: SxProps<Theme>;
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ styles, onClick }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        cursor: "pointer",
        width: { xs: "30px", lg: "40px", xl: "50px" },
        height: "auto",
        zIndex: 2,
        ...styles,
      }}
      onClick={onClick}
    >
      <Image
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
        src={svgs.BlueSliderArrow}
        alt="SliderArrow"
      />
    </Box>
  );
};
