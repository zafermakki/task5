import React from "react";
import { Typography, Grid, Divider } from "@mui/material";

const ProfileInfo = () => {
  return (
    <>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Personal Information
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography color="text.secondary">Full Name</Typography>
          <Typography fontWeight="medium">Zafer Makki</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography color="text.secondary">Email</Typography>
          <Typography fontWeight="medium">
            zafer@email.com
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography color="text.secondary">Role</Typography>
          <Typography fontWeight="medium">
            Frontend Developer
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography color="text.secondary">Country</Typography>
          <Typography fontWeight="medium">
            ALEPPO
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileInfo;
