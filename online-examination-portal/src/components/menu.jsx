import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { HiChartBar } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { useRef } from "react";

const Menu = () => {
  const navBar = [
    { text: "Dashboard", icon: <MdDashboard size={24} />, to: "." },
    { text: "Performance", icon: <HiChartBar size={24} />, to: "performance" },
  ];

  const styling = {
    background: "#D6E0F6",
    color: "#002045",
  };

  const asideRef = useRef();

  useGSAP(
    () => {
      const menu = asideRef.current;
      const tl = gsap.timeline();

      tl.fromTo(
        menu,
        { xPercent: -100 },
        { xPercent: 0, duration: 0.5 },
      ).fromTo(
        ".animNav",
        { xPercent: -100 },
        { xPercent: 0, duration: 0.5, stagger: 0.25 },
      );
    },
    { scope: asideRef },
  );

  return (
    <aside
      ref={asideRef}
      className="h-full max-w-[256px] w-full bg-[#EFF4F9] flex flex-col gap-4 max-[768px]:hidden p-4"
    >
      <div className="w-full pb-0 p-5">
        <h1 className="text-[28px] font-bold text-[#002045]">EduTest Pro</h1>
      </div>

      <hr />

      <nav className="w-full h-full">
        <ul className="w-full h-fit flex flex-col items-start justify-start">
          {navBar.map((data, index) => (
            <NavLink
              style={({ isActive }) => (isActive ? styling : null)}
              to={data.to}
              key={index}
              end={index > 0 ? false : true}
              className="animNav p-4 flex gap-3 items-center text-[#586377] h-full w-full rounded-sm"
            >
              {data.icon}
              <li className="text-xs font-semibold">{data.text}</li>
            </NavLink>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-4 animNav">
        <div className="flex gap-2 items-center">
          <BsQuestionCircle size={24} />
          <p className="text-[#43474E] text-xs font-bold">Help Center</p>
        </div>

        <div className="flex gap-2 items-center">
          <IoPersonSharp size={34} />
          <div className="flex flex-col">
            <p className="text-[#43474E] text-sm font-bold">Onwodi Shalom</p>
            <p className="text-[10px] text-[#43474E] uppercase">
              level 4 student
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Menu;
