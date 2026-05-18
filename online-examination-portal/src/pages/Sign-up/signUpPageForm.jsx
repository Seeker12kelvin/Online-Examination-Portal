import { auth } from "../../firebase/config";
import { useContext, useState } from "react";
import animation from "../../images/835.gif";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/user";
// import { registerUser } from "../../firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignUpPageForm = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [signUpText, setSignUpText] = useState(false);
  const [passVis, setPassVis] = useState(false);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = userData;

    try {
      setAnimate(true);

      // This is for registering the users' email and password
      const userCrendentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log(userCrendentials.user);

      // This is calling the registerUser function
      // registerUser(name, email, userId, password, department);
      setSignUpText(true);
      navigate("/login");
    } catch (err) {
      setAnimate(false);
      setSignUpText(false);
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-110 w-full max-h-139.25 h-full box"
    >
      {!animate ? (
        <div className="h-fit w-full flex flex-col gap-4">
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
              name="student-email"
              placeholder="jodoe@gmail.com"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="border border-[#C4C6CF] h-9.5 p-4 placeholder:text-[#6B7280] outline-none w-full placeholder:text-sm"
            />
          </label>

          <label className="text-[#43474E] font-bold text-xs flex flex-col gap-2">
            DEPARTMENT
            <div className="border border-[#C4C6CF] h-9.5 px-4 flex items-center">
              <select
                defaultValue="computer-science"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    department: e.target.value,
                  }))
                }
                className="h-full placeholder:text-[#6B7280] outline-none w-full placeholder:text-sm"
              >
                <option value="computer-science">Computer Science</option>
                <option value="information-technology">
                  Information Technology
                </option>
              </select>
            </div>
          </label>

          <label className="text-[#43474E] font-bold text-xs flex flex-col gap-2">
            EXAM PASSWORD
            <div className="border border-[#C4C6CF] h-9.5 px-4 flex justify-between items-center">
              <input
                required
                type={passVis ? "text" : "password"}
                placeholder="••••••••"
                name="student-password"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, password: e.target.value }))
                }
                className="h-full placeholder:text-[#6B7280] outline-none w-full placeholder:text-sm"
              />
              <button type="button" onClick={() => setPassVis((prev) => !prev)}>
                {passVis ? (
                  <IoEyeOutline size={20} />
                ) : (
                  <IoEyeOffOutline size={20} />
                )}
              </button>
            </div>
          </label>

          <label className="flex gap-2 items-center text-sm text-[#43474E] font-normal max-md:text-xs">
            <input type="checkbox" /> I agree to the Terms of Service and
            Privacy Policy.
          </label>

          <button
            type="submit"
            className="max-h-14 h-full w-full bg-[#002045] p-4 text-white font-bold"
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div className="h-full w-full flex flex-col gap-3 justify-center items-center bg-[#ffffff49]">
          <img src={animation} alt="Loading..." className="size-25" />
          {signUpText && <p>Sign Up Successful...</p>}
        </div>
      )}
    </form>
  );
};

export default SignUpPageForm;
