import React from "react";
import { Typography, Divider, Box, Switch } from "@mui/material";
import { useTranslation } from "react-i18next";

const SettingsSection = ({ title, options }) => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        {t(title)}
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {options.map((item, index) => (
        <Box
          key={index}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography>{t(item.label)}</Typography>
          <Switch defaultChecked={item.checked} />
        </Box>
      ))}
    </>
  );
};

export default SettingsSection;
