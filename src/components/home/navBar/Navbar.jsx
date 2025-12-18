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
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Profile", path: "/profile" },
  { label: "Settings", path: "/settings" },
];

const Navbar = ({ setmyMOde }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const toggleMode = () => {
    setmyMOde((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold">
          {t("MyApp")}
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
                {t(item.label)}
              </Button>
              
            ))}
            <Box sx={{ display: "flex", gap: 1 }}>
            <Button
                variant="contained"
                size="small"
                onClick={() => changeLanguage("ar")}
              >
                AR
              </Button>

              <Button
                variant="contained"
                size="small"
                onClick={() => changeLanguage("en")}
              >
                EN
              </Button>
            </Box>


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
      <Drawer
        anchor={i18n.language === "ar" ? "left" : "right"}
        open={open}
        onClose={toggleDrawer(false)}
      >
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
                <ListItemText primary={t(item.label)} />
              </ListItem>
            ))}
            <ListItem>
              <ListItemText onClick={() => changeLanguage("ar")}>
                AR
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText onClick={() => changeLanguage("en")}>
                EN
              </ListItemText>
            </ListItem>



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
