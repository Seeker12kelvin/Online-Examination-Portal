import { UserContext } from "./user";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { fetchUsers } from "../firebase/firestore";
import { useCallback, useEffect, useMemo, useState } from "react";

const UserAuth = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    department: "Computer Science",
  });

  const [examNum, setExamNum] = useState(0);
  const [examScoreInfo, setExamScoreInfo] = useState({
    percentage: "",
    correct: "",
    incorrect: "",
    skippedQuestions: "",
    remainingTime: "",
  });

  const handleExamNum = useCallback(() => {
    setExamNum((prev) => prev + 1);
  }, []);

  const [menuBtn, setMenuBtn] = useState(false);

  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = localStorage.getItem("user");
        if (uid) {
          const userInfo = await fetchUsers(uid);
          userInfo.map((data) => {
            setUserData((prev) => ({
              ...prev,
              name: data.name,
              email: data.email,
              department: data.department,
            }));
            setExamScoreInfo((prev) => ({
              ...prev,
              percentage: data.percentage,
              correct: data.correct,
              incorrect: data.incorrect,
              skippedQuestions: data.skippedQuestions,
              remainingTime: data.remainingTime,
            }));
          });
          setUser(true);
        }
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
      examScoreInfo,
      setExamScoreInfo,
    }),
    [
      userData,
      menuBtn,
      user,
      examNum,
      handleExamNum,
      examScoreInfo,
      setExamScoreInfo,
    ],
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserAuth;
