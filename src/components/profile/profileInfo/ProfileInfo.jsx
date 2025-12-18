import React from "react";
import { Typography, Grid, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

const ProfileInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        {t("Personal_Information")}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography color="text.secondary">{t("Full_Name")}</Typography>
          <Typography fontWeight="medium">{t("Zafer_Makki")}</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography color="text.secondary">{t("Email")}</Typography>
          <Typography fontWeight="medium">
            zafer@email.com
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography color="text.secondary">{t("Role")}</Typography>
          <Typography fontWeight="medium">
            {t("Frontend_Developer")}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography color="text.secondary">{t("Country")}</Typography>
          <Typography fontWeight="medium">
            {t("Aleppo")}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileInfo;
