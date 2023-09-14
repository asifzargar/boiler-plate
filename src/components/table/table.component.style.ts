import { Box, TableCell, Typography, styled } from "@mui/material";
const StyledHeadTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "14px",
  fontStyle: "normal",
  color: theme.palette.primary[100],
  padding: "30px 0 10px 0",
  lineHeight: 0,
  paddingLeft: "0.5rem",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "14px",
  fontStyle: "normal",
  lineHeight: "140%",
  color: "black",
  paddingLeft: "0.5rem",
}));

export { StyledHeadTableCell, StyledTableCell };
