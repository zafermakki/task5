import React from "react";
import {
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import { menuItems } from "../settingsData/settingsData";

const SettingsSidebar = ({ active, setActive }) => {
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
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
};

export default SettingsSidebar;
