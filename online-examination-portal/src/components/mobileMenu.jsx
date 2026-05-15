import { UserContext } from "./user";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { HiChartBar } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";

const MobileMenu = () => {
  const navBar = [
    { text: "Dashboard", icon: <MdDashboard size={24} />, to: "." },
    { text: "Performance", icon: <HiChartBar size={24} />, to: "performance" },
  ];

  const styling = {
    background: "#D6E0F6",
    color: "#002045",
  };

  const { setMenuBtn } = useContext(UserContext);

  const asideRef = useRef();

  useGSAP(
    () => {
      const menu = asideRef.current;
      const tl = gsap.timeline();

      tl.fromTo(
        menu,
        { xPercent: -100 },
        { xPercent: 0, duration: 0.2 },
      ).fromTo(
        ".animNav",
        { xPercent: -100 },
        { xPercent: 0, duration: 0.2, stagger: 0.1 },
      );
    },
    { scope: asideRef },
  );

  const exitAnimation = () => {
    const menu = asideRef.current;
    const tl = gsap.timeline();

    tl.fromTo(
      ".animNav",
      { xPercent: 0 },
      { xPercent: -100, duration: 0.2, stagger: 0.1, reversed: true },
    )
      .fromTo(menu, { xPercent: 0 }, { xPercent: -100, duration: 0.2 })
      .call(() => setMenuBtn(false));
  };

  return (
    <aside
      ref={asideRef}
      className="h-screen min-[481px]:max-w-62.5 fixed w-full bg-[#EFF4F9] flex flex-col z-100 gap-2 p-4 inset-y-0"
    >
      <div className="h-fit w-full flex flex-col justify-center">
        <button onClick={() => exitAnimation()} className="p-2 self-center">
          <IoMdClose size={24} />
        </button>

        <div className="w-full p-4">
          <h1 className="text-[28px] font-bold text-[#002045]">EduTest Pro</h1>
        </div>
      </div>

      <nav className="w-full h-full">
        <ul className="w-full h-fit flex flex-col items-start justify-start">
          {navBar.map((data, index) => (
            <NavLink
              style={({ isActive }) => (isActive ? styling : null)}
              to={data.to}
              key={index}
              end={index > 0 ? false : true}
              className="p-4 flex gap-3 animNav items-center text-[#586377] h-full w-full rounded-sm"
            >
              {data.icon}
              <li className="text-xs font-semibold">{data.text}</li>
            </NavLink>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-4 absolute bottom-10 left-4">
        <div className="flex gap-2 items-center">
          <BsQuestionCircle size={24} />
          <p className="text-[#43474E] text-xs font-bold">Help Center</p>
        </div>

        <div className="flex gap-2 items-center">
          <IoPersonSharp size={34} />
          <div className="flex flex-col">
            <p className="text-[#43474E] text-sm font-bold">Alex Johnson</p>
            <p className="text-[10px] text-[#43474E] uppercase">
              level 4 student
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MobileMenu;
