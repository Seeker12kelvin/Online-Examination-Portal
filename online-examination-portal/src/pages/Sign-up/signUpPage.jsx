import { Link } from "react-router-dom";
import SignUpPageForm from "./signUpPageForm";

const SignUpPage = () => {
  return (
    <main className="max-md:h-dvh md:h-screen w-full flex flex-col max-sm:gap-4 gap-7 max-sm:pt-5 px-5 justify-center items-center fixed top-0 left-0">
      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-[#002045] text-[28px] font-bold">
          Create Your Account
        </h1>

        <p className="text-[#43474E] text-sm text-center">
          Access your academic assessments and track performance.
        </p>
      </div>

      <SignUpPageForm />

      <p className="text-sm">
        Already have an account?{" "}
        <Link to={"/login"} className="text-[#002045]">
          Log in
        </Link>
      </p>
    </main>
  );
};

export default SignUpPage;
