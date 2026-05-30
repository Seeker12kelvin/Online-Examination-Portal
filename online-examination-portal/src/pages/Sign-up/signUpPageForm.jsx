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
  const { userData, setUserData, errorMess, setErrorMess } =
    useContext(UserContext);
  const [passVis, setPassVis] = useState(false);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      return setErrorMess(
        "I'm sorry but you are offline. Please come back online to continue this process.",
      );
    }

    const { name, email, password, department } = userData;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

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

        const user = userCrendentials.user;
        const uid = user.uid;

        // This is calling the registerUser function
        try {
          await registerUser(name, email, password, department, uid, user);
          navigate("/login");
        } catch (err) {
          setAnimate(false);
          try {
            await user.delete();
          } catch (err) {
            console.log(err);
          }

          setErrorMess("Network error, please try again");

          if (err.code?.includes("unavailable")) {
            setErrorMess(
              "Network error: please make sure you are connected to the internet",
            );
          }
        }
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          const tl = gsap.timeline();

          tl.fromTo(
            "emailError",
            { opacity: 0, xPercent: 50, zIndex: 0 },
            { opacity: 1, xPercent: 0, zIndex: 10, duration: 0.5 },
          ).to(
            "emailError",
            { opacity: 0, xPercent: -50, zIndex: 0, duration: 0.5 },
            "+=3",
          );
        } else {
          if (err.code === "unavailable") {
            setErrorMess(
              "Network error: please make sure you are connected to the internet",
            );
            setAnimate(false);
          }
        }
      }
    } else {
      const tl = gsap.timeline();
      tl.fromTo(
        ".passwarn",
        { opacity: 0, xPercent: 50, zIndex: 0 },
        { opacity: 1, xPercent: 0, zIndex: 10, duration: 0.5 },
      ).to(
        ".passwarn",
        { opacity: 0, xPercent: -50, zIndex: 0, duration: 0.5 },
        "+=5",
      );
    }
  };

  useEffect(() => {
    if (errorMess != "") {
      const tl = gsap.timeline();
      tl.fromTo(
        ".errorwarn",
        { opacity: 0, xPercent: 50 },
        { opacity: 1, xPercent: 0, duration: 0.5 },
      )
        .to(".errorwarn", { opacity: 0, xPercent: -50, duration: 0.5 }, "+=3")
        .call(() => setErrorMess(""));
    }
  }, [errorMess, setErrorMess]);

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
                type="email"
                name="student-email"
                placeholder="jodoe@gmail.com"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="border border-[#C4C6CF] h-9.5 p-4 placeholder:text-[#6B7280] outline-none w-full placeholder:text-sm"
              />
              <div className="absolute bottom-20 -translate-x-1/2 emailError h-fit bg-[#cddeee] p-2 rounded-sm max-w-85.5 w-full opacity-0 -z-1">
                <p className="text-sm text-[red]">Email already exists</p>
              </div>
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
              <div className="absolute bottom-20 -translate-x-1/2 passwarn h-fit bg-[#cddeee] p-2 rounded-sm max-w-85.5 w-full opacity-0 -z-1 flex flex-col gap-2">
                <p className="text-sm text-[#43474E]">
                  Password must contain at least one of the following:
                </p>
                <ul className="leading-5 ml-3.5">
                  <li className="text-xs text-[#666] list-disc">
                    At least one lowercase letter
                  </li>
                  <li className="text-xs text-[#666] list-disc">
                    At least one uppercase letter
                  </li>
                  <li className="text-xs text-[#666] list-disc">
                    At least one digit
                  </li>
                  <li className="text-xs text-[#666] list-disc">
                    At least one special character
                  </li>
                  <li className="text-xs text-[#666] list-disc">
                    Minimum of 8 characters
                  </li>
                </ul>
              </div>
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
          {errorMess && (
            <h1 className="text-lg text-[#ff0000b0] text-center">
              {errorMess}
            </h1>
          )}
        </div>
      )}

      {errorMess && (
        <div className="absolute bottom-1/2 -translate-y-1/2 errorwarn h-fit bg-[#cddeee] p-2 rounded-sm max-w-85.5 w-full">
          <p className="text-lg text-[#002045] text-center font-semibold">
            {errorMess}
          </p>
        </div>
      )}
    </form>
  );
};

export default SignUpPageForm;
