import React from "react";
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";

const Features = () => {
  const features = [
    "Responsive Design",
    "Material UI",
    "Clean Code",
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4}>
        {features.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: "100%", borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {item}
                </Typography>
                <Typography sx={{ mt: 1, opacity: 0.7 }}>
                  Professional layout for all screens.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Features;
