import { UserContext } from "./user";
import { auth } from "../firebase/config";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const UserAuth = ({ children }) => {
  const [userData, setUserData] = useState({
    userId: "",
    password: "",
    name: "",
    studentId: "",
    department: "",
  });
  const [menuBtn, setMenuBtn] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
        console.log("user is authenticated");
      } else {
        console.log("user is not authenticated");
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, menuBtn, setMenuBtn, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserAuth;
