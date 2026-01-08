"use client";
import React, { forwardRef } from "react";
import { Box, TextField, FormLabel } from "@mui/material";
import { localFontSize } from "@/app/utils/themes";

interface CustomInputFieldProps {
  label: string;
  inputLabel: string;
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
        <FormLabel
          sx={{
            color: "#074592",
            fontSize: localFontSize.p2,
            mb: { xs: "10px", md: "15px" },
            display: "block",
          }}
        >
          {label}
        </FormLabel>

        <TextField
          fullWidth
          type={inputType}
          label={inputLabel}
          variant="outlined"
          multiline={multiline}
          rows={rows}
          error={error}
          helperText={helperText}
          InputLabelProps={{
            sx: {
              color: "#00000080",
              fontSize: localFontSize.p3,
            },
          }}
          inputProps={{
            sx: {
              color: "#00000080",
              fontSize: localFontSize.p3,
            },
          }}
          sx={{
            // fallback: target the input element as well
            "& .MuiInputBase-input": {
              fontSize: localFontSize.p3,
            },
            "& .MuiFormHelperText-root": {
              fontSize: localFontSize.p4,
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#0D3B7A",
                borderRadius: "8px",
              },
              "&:hover fieldset": {
                borderColor: "#0A2D5E",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#074592",
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
