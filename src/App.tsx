import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { AppRouter } from "./routers";
import { theme } from "./constants";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
