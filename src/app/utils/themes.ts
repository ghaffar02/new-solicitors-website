import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2000,
    },
  },
});

export const localColors = {
  sideColor: "#fff",
};

export const localFontSize = {
  // headings
  h1: {
    xs: "32px",
    sm: "40px",
    md: "50px",
    lg: "64px",
  },
  h2: {
    xs: "28px",
    sm: "36px",
    md: "44px",
    lg: "48px",
  },
  h3: {
    xs: "24px",
    sm: "26px",
    md: "28px",
    lg: "32px",
  },

  h4: {
    xs: "18px",
    sm: "22px",
    md: "26px",
    lg: "28px",
  },
  // textual
  p1: { xs: "19px", md: "20px" },
  p2: { xs: "16px", md: "18px" },
  p3: { xs: "14px", lg: "16px" },
  p4: { xs: "13px", lg: "14px" },
  p5: "12px",
};

export const globalFontSize = {
  // headings
  h1: {
    xs: "32px",
    sm: "40px",
    md: "50px",
    lg: "64px",
  },
  h2: {
    xs: "28px",
    sm: "36px",
    md: "44px",
    lg: "48px",
  },
  h3: {
    xs: "24px",
    sm: "26px",
    md: "28px",
    lg: "32px",
  },

  h4: {
    xs: "18px",
    sm: "22px",
    md: "26px",
    lg: "28px",
  },
  // textual
  p1: { xs: "19px", md: "20px" },
  p2: { xs: "16px", md: "18px" },
  p3: { xs: "14px", lg: "16px" },
  p4: { xs: "13px", lg: "14px" },
  p5: "12px",
};

export const sectionPadding = {
  xs: "16px 60px",
  sm: "40px 60px",
  md: "60px 80px",
  lg: "100px",
};

export const sectionPaddingX = {
  xs: "60px",
  sm: "60px",
  md: "80px",
  lg: "100px",
};

export const sectionPaddingY = {
  xs: "16px",
  sm: "40px",
  md: "60px",
  lg: "100px",
};
