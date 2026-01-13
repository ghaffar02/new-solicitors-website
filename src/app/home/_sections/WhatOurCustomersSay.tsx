"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Rating } from "@mui/material";
import { localFontSize, sectionPadding } from "@/app/utils/themes";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomArrow from "@/_components/CustomArrow";

// Google Review interface
interface GoogleReview {
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  rating: number;
  dateISO: string;
  text: string;
}

// API Response interface
interface ReviewsResponse {
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
}

// Testimonial Card props interface
interface TestimonialCardProps {
  review: GoogleReview;
}

// TestimonialCard component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ review }) => {
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateISO: string) => {
    try {
      return new Date(dateISO).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });
    } catch {
      return "";
    }
  };

  const truncateText = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <Box sx={{ margin: "auto", width: "fit-content" }}>
      <Box
        sx={{
          background: "#FFFFFF",
          borderRadius: "8px",
          padding: "20px",
          marginX: { xs: "5px", sm: "10px", md: "15px" },
          marginTop: { xs: "10px", sm: "0px" },
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          height: "100%",
          textAlign: "left",
          maxWidth: "450px",
          minHeight: "300px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.02)",
          },
        }}
      >
        {/* Rating */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Rating
            value={review.rating}
            readOnly
            size="small"
            sx={{
              "& .MuiRating-iconFilled": {
                color: "#FFD700",
              },
            }}
          />
          <Typography
            sx={{
              color: "#666",
              fontSize: "14px",
            }}
          >
            {formatDate(review.dateISO)}
          </Typography>
        </Box>

        {/* Quote */}
        <Typography
          sx={{
            color: "#333",
            fontSize: localFontSize.p4,
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          &ldquo;{truncateText(review.text)}&rdquo;
        </Typography>

        {/* Customer Info */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Profile Picture */}
          <Box
            sx={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              backgroundColor: "#f0f0f0",
            }}
          >
            {review.authorPhotoUri && !imageError ? (
              <Image
                src={review.authorPhotoUri}
                alt={review.authorName}
                width={50}
                height={50}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                onError={() => setImageError(true)}
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#074592",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                {review.authorName.charAt(0).toUpperCase()}
              </Box>
            )}
          </Box>

          {/* Name */}
          <Box>
            <Typography
              sx={{
                color: "#1A1A1A",
                fontSize: localFontSize.p3,
                fontWeight: "600",
              }}
            >
              {review.authorName}
            </Typography>
            <Typography
              sx={{
                color: "#074592",
                fontSize: "12px",
              }}
            >
              Google Review
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default function WhatOurCustomersSay() {
  const sliderRef = useRef<Slider>(null);
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch Google reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/places-reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data: ReviewsResponse = await response.json();
        setReviews(data.reviews || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load reviews");
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Loading state
  if (loading) {
    return (
      <Box
        sx={{
          background: "#fff",
          padding: sectionPadding,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <Typography>Loading reviews...</Typography>
      </Box>
    );
  }

  // Error state
  if (error) {
    return (
      <Box
        sx={{
          background: "#fff",
          padding: sectionPadding,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <Typography color="error">Error loading reviews: {error}</Typography>
      </Box>
    );
  }

  // No reviews state
  if (reviews.length === 0) {
    return (
      <Box
        sx={{
          background: "#fff",
          padding: sectionPadding,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "400px",
        }}
      >
        <Typography>No reviews available</Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        background: "#fff",
        padding: sectionPadding,
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "auto",
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            marginBottom: { xs: "30px", md: "50px" },
            gap: { xs: "20px", md: "40px" },
          }}
        >
          {/* Left Side - Heading and Description */}
          <Box sx={{ maxWidth: "700px" }}>
            <Typography
              sx={{
                color: "#1A1A1A",
                fontSize: localFontSize.h2,
                fontWeight: "600",
                fontFamily: "'PlayfairDisplay', serif !important",
                marginBottom: { xs: "12px", md: "16px" },
                textTransform: "capitalize",
              }}
            >
              what our clients say
            </Typography>
            <Typography
              sx={{
                color: "#9A9A9A",
                fontSize: localFontSize.p2,
              }}
            >
              Discover how our skilled legal team has helped clients overcome
              complex challenges and achieve favorable results.
            </Typography>
          </Box>

          {/* Right Side - Arrow Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: "12px",
            }}
          >
            <CustomArrow
              onClick={handlePrev}
              sx={{
                position: "relative",
                bottom: "unset",
                transform: "rotate(180deg)",
              }}
            />
            <CustomArrow
              onClick={handleNext}
              sx={{
                position: "relative",
                bottom: "unset",
              }}
            />
          </Box>
        </Box>

        {/* Cards Grid */}
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review, index) => (
            <Box sx={{}} key={index}>
              <TestimonialCard review={review} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
