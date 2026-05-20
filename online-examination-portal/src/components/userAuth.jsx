import { UserContext } from "./user";
import { auth } from "../firebase/config";
import { useCallback, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { fetchUsers } from "../firebase/firestore";

const UserAuth = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    userId: "",
    password: "",
    department: "Computer Science",
  });

  const [examNum, setExamNum] = useState(0);

  const handleExamNum = useCallback(() => {
    setExamNum((prev) => prev + 1);
  }, []);

  const [menuBtn, setMenuBtn] = useState(false);

  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(true);
        const userInfo = await fetchUsers();
        userInfo.forEach((data) =>
          setUserData((prev) => ({ ...prev, name: data.name })),
        );

        console.log("user is authenticated");
      } else {
        console.log("user is not authenticated");
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const contextValue = useMemo(
    () => ({
      userData,
      setUserData,
      menuBtn,
      setMenuBtn,
      user,
      examNum,
      setExamNum,
      handleExamNum,
    }),
    [userData, menuBtn, user, examNum, handleExamNum],
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserAuth;
