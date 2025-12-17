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

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
              Build Modern React Apps
            </Typography>

            <Typography sx={{ mt: 2, opacity: 0.8 }}>
              Responsive and clean UI using Material UI.
            </Typography>

            <Button variant="contained" size="large" sx={{ mt: 4 }}>
              Get Started
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
