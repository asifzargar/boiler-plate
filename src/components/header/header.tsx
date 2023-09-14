import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";

const StyledAppBar = styled("div")(({}) => ({
  padding: "20px",
  boxShadow: "none",
}));

const SearchAppBar = () => {
  return (
    <StyledAppBar
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        boxShadow: "none",
        width: `100%`,
        boxSizing: "border-box",
        backdropFilter: "blur(10px)",
      }}
    >
      <TextField
        sx={{ width: "40%" }}
        placeholder="Search anything here"
        variant="outlined"
      />
      <Avatar src="/broken-image.jpg" />
    </StyledAppBar>
  );
};
export default SearchAppBar;
