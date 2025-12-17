import { useEffect, useState } from "react";
import i18n from "../i18n";

export const useRTL = () => {
  const initialIsRTL =
    localStorage.getItem("isRTL") === "true" || i18n.language === "ar";

  const [isRTL, setIsRTL] = useState(initialIsRTL);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      const rtl = lng === "ar";
      setIsRTL(rtl);
      localStorage.setItem("isRTL", rtl);
      document.documentElement.setAttribute("dir", rtl ? "rtl" : "ltr");
    };

    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");

    i18n.on("languageChanged", handleLanguageChange);
    return () => i18n.off("languageChanged", handleLanguageChange);
  }, [isRTL]);

  return { isRTL };
};
