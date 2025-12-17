import React from "react";
import { Paper } from "@mui/material";
import SettingsSection from "../settingsSection/SettingsSection";
import { settingsContent } from "../settingsData/settingsData";

const SettingsContent = ({ active }) => {
  const section = settingsContent[active];

  return (
    <Paper sx={{ p: { xs: 3, md: 4 }, borderRadius: 3 }}>
      <SettingsSection
        title={section.title}
        options={section.options}
      />
    </Paper>
  );
};

export default SettingsContent;
