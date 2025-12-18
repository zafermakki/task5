import React from "react";
import {
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { menuItems } from "../settingsData/settingsData";
import { useTranslation } from "react-i18next";

const SettingsSidebar = ({ active, setActive }) => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ borderRadius: 3 }}>
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.id}
            selected={active === item.id}
            onClick={() => setActive(item.id)}
          >
            <ListItemIcon
              sx={{
                color:
                  active === item.id
                    ? "primary.main"
                    : "text.secondary"
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={t(item.label)} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
};

export default SettingsSidebar;
