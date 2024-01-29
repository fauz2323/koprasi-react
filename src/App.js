import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ForgotPage from "./pages/ForgotPage";
import Starter from "./pages/Starter";
import HomePage from "./pages/HomePage";
import { LoginProvider } from "./helper/context/LoginContext";
import { HomeProvider } from "./helper/context/HomeContext";
import SetoranPage from "./pages/SetoranPage";
import { SetoranProvider } from "./helper/context/SetoranContext";
import {
  HistoryContext,
  HistoryProvider,
} from "./helper/context/HistoryContext";
import HistoriesPage from "./pages/HistoriesPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Starter />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/home",
      element: (
        <HomeProvider>
          <HomePage />
        </HomeProvider>
      ),
    },
    {
      path: "/login",
      element: (
        <LoginProvider>
          <Login />
        </LoginProvider>
      ),
    },
    {
      path: "/forgot",
      element: <ForgotPage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/setoran",
      element: (
        <SetoranProvider>
          <SetoranPage />
        </SetoranProvider>
      ),
    },
    {
      path: "/history",
      element: (
        <HistoryProvider>
          <HistoriesPage />
        </HistoryProvider>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
