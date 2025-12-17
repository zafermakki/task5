import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Profile", path: "/profile" },
  { label: "Settings", path: "/settings" },
];

const Navbar = ({ setmyMOde }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const toggleMode = () => {
    setmyMOde((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold">
            MyApp
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={NavLink}
                to={item.path}
                sx={{
                  color: "white",
                  position: "relative",
                  "&.active::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "25%",
                    width: "50%",
                    height: "2px",
                    backgroundColor: "white",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* 🌙☀️ Toggle Theme Button */}
            <IconButton onClick={toggleMode} color="inherit">
              {theme.palette.mode === "dark" ? (
                <WbSunnyIcon sx={{ color: "yellow" }} />
              ) : (
                <DarkModeIcon />
              )}
            </IconButton>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "inherit" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.path}
                component={NavLink}
                to={item.path}
                sx={{
                  color: "inherit",
                  "&.active": {
                    backgroundColor: "rgba(0,0,0,0.08)",
                    fontWeight: "bold",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}

            {/* 🌙☀️ Toggle Theme (Mobile) */}
            <ListItem button onClick={toggleMode}>
              <IconButton>
                {theme.palette.mode === "dark" ? (
                  <WbSunnyIcon sx={{ color: "orange" }} />
                ) : (
                  <DarkModeIcon />
                )}
              </IconButton>
              <ListItemText
                primary={
                  theme.palette.mode === "dark"
                    ? "Light Mode"
                    : "Dark Mode"
                }
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
