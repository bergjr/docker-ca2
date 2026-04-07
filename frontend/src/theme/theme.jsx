import { createTheme, ThemeProvider } from "@mui/material/styles";

 const theme = createTheme({
  palette: {
    primary: { main: "#FFFFFF", dark: "#720101" },
    secondary: { main: "#9c27b0" },
  },
  typography: {
    fontFamily: {primary: "DynaPuff", systemUi: "system-ui"},
  },
  spacing: 8, // base spacing unit
});

export default theme;
