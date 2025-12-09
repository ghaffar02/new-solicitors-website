"use client";
import React, { useState } from "react";
import { Box, Button as MuiButton, CircularProgress } from "@mui/material";
import CustomInputField from "./CustomInputField";
import { globalFontSize } from "@/app/utils/themes";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
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
      subject: "",
      message: "",
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
        padding: { xs: "20px", md: "40px" },
        borderRadius: "20px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 50.3px 0px #00000040",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: formGap.gap,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <CustomInputField
          label="Name"
          inputLabel="Your Name"
          inputType="text"
          {...register("name", { required: "Name is required" })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <CustomInputField
          label="Phone"
          inputLabel="Your Phone"
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
        }}
      >
        <CustomInputField
          label="Email"
          inputLabel="Your Email"
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
          label="Subject"
          inputLabel="Subject"
          inputType="text"
          {...register("subject", { required: "Subject is required" })}
          error={!!errors.subject}
          helperText={errors.subject?.message}
        />
      </Box>

      <CustomInputField
        label="Message"
        inputLabel="Message"
        inputType="text"
        rows={6}
        multiline
        {...register("message", { required: "Message is required" })}
        error={!!errors.message}
        helperText={errors.message?.message}
      />

      <MuiButton
        type="submit"
        sx={{
          backgroundColor: "transparent",
          width: "100%",
          color: "#074592",
          fontSize: globalFontSize.p2,
          border: "2px solid #074592",
          fontWeight: "500",
          textTransform: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "15px",
          borderRadius: "10px",
          height: {
            xs: "55px",
            md: "62px",
            lg: "65px",
          },
        }}
      >
        {loading ? (
          <CircularProgress size={24} sx={{ color: "#074592" }} />
        ) : (
          "Submit"
        )}
      </MuiButton>
    </Box>
  );
}
