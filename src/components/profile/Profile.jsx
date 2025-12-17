import React from "react";
import { Box, Paper, Grid } from "@mui/material";
import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileInfo from "./profileInfo/ProfileInfo";
import ProfileActions from "./profileActions/ProfileActions";

const Profile = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 900,
          width: "100%",
          p: { xs: 3, md: 5 },
          borderRadius: 3
        }}
      >
        <Grid container spacing={4}>
          <ProfileHeader />
          <Grid item xs={12} md={8}>
            <ProfileInfo />
            <ProfileActions />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;
