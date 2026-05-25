import gsap from "gsap";
import { auth } from "../../firebase/config";
import animation from "../../images/835.gif";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/user";
import { registerUser } from "../../firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignUpPageForm = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [signUpText, setSignUpText] = useState(false);
  const [passError, setPassError] = useState(false);
  const [errorMess, setErrorMess] = useState("");
  const [passVis, setPassVis] = useState(false);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, department } = userData;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isPasswordTrue = passwordRegex.test(password);

    if (isPasswordTrue) {
      try {
        setAnimate(true);

        // This is for registering the users' email and password
        const userCrendentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

        const uid = userCrendentials.user.uid;

        // This is calling the registerUser function
        await registerUser(name, email, password, department, uid);
        console.log("LOGGED");

        setSignUpText(true);

        navigate("/login");
      } catch (err) {
        setAnimate(false);

        setSignUpText(false);

        console.error(err);
        setErrorMess(
          "Network error: please make sure you are connected to the internet",
          err.mess,
        );
      }
    } else {
      setPassError(true);
    }
  };

  useEffect(() => {
    if (passError) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".passwarn",
        { opacity: 0, xPercent: 50 },
        { opacity: 1, xPercent: 0, duration: 0.5 },
      )
        .to(".passwarn", { opacity: 0, xPercent: -50, duration: 0.5 }, "+=3")
        .call(() => setPassError(false));
    } else if (errorMess != "") {
      const tl = gsap.timeline();
      tl.fromTo(
        ".errorwarn",
        { opacity: 0, xPercent: 50 },
        { opacity: 1, xPercent: 0, duration: 0.5 },
      )
        .to(".errorwarn", { opacity: 0, xPercent: -50, duration: 0.5 }, "+=3")
        .call(() => setPassError(""));
    }
  }, [passError, errorMess]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-110 w-full max-h-139.25 h-full box relative"
    >
      {!animate ? (
        <div className="h-fit w-full flex flex-col gap-6">
          <div className="h-fit w-full flex flex-col gap-4">
            <label className="text-[#43474E] font-bold text-xs flex flex-col gap-2">
              FULL NAME
              <input
                required
                type="text"
                placeholder="John Doe"
                name="student-full-name"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
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
                  defaultValue={userData.department}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      department: e.target.value,
                    }))
                  }
                  className="h-full placeholder:text-[#6B7280] outline-none w-full placeholder:text-sm"
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Information Technology">
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
                    setUserData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  className="h-full placeholder:text-[#6B7280] outline-none w-full placeholder:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setPassVis((prev) => !prev)}
                >
                  {passVis ? (
                    <IoEyeOutline size={20} />
                  ) : (
                    <IoEyeOffOutline size={20} />
                  )}
                </button>
              </div>
              {passError && (
                <div className="absolute bottom-20 -translate-x-1/2 passwarn h-fit bg-[#cddeee] p-2 rounded-sm max-w-85.5 w-full">
                  <p className="text-xs text-[#43474E]">
                    Password must contain at least an uppercase letter, number
                    and a special character. E.g...prefferably an *
                  </p>
                </div>
              )}
            </label>
          </div>

          <label className="flex gap-2 items-center text-sm text-[#43474E] font-normal max-md:text-xs">
            <input type="checkbox" required /> I agree to the Terms of Service
            and Privacy Policy.
          </label>

          <button
            type="submit"
            className="max-h-10 h-full w-full bg-[#002045] py-2.5 text-white font-bold flex justify-center items-center"
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

      {errorMess && (
        <div className="absolute bottom-1/2 -translate-y-1/2 errorwarn h-fit bg-[#cddeee] p-2 rounded-sm max-w-85.5 w-full">
          <p className="text-lg text-[red]">{errorMess}</p>
        </div>
      )}
    </form>
  );
};

export default SignUpPageForm;
