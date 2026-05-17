import { UserContext } from "./user";
import { useContext, useEffect } from "react";
import { fetchUsers } from "../firebase/firestore";
import videoSource from "../images/Loading Dots.mp4";

const ProtectedLayouts = ({ children }) => {
  const { user, setUserData } = useContext(UserContext);

  // Before the component renders, this useEffect updates the userData state with the intended user data fetched from the database.
  useEffect(() => {
    const updateState = async () => {
      try {
        const data = await fetchUsers();
        setUserData((prev) => ({
          ...prev,
          name: data.name,
          email: data.email,
          userId: data.userId,
          password: data.password,
          department: data.department,
        }));
      } catch (err) {
        console.error(
          "Error, could not update state with the intended data",
          err,
        );
      }
    };
    updateState();
  });

  return user ? (
    children
  ) : (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      className="h-screen w-screen"
    >
      <source src={videoSource} type="video/mp4" />
    </video>
  );
};

export default ProtectedLayouts;
