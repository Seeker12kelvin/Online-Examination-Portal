import { useContext } from "react";
import { UserContext } from "./user";

const ProtectedLayouts = ({ children }) => {
  const { user } = useContext(UserContext);

  !user
    ? console.log("user is not authenticated")
    : console.log("user is authenticated");

  return user ? children : null;
};

export default ProtectedLayouts;
