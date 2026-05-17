import { Link } from "react-router-dom";
import SignUpPageForm from "./signUpPageForm";

const SignUpPage = () => {
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

      <SignUpPageForm />

      <p className="text-sm">
        Already have an account?{" "}
        <Link to={"/login"} className="text-[#002045]">
          Log in
        </Link>
      </p>
    </section>
  );
};

export default SignUpPage;
