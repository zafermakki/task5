import React from "react";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const ProfileActions = () => {
  const { t } = useTranslation();

  return (
    <Box mt={4} display="flex" gap={2} flexWrap="wrap">
      <Button
        variant="contained"
        color="primary"
        sx={{ px: 4 }}
      >
        {t("Edit_Profile")}
      </Button>

      <Button
        variant="outlined"
        color="error"
        sx={{ px: 4 }}
      >
        {t("Logout")}
      </Button>
    </Box>
  );
};

export default ProfileActions;
