import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from "@mui/icons-material/Security";
import PaletteIcon from "@mui/icons-material/Palette";
import LockIcon from "@mui/icons-material/Lock";

export const menuItems = [
  { id: "account", label: "Account", icon: <PersonIcon /> },
  { id: "security", label: "Security", icon: <SecurityIcon /> },
  { id: "appearance", label: "Appearance", icon: <PaletteIcon /> },
  { id: "privacy", label: "Privacy", icon: <LockIcon /> }
];

export const settingsContent = {
  account: {
    title: "Account Settings",
    options: [
      { label: "Email Notifications", checked: true },
      { label: "Account Activity Alerts" },
      { label: "Weekly Reports", checked: true }
    ]
  },
  security: {
    title: "Security",
    options: [
      { label: "Two-Factor Authentication" },
      { label: "Login Alerts", checked: true },
      { label: "Device Verification", checked: true }
    ]
  },
  appearance: {
    title: "Appearance",
    options: [
      { label: "Dark Mode" },
      { label: "Compact Layout" },
      { label: "Animations", checked: true }
    ]
  },
  privacy: {
    title: "Privacy",
    options: [
      { label: "Public Profile", checked: true },
      { label: "Search Engine Indexing" },
      { label: "Data Sharing" }
    ]
  }
};
