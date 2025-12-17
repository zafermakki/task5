import { ThemeProvider, CssBaseline } from "@mui/material";
import muiTheme from "./muiTheme";

const ThemeWrapper = ({ mode, isRTL, children }) => {
  const theme = muiTheme(mode, isRTL);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
