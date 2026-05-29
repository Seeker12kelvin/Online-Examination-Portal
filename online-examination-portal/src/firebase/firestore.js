import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "./config";
import { signOut } from "firebase/auth";


// This function is for registering all the users' data to the database
export async function registerUser(name, email, password, department, uid) {
  await setDoc(doc(db, "users", uid), {
    name,
    email,
    password,
    department,
  });
}


// This function is for fetching all of the users' data from the database
export async function fetchUsers(uid) {
  try{
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    const data = []
    if(docSnap.exists()){
      data.push(docSnap.data())
    } else {
      return console.log("User doesn't exist")
    }
    return data
  } catch(err){
    if (err.code === "unavailable") {
      return "Please check your internet connection"
    }
  }
};


// Log Out function
export const handleLogOut = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error("Error logging out: ", err);
  }
};


// Exam logic handling
export async function handleExamLogic(examScore, uid) {
  try {
    const userRef = doc(db, "users", uid)
    await updateDoc(userRef, examScore);
  } catch(err){
    console.error(err)
  }
}