import DashboardPage from "../pages/Dashboard Page/dashboardPage";
import LoginPage from "../pages/Login Page/loginPage";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: (
      <div className="w-full h-screen flex justify-center items-center text-6xl">
        404: Not Found
      </div>
    ),
  },
  {
    path: "dashboard",
    element: <DashboardPage />,
  },
]);

export default routes;
