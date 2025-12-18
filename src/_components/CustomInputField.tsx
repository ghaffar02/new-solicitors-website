"use client";
import React, { forwardRef } from "react";
import { TextField, Box, FormLabel } from "@mui/material";
import { localFontSize } from "@/app/utils/themes";

interface CustomInputFieldProps {
  label?: string;
  inputLabel?: string;
  inputType?: string;
  multiline?: boolean;
  rows?: number;
  error?: boolean;
  helperText?: string;
}

const CustomInputField = forwardRef<
  HTMLInputElement,
  CustomInputFieldProps & React.ComponentPropsWithoutRef<typeof TextField>
>(
  (
    {
      label,
      inputLabel,
      inputType = "text",
      multiline = false,
      rows = 1,
      error = false,
      helperText = "",
      ...rest
    },
    ref
  ) => {
    return (
      <Box sx={{ width: "100%" }}>
        {label && (
          <FormLabel
            sx={{
              color: "#9A9A9A",
              fontSize: localFontSize.p1,
              mb: "8px",
              display: "block",
            }}
          >
            {label}
          </FormLabel>
        )}
        <TextField
          fullWidth
          type={inputType}
          placeholder={inputLabel}
          variant="standard"
          multiline={multiline}
          rows={rows}
          error={error}
          helperText={helperText}
          InputProps={{
            sx: {
              color: "#9A9A9A",
              fontSize: localFontSize.p1,
              "&::placeholder": {
                color: "#9A9A9A",
                opacity: 1,
              },
            },
          }}
          inputProps={{
            sx: {
              color: "#9A9A9A",
              fontSize: localFontSize.p1,
              "&::placeholder": {
                color: "#9A9A9A",
                opacity: 1,
              },
            },
          }}
          sx={{
            "& .MuiInputBase-input": {
              fontSize: localFontSize.p1,
              color: "#9A9A9A",
              padding: { xs: "0 0 20px 10px", md: "0 0 30px 10px" }, // top right bottom left
              "&::placeholder": {
                color: "#9A9A9A",
                opacity: 1,
              },
            },
            "& .MuiInputBase-inputMultiline": {
              paddingTop: { xs: "0px", md: "0px" },
              paddingBottom: { xs: "20px", md: "30px" },
            },
            "& .MuiFormHelperText-root": {
              fontSize: localFontSize.p4,
            },
            "& .MuiInput-underline": {
              "&:before": {
                borderBottom: "1px solid #1A1A1A",
              },
              "&:after": {
                borderBottom: "1px solid #1A1A1A",
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottom: "1px solid #1A1A1A",
              },
            },
          }}
          inputRef={ref}
          {...rest}
        />
      </Box>
    );
  }
);

CustomInputField.displayName = "CustomInputField";
export default CustomInputField;
