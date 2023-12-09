import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { AppRouter } from "./routers";
import { theme } from "./constants";
import { SnackbarProvider } from "notistack";
function App() {
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
