import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "./config";
import { signOut } from "firebase/auth";

// This function is for registering all the users' data to the database
export async function registerUser(name, email, userId, password, department) {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name,
      email,
      userId,
      password,
      department,
    });
    console.log("Document ID:", docRef.id);
  } catch(err) {
    console.error('Error uploading data to the database: ', err);
  }
}

// Log Out function
export const handleLogOut = async () => {
  try {
    await signOut(auth);
    console.log("Logged Out succesfully");
  } catch (err) {
    console.error("Error logging out: ", err);
  }
};

// This function is for fetching all of the users' data from the database
export async function fetchUsers() {

  try{
    const querySnapshot = await getDocs(collection(db, "users"));
  
    return querySnapshot.forEach((doc) => {
      doc.data()
    });
  } catch(err){
    console.error('Error retrieving data to the database: ', err)
  }
};