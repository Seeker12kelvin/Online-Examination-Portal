import { FaLock } from "react-icons/fa";
import { IoMdKey } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="h-screen w-full flex flex-col gap-10 p-5 justify-center items-center">
      <div className="flex flex-col gap-1 justify-center items-center">
        <h1 className="text-[#002045] text-[28px] font-bold">EduTest Pro</h1>

        <p className="text-[#43474E] text-sm">Secure Examination Environment</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-110 w-full max-h-122.75 h-full box flex flex-col gap-5"
      >
        <div className="border-b-2 pb-4 flex gap-2">
          <FaLock size={20} />
          <h2 className="text-xs font-bold">STUDENT AUTHENTICATION</h2>
        </div>

        <label className="text-[#43474E] font-bold text-xs flex flex-col gap-2">
          STUDENT ID
          <div className="border border-[#C4C6CF] h-13.5 flex gap-4 items-center p-4">
            <IoPerson size={20} />
            <input
              required
              type="text"
              placeholder="Enter your ID number"
              className="placeholder:text-[#6B7280] outline-none h-full placeholder:text-sm"
            />
          </div>
        </label>

        <label className="text-[#43474E] font-bold text-xs flex flex-col gap-2">
          EXAM PASSWORD
          <div className="border border-[#C4C6CF] h-13.5 flex gap-4 items-center p-4">
            <IoMdKey size={20} />
            <input
              required
              type="password"
              placeholder="••••••••"
              className="placeholder:text-[#6B7280] outline-none h-full placeholder:text-sm"
            />
          </div>
        </label>

        <div className="flex gap-2 bg-[#EFF4F9] p-4">
          <LuShieldCheck size={20} />
          <p className="text-sm text-[#43474E]">
            You are logging into a proctored session. IP tracking and browser
            monitoring are active.
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#002045] p-4 uppercase text-white text-xs font-bold"
        >
          Sign in to exam
        </button>

        <p className="text-sm text-[#002045] text-center">
          Technical support or forgot password?
        </p>
      </form>
    </section>
  );
};

export default LoginPage;
