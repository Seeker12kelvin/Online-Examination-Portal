import MenuBtn from "../../components/menuBtn";
import DashboardQuizzes from "./dashboardQuizzes";
import DashboardOverview from "./dashboardOverview";
import DashboardPerformance from "./dashboardPerformance";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const DashboardPage = () => {
  const sectionRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".animationNav",
        { scale: 0 },
        { scale: 1, delay: 0.5, duration: 0.1, stagger: 0.05, ease: "none" },
      ).fromTo(
        ".animNavtext",
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.2,
          stagger: 0.1,
          ease: "none",
        },
        "<",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="h-full w-full flex flex-col gap-4 p-10 max-[481px]:px-7 max-[481px]:pt-7 min-[767px]:overflow-y-scroll"
    >
      <div className="border-[#F5FAFF] border-b pb-4 flex justify-between w-full">
        <div className="flex flex-col">
          <h1 className="text-2xl text-[#002045] font-semibold animNavtext">
            Student Dashboard
          </h1>
          <p className="text-[#43474E] text-sm animNavtext">
            Welcome back, Alex. You have 2 exams this week.
          </p>
        </div>
        <MenuBtn />
      </div>

      <div className="flex flex-wrap max-[615px]:gap-10 gap-5 items-start max-[615px]:h-fit min-[615px]:h-full max-[1200px]:justify-center">
        <div className="max-w-160.75 w-full h-fit flex min-[615px]:flex-col max-[615px]:flex-wrap max-[615px]:gap-10 min-[615px]:gap-10">
          <DashboardOverview />

          <DashboardQuizzes />
        </div>

        <DashboardPerformance />
      </div>
    </section>
  );
};

export default DashboardPage;
