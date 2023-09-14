import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";

export const MobileBox = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const TabletBox = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
}));

export const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

export const BurgerButton = styled(Button)`
  padding-left: 0.5rem;
  justify-content: flex-start;
`;

export const DrawerHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "1.5rem 0.8rem",
  gap: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1.5rem 0.5rem",
  },
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  maxWidth: "15rem",
  width: "90%",
  padding: "0 0.75rem 0 1rem",
  borderRadius: "0.5rem",
  height: "3rem",
  margin: "0 auto",

  "& .MuiButtonBase-root": {
    padding: 0,
    width: "100%",
  },

  "& .MuiButtonBase-root:hover": {
    backgroundColor: "transparent",
  },

  "&.active": {
    background: theme.palette.primary.main,
    // borderBottom: "1px solid black",
  },
}));

export const StyledCollapse = styled(Collapse)(({}) => ({
  display: "none !important",
  boxSizing: "border-box",
  maxWidth: "15rem",
  width: "90%",
  padding: "0",
  borderRadius: "0.5rem",
  height: "3rem",
  margin: "0 auto",

  "&.isNotCollapsed": {
    display: "block !important",
    padding: "0.8125rem 1.75rem 0.8125rem 2rem",
  },
}));

export const SublistBtn = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: "0.875rem",
  fontWeight: "400",
  lineHeight: "140%",
  color: theme.palette.grey[700],
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",

  "&.isActive": {
    color: theme.palette.primary.dark,
    fontWeight: "bold",
  },
}));

export const ListItemText = styled(Typography)(({ theme }) => ({
  lineHeight: "140%",
  fontWeight: 700,
  fontSize: "16px",
  color: theme.palette.primary[100],
  "&.active": {
    color: "white",
  },
}));

export const BulletPoint = styled("span")(({ theme }) => ({
  width: "0.5rem",
  height: "0.5rem",
  backgroundColor: theme.palette.grey[400],
  borderRadius: "50%",

  "&.isActive": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const StyledIconsLabels = styled(Typography)(({ theme }) => ({
  // fontFamily: "Inter",
  fontSize: "10px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "140%",
  color: theme.palette.primary.dark,
}));
