import React from "react";
import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/routes"
import ThemeWrapper from "./theme/ThemeWrapper";
import { useThemeMode } from "./hooks/useThemeMode";
import { useRTL } from "./hooks/useRTL";

function App() {
  const { mode, setMode } = useThemeMode();
  const { isRTL } = useRTL();

  return (
    <>
      <ThemeWrapper mode={mode} isRTL={isRTL}>
        <RouterProvider router={routes(setMode)} />
      </ThemeWrapper>
    </>
  );
}

export default App;
