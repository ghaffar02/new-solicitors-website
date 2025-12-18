import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { localFontSize } from "@/app/utils/themes";
import Image from "next/image";

const Button: React.FC<{
  text: React.ReactNode;
  type?: ButtonProps["type"];
  disabled?: boolean;
  sx?: ButtonProps["sx"];
  icon?: string;
  iconHeight?: number;
  iconWidth?: number;
  onClick?: () => void;
}> = ({
  sx,
  text,
  type,
  disabled = false,
  icon,
  iconHeight = 24,
  iconWidth = 24,
  onClick = () => {},
}) => {
  return (
    <MuiButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      sx={{
        backgroundColor: "transparent",
        width: "178px",
        color: "#074592",
        fontSize: localFontSize.p2,
        border: "2px solid #074592",
        fontWeight: "500",
        textTransform: "none",
        display: "flex",
        alignItems: "center",
        padding: "15px",
        borderRadius: "10px",
        ...sx,
      }}
    >
      {text}{" "}
      {icon && (
        <Image
          src={icon}
          alt="bluearrow"
          height={iconHeight}
          width={iconWidth}
        />
      )}
    </MuiButton>
  );
};

export default Button;
