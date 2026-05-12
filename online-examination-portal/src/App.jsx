import routes from "./components/routes";
// import { UserContext } from "./components/user";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    // <UserContext.Provider>
    <RouterProvider router={routes} />
    // </UserContext.Provider>
  );
}

export default App;
