import ExamsPage from "../pages/Exams Page/examsPage";
import LoginPage from "../pages/Login Page/loginPage";
import { createBrowserRouter } from "react-router-dom";
import ProfilePage from "../pages/Profile Page/profilePage";
import DashboardPage from "../pages/Dashboard Page/dashboardPage";
import PerformancePage from "../pages/Performance Page/performancePage";
import Layout from "./layout";

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
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "exams",
        element: <ExamsPage />,
      },
      {
        path: "performance",
        element: <PerformancePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default routes;
