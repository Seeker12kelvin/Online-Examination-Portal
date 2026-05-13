import { useState } from "react";
import routes from "./components/routes";
import { UserContext } from "./components/user";
import { RouterProvider } from "react-router-dom";

function App() {
  const [menuBtn, setMenuBtn] = useState(false);

  return (
    <UserContext.Provider value={{ menuBtn, setMenuBtn }}>
      <RouterProvider router={routes} />
    </UserContext.Provider>
  );
}

export default App;
