import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "white",
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold">
              {t("Build_Modern_React_Apps")}
            </Typography>

            <Typography sx={{ mt: 2, opacity: 0.8 }}>
              {t("Responsive_and_clean_UI_using_Material_UI")}
            </Typography>

            <Button variant="contained" size="large" sx={{ mt: 4 }}>
              {t("Get_Started")}
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 300,
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 4,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
