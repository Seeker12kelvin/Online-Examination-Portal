import { UserContext } from "./user";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchUsers } from "../firebase/firestore";

const ProtectedLayouts = ({ children }) => {
  const { user } = useContext(UserContext);
  // const navigate = useNavigate();

  // Before the component renders, this useEffect updates the userData state with the intended user data fetched from the database.
  // useEffect(() => {
  //   const updateState = async () => {
  //     try {
  //       const data = await fetchUsers();
  //       setUserData((prev) => ({
  //         ...prev,
  //         name: data.name,
  //         email: data.email,
  //         userId: data.userId,
  //         password: data.password,
  //         department: data.department,
  //       }));
  //     } catch (err) {
  //       console.error(
  //         "Error, could not update state with the intended data",
  //         err,
  //       );
  //     }
  //   };
  //   updateState();
  // });

  return user && children;
};

export default ProtectedLayouts;
