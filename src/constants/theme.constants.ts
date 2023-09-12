import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    50?: string;
    100?: string;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title1?: true;
    title2?: true;
    body3?: true;
    body4?: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#84754D",
      light: "#B5AC94",
      dark: "#423A26",
      50: "#B5AC94",
      100: "#84754D",
    },
    secondary: {
      main: "#3366FF",
      light: "#D6E4FF",
      dark: "#091A7A",
      50: "#84A9FF",
      100: "#1939B7",
    },
    info: {
      main: "#00B8D9",
      light: "#CAFDF5",
      dark: "#003768",
      50: "#61F3F3",
      100: "#006C9C",
    },
    success: {
      main: "#36B37E",
      light: "#D8FBDE",
      dark: "#0A5554",
      50: "#86E8AB",
      100: "#1B806A",
    },
    warning: {
      main: "#FFAB00",
      light: "#FFF5CC",
      dark: "#7A4100",
      50: "#FFD666",
      100: "#B76E00",
    },
    error: {
      main: "#FF5630",
      light: "#FFE9D5",
      dark: "#7A0916",
      50: "#FFAC82",
      100: "#B71D18",
    },
    grey: {
      100: "#F9FAFB",
      200: "#F4F6F8",
      300: "#DFE3E8",
      400: "#C4CDD5",
      500: "#919EAB",
      600: "#637381",
      700: "#454F5B",
      800: "#212B36",
      900: "#161C24",
    },
  },
  typography: {
    fontFamily: ["Public Sans", "sans-serif"].join(","),
    h1: {
      fontSize: "48px",
    },
    h2: {
      fontSize: "40px",
    },
    h3: {
      fontSize: "32px",
    },
    h4: {
      fontSize: "32px",
    },
    h5: {
      fontSize: "28px",
    },
    h6: {
      fontSize: "24px",
    },
    title1: {
      fontSize: "19px",
    },
    title2: {
      fontSize: "16px",
    },
    body1: {
      fontSize: "14px",
    },
    body2: {
      fontSize: "13px",
    },
    body3: {
      fontSize: "11px",
    },
    body4: {
      fontSize: "10px",
    },
  },
});

export { theme };
