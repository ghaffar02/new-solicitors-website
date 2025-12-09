"use client";
import React, { memo } from "react";
import { globalFontSize } from "@/app/utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import ClientsExperiencesCard from "../_components/ClientsExperiencesCard";
import Slider from "react-slick";

function ClientsExperiences() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2183,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    customPaging: () => <div className="custom-dot"></div>,
    appendDots: (dots: React.ReactNode) => (
      <ul data-aos="fade-up" data-aos-duration="500" className="custom-dots">
        {dots}
      </ul>
    ),
  };

  const ClientsExperiences = [
    {
      name: "Iqraa Batool",
      date: "2024-02-02",
      quote:
        "Fantastic experience dealing with Arfan and his team. Thank you for all your help. Easy to use, friendly staff, recommend highly.",
      clientImage:
        "https://lh3.googleusercontent.com/a/ACg8ocJLAeIfIcgfmxCqvcFMO3k4YpFpWsPEGQd6_8u0rYzY=s120-c-rp-mo-br100",
    },
    {
      name: "Gul Yshak",
      date: "2023-12-07",
      quote:
        "Defo recommend to others one of the best solicitors in Rotherham helps out a lot 100% recommended",
      clientImage:
        "https://lh3.googleusercontent.com/a/ACg8ocIel0gDfZwsV7O_Fo--mLFAwEip-o_QwMiEFz3IJHrx=s120-c-rp-mo-br100",
    },
    {
      name: "Aneshia Bostan",
      date: "2023-12-04",
      quote:
        "Big thank you to Waqas Farid and the rest of Conquest Law for dealing with my dad’s taxi badge hearing quickly and efficiently. We got the result we wanted and we are extremely happy with their service. Would highly recommend!",
      clientImage:
        "https://lh3.googleusercontent.com/a/ACg8ocK6nZZHqQlFFL-iBw9fHahfDbD29FU9IM31Gog8asEu=s120-c-rp-mo-br100",
    },
    {
      name: "Mohammed Khan",
      date: "2023-11-28",
      quote:
        "Been going through three years of hell, but my solicitor Hussen did a brilliant job in my case with his support and legal advice. Would definitely use the them again. ALL I can say is well done to you and everyone involved in my case. Thank you…",
      clientImage:
        "https://lh3.googleusercontent.com/a/ACg8ocKdhvaIeTHc9AnP9M7F4NKSjneomiNV57jUwv6Fybck=s120-c-rp-mo-br100",
    },
    {
      name: "Asif Akhtar",
      date: "2023-11-14",
      quote:
        "Was a pleasure dealing with Arfan.Great customer service, friendly staff, on point with all the documents for the lease. Highly recommended",
      clientImage:
        "https://lh3.googleusercontent.com/a/ACg8ocJv7M92ztL_Rc4uGMyYwfOIrb2vUJrgPz-3LoDj5wnx=s120-c-rp-mo-br100",
    },
    {
      name: "Ateeq Rafiq",
      date: "2023-11-10",
      quote:
        "Fantastic service from arfaan and the team, professional service from start to finish, highly recommended:)",
      clientImage:
        "https://lh3.googleusercontent.com/a/ACg8ocJsD4nps8ZhxE-egA4etcouYxpxyi6cNU5ZLUiVrbvq=s120-c-rp-mo-br100",
    },
    {
      name: "sarmad Aslam",
      date: "2023-11-06",
      quote:
        "Excellent service. Very friendly and approachable staff. Would highly recommend!",
      clientImage:
        "https://lh3.googleusercontent.com/a/ACg8ocI9RVF61if0j04fLQhXFxS1AOrCNx7aNgotxkXGwyU=s120-c-rp-mo-br100",
    },
    {
      name: "Kaleem Khalil",
      date: "2023-11-01",
      quote:
        "Brilliant service from start to finish thank you so much for your honest advice much appreciated would highly recommend",
      clientImage:
        "https://lh3.googleusercontent.com/a/ACg8ocKE8LOPrLi6RUC2-9jNxOrxQdGKMsacqKDgyvJy0kK8=s120-c-rp-mo-ba2-br100",
    },
    {
      name: "Kash Walayat",
      date: "2023-10-28",
      quote:
        "Arfaan did a fantastic job of completing the purchase of my property. He was always available to help and assist.",
      clientImage:
        "https://lh3.googleusercontent.com/a/ACg8ocIrKLZpiXHC-0i4y90p6ryzMduz2e2uJxH17togxxQY=s120-c-rp-mo-br100",
    },
    {
      name: "Adnan Razzaq",
      date: "2023-10-11",
      quote:
        "Very Fast and Excellent service, Good mannered people. Especially Irfan bhai, thank you very much for all your help and support.",
      clientImage:
        "https://lh3.googleusercontent.com/a/ACg8ocK2qQMHdXz8PO1dPoGIAZOZ7YyEHCRJCpHevmcTc1Iu=s120-c-rp-mo-br100",
    },
  ];

  return (
    <Box
      sx={{
        background: "#5656561A",
        padding: {
          xs: "40px 20px",
          sm: "60px 30px",
          md: "80px 50px",
          lg: "100px 100px",
        },
        borderRadius: { xs: "40px", md: "80px" },
        backgroundColor: "#5656561A",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "1440px", xxl: "80vw" },
          width: "100%",
          margin: "auto",
        }}
      >
        <Grid sx={{ rowGap: "30px" }} container spacing={2}>
          <Grid
            data-aos="fade-right"
            data-aos-duration="500"
            item
            xs={12}
            md={4}
            lg={3}
          >
            {/* Content for first Grid item */}
            <Box>
              <Typography
                sx={{
                  fontSize: globalFontSize.h2,
                  color: "#565656",
                  fontWeight: "700",
                  paddingRight: { xs: "unset", md: "20px" },
                  textAlign: { xs: "center", md: "unset" },
                }}
              >
                Read Our Clients’ Experiences.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Box>
              <Slider {...settings}>
                {ClientsExperiences.map((testimonial, index) => (
                  <ClientsExperiencesCard
                    key={index}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    date={testimonial.date}
                    clientImage={testimonial.clientImage}
                  />
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default memo(ClientsExperiences);
