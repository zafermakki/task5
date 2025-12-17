import React from "react";
import { Typography, Divider, Box, Switch } from "@mui/material";

const SettingsSection = ({ title, options }) => {
  return (
    <>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        {title}
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
          <Typography>{item.label}</Typography>
          <Switch defaultChecked={item.checked} />
        </Box>
      ))}
    </>
  );
};

export default SettingsSection;
