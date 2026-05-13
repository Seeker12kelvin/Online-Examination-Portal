import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { HiChartBar } from "react-icons/hi2";
import { LiaNewspaper } from "react-icons/lia";
import { IoPersonSharp } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";

const Menu = () => {
  const navBar = [
    { text: "Dashboard", icon: <MdDashboard size={24} /> },
    { text: "Exams", icon: <LiaNewspaper size={24} /> },
    { text: "Performance", icon: <HiChartBar size={24} /> },
    { text: "Profile", icon: <IoPersonSharp size={24} /> },
  ];

  const styling = {
    backgroundColor: "D6E0F6",
    color: "#002045",
  };

  return (
    <aside className="h-full max-w-[256px] w-full bg-[#EFF4F9] flex flex-col gap-4 max-[768px]:hidden p-4">
      <div className="w-full p-5">
        <h1 className="text-[28px] font-bold text-[#002045]">EduTest Pro</h1>
      </div>

      <nav className="w-full h-full">
        <ul className="w-full h-fit flex flex-col items-start justify-start">
          {navBar.map((data, index) => (
            <NavLink
              style={({ isActive }) => (isActive ? styling : null)}
              to={index > 0 ? data.text.toLowerCase() : "."}
              key={index}
              end={index > 0 ? false : true}
              className="p-4 flex gap-3 items-center text-[#586377] h-full w-full"
            >
              {data.icon}
              <li className="text-xs font-semibold">{data.text}</li>
            </NavLink>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-4">
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

export default Menu;
