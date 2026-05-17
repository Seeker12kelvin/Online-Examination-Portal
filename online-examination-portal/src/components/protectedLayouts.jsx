import { useContext } from "react";
import { UserContext } from "./user";

const ProtectedLayouts = ({ children }) => {
  const { user } = useContext(UserContext);
  return user ? children : null;
};

export default ProtectedLayouts;
