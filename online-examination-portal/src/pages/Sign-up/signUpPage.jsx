import { useContext } from "react";
import { auth, db } from "../../firebase/config";
import { UserContext } from "../../components/user";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {
  const { userData, setUserData, user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCrendentials = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password,
      );
      const docRef = await addDoc(collection(db, "users"), {
        name: userData.name,
        email: userData.email,
        userId: userData.userId,
        password: userData.password,
        department: userData.department,
      });

      console.log("Document ID:", docRef.id);
      console.log(userCrendentials);
    } catch (err) {
      console.error(err);
    }
  };

  // if (user) {
  //   return navigate("/dashboard");
  // } else {
  return (
    <section className="h-screen w-full flex flex-col gap-7 p-5 justify-center items-center">
      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-[#002045] text-[28px] font-bold">
          Create Your Account
        </h1>

        <p className="text-[#43474E] text-sm">
          Access your academic assessments and track performance.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-110 w-full max-h-139.25 h-full box flex flex-col gap-4"
      >
        <label className="text-[#43474E] font-bold text-xs flex flex-col gap-2">
          FULL NAME
          <input
            required
            type="text"
            name="student-full-name"
            placeholder="John Doe"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="border border-[#C4C6CF] h-9.5 p-4 placeholder:text-[#6B7280] outline-none w-full placeholder:text-sm"
          />
        </label>

        <label className="text-[#43474E] font-bold text-xs flex flex-col gap-2">
          STUDENT ID
          <input
            required
            type="number"
            name="student-Id"
            placeholder="Enter your ID number"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, userId: e.target.value }))
            }
            className="border border-[#C4C6CF] h-9.5 p-4 placeholder:text-[#6B7280] outline-none w-full placeholder:text-sm"
          />
        </label>

        <label className="text-[#43474E] font-bold text-xs flex flex-col gap-2">
          INSTITUTIONAL EMAIL
          <input
            required
            type="text"
            name="student-Id"
            placeholder="j.doe@university.edu"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="border border-[#C4C6CF] h-9.5 p-4 placeholder:text-[#6B7280] outline-none w-full placeholder:text-sm"
          />
        </label>

        <label className="text-[#43474E] font-bold text-xs flex flex-col gap-2">
          DEPARTMENT
          <select
            defaultValue="computer-science"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, department: e.target.value }))
            }
            className="border border-[#C4C6CF] h-9.5 pl-4 placeholder:text-[#6B7280] outline-none w-full placeholder:text-sm"
          >
            <option value="computer-science">Computer Science</option>
            <option value="information-technology">
              Information Technology
            </option>
          </select>
        </label>

        <label className="text-[#43474E] font-bold text-xs flex flex-col gap-2">
          EXAM PASSWORD
          <input
            required
            type="password"
            placeholder="••••••••"
            name="student-password"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, password: e.target.value }))
            }
            className="border border-[#C4C6CF] h-9.5 p-4 placeholder:text-[#6B7280] outline-none w-full placeholder:text-sm"
          />
        </label>

        <label className="flex gap-2 items-center text-sm text-[#43474E] font-normal">
          <input type="checkbox" /> I agree to the Terms of Service and Privacy
          Policy.
        </label>

        <button
          type="submit"
          className="max-h-14 h-full w-full bg-[#002045] p-4 text-white font-bold"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm">
        Already have an account?{" "}
        <Link to={"/login"} className="text-[#002045]">
          Log in
        </Link>
      </p>
    </section>
  );
  // }
};

export default SignUpPage;
