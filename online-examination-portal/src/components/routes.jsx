import ExamsPage from "../pages/Exams/examsPage";
import LoginPage from "../pages/Login/loginPage";
import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../pages/Dashboard/dashboardPage";
import PerformancePage from "../pages/Performance/performancePage";
import Layout from "./layout";
import ProtectedLayouts from "./protectedLayouts";
import SignUpPage from "../pages/Sign-up/signUpPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignUpPage />,
    errorElement: (
      <div className="w-full h-screen flex justify-center items-center text-6xl">
        404: Not Found
      </div>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "dashboard",
    element: (
      <ProtectedLayouts>
        <Layout />
      </ProtectedLayouts>
    ),
    children: [
      {
        index: true,
        element: (
          <ProtectedLayouts>
            <DashboardPage />
          </ProtectedLayouts>
        ),
      },
      {
        path: "performance",
        element: (
          <ProtectedLayouts>
            <PerformancePage />
          </ProtectedLayouts>
        ),
      },
    ],
  },
  {
    path: "exams",
    element: (
      <ProtectedLayouts>
        <ExamsPage />
      </ProtectedLayouts>
    ),
  },
]);

export default routes;
