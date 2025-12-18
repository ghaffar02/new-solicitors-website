"use client";
import React, { useState } from "react";
import { Box, Button as MuiButton, CircularProgress } from "@mui/material";
import CustomInputField from "./CustomInputField";
import { localFontSize } from "@/app/utils/themes";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import svgs from "@/_assets/svgs";
import Image from "next/image";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  subject: string;
}

export default function ContactUsForm() {
  const formGap = { gap: { xs: "20px", md: "30px" } };
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/contactus", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response?.status === 200) {
        toast.success("Email sent successfully!");
        reset();
      } else {
        toast.error(`Failed to send email: ${response?.data?.error}`);
      }
    } catch (error) {
      console.error(error, "error");
      toast.error("Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  const onError = (formErrors: unknown) => {
    console.log("Form Errors:", formErrors);
    toast.error("Please fill all required fields correctly.");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit, onError)}
      sx={{
        display: "flex",
        gap: formGap.gap,
        flexDirection: "column",
      }}
    >
      {/* Form Fields */}
      <Box
        sx={{
          display: "flex",
          gap: formGap.gap,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <CustomInputField
          inputLabel="Your Name"
          inputType="text"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <CustomInputField
          inputLabel="Email Address"
          inputType="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <CustomInputField
          inputLabel="Phone Number"
          inputType="text"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^[0-9]+$/,
              message: "Phone number must contain digits only",
            },
          })}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: formGap.gap,
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-end" },
        }}
      >
        <CustomInputField
          inputLabel="Message"
          inputType="text"
          multiline
          {...register("message", { required: "Message is required" })}
          error={!!errors.message}
          helperText={errors.message?.message}
        />
        <CustomInputField
          inputLabel="Subject"
          inputType="text"
          {...register("subject", { required: "Subject is required" })}
          error={!!errors.subject}
          helperText={errors.subject?.message}
        />
      </Box>

      {/* Send Button */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <MuiButton
          type="submit"
          disabled={loading}
          sx={{
            backgroundColor: "#074592",
            color: "#FFFFFF",
            fontSize: localFontSize.p2,
            fontWeight: "500",
            textTransform: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            padding: { xs: "12px 24px", md: "15px 30px" },
            borderRadius: "0px",
            minWidth: { xs: "150px", md: "180px" },
            "&:hover": {
              backgroundColor: "#0A2D5E",
            },
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "#FFFFFF" }} />
          ) : (
            <>
              Send
              <Image src={svgs.arrowWhite} alt="arrow" height={20} width={20} />
            </>
          )}
        </MuiButton>
      </Box>
    </Box>
  );
}
