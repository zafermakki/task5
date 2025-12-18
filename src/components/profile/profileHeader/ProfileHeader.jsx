import React from "react";
import { Grid, Avatar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ProfileHeader = () => {
  const { t } = useTranslation();
  return (
    <Grid
      item
      xs={12}
      md={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: 140,
          height: 140,
          mb: 2
        }}
      />

      <Typography variant="h6" fontWeight="bold">
        {t("Zafer_Makki")}
      </Typography>

      <Typography color="text.secondary">
        zafer@email.com
      </Typography>
    </Grid>
  );
};

export default ProfileHeader;
