import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box py={4} px={(isSmall && 4) || (isMedium && 6) || 8}>
      <Header />
      <Main />
    </Box>
  );
}

export default App;
