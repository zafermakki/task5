import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Profile from "../components/profile/Profile";
import Settings from "../components/settings/Settings";

export const routes = (setmyMOde) => createBrowserRouter([
    {
        path: "/",
        element: <Home setmyMOde={setmyMOde} />
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/settings",
        element: <Settings/>
    },
])