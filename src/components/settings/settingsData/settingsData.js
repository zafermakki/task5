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
    title: "Account_Settings",
    options: [
      { label: "Email_Notifications", checked: true },
      { label: "Account_Activity_Alerts" },
      { label: "Weekly_Reports", checked: true }
    ]
  },
  security: {
    title: "Security",
    options: [
      { label: "Two_Factor_Authentication" },
      { label: "Login_Alerts", checked: true },
      { label: "Device_Verification", checked: true }
    ]
  },
  appearance: {
    title: "Appearance",
    options: [
      { label: "Dark_Mode" },
      { label: "Compact_Layout" },
      { label: "Animations", checked: true }
    ]
  },
  privacy: {
    title: "Privacy",
    options: [
      { label: "Public_Profile", checked: true },
      { label: "Search_Engine_Indexing" },
      { label: "Data_Sharing" }
    ]
  }
};
