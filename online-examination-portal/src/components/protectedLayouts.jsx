import { useContext } from "react";
import { UserContext } from "./user";
import animation from "../images/835.gif";

const ProtectedLayouts = ({ children }) => {
  const { user, userData } = useContext(UserContext);

  return user === true && userData === true ? (
    children
  ) : (
    <div className="h-screen w-full flex flex-col gap-3 justify-center items-center bg-[#ffffff49]">
      <img src={animation} alt="Loading..." className="size-25" />
    </div>
  );
};

export default ProtectedLayouts;
