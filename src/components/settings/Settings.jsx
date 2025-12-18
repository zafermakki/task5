import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import SettingsSidebar from "./settingsSidebar/SettingsSidebar";
import SettingsContent from "./settingsContent/SettingsContent";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const [active, setActive] = useState("account");
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 2, md: 4 },
        py: 3
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={3} sx={{color: "#2196f3"}}>
        {t("Settings")}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <SettingsSidebar
            active={active}
            setActive={setActive}
          />
        </Grid>

        <Grid item xs={12} md={9}>
          <SettingsContent active={active} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
