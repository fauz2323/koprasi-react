import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ForgotPage from "./pages/ForgotPage";
import Starter from "./pages/Starter";
import HomePage from "./pages/HomePage";
import { LoginProvider } from "./context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Starter />,
    },
    {
      path: "/home",
      element: <HomePage />,
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
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
