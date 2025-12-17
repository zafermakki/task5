import { createTheme } from "@mui/material";

const muiTheme = (mode, isRTL) =>
  createTheme({
    palette: {
      mode,
    },
    direction: isRTL ? "rtl" : "ltr",
  });

export default muiTheme;
