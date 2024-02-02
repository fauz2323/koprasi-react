import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ForgotPage from "./pages/ForgotPage";
import Starter from "./pages/Starter";
import HistoryBonusPage from "./pages/HistoryBonusPage";
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
import WithdrawPage from "./pages/WithdrawPage";
import { WithdrawProvider } from "./helper/context/WithdrawContext";
import VaDetailPage from "./pages/VaDetailPage";
import { VaDetailProvider } from "./helper/context/VaDetailContext";
import { HistoryBonusProvider } from "./helper/context/HistoryBonusContext";
import SettingPage from "./pages/SettingPage";
import { SettingProvider } from "./helper/context/SettingContext";
import { RegisterProvider } from "./helper/context/RegisterContext";

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
      element: (
        <RegisterProvider>
          <Register />
        </RegisterProvider>
      ),
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
    {
      path: "/withdraw",
      element: (
        <WithdrawProvider>
          <WithdrawPage />
        </WithdrawProvider>
      ),
    },
    {
      path: "/transaction/va/:transactionid",
      element: (
        <VaDetailProvider>
          <VaDetailPage />
        </VaDetailProvider>
      ),
    },
    {
      path: "/history/bonus",
      element: (
        <HistoryBonusProvider>
          <HistoryBonusPage />
        </HistoryBonusProvider>
      ),
    },
    {
      path: "/setting",
      element: (
        <SettingProvider>
          <SettingPage />
        </SettingProvider>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
