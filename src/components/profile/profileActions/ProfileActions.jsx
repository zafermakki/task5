import React from "react";
import { Box, Button } from "@mui/material";

const ProfileActions = () => {
  return (
    <Box mt={4} display="flex" gap={2} flexWrap="wrap">
      <Button
        variant="contained"
        color="primary"
        sx={{ px: 4 }}
      >
        Edit Profile
      </Button>

      <Button
        variant="outlined"
        color="error"
        sx={{ px: 4 }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default ProfileActions;
