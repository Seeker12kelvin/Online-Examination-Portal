import MenuBtn from "../../components/menuBtn";
import DashboardQuizzes from "./dashboardQuizzes";
import DashboardOverview from "./dashboardOverview";
import DashboardPerformance from "./dashboardPerformance";

const DashboardPage = () => {
  return (
    <section className="min-[1200px]:h-full max-[1200px]:h-full w-full flex flex-col gap-4 p-10 max-[481px]:p-7 overflow-scroll">
      <div className="border-[#F5FAFF] border-b pb-4 flex justify-between w-full">
        <div className="flex flex-col">
          <h1 className="text-2xl text-[#002045] font-semibold">
            Student Dashboard
          </h1>
          <p className="text-[#43474E] text-sm">
            Welcome back, Alex. You have 2 exams this week.
          </p>
        </div>
        <MenuBtn />
      </div>

      <div className="flex flex-wrap max-[615px]:gap-10 gap-5 items-start max-[615px]:h-fit min-[615px]:h-full max-[1200px]:justify-center">
        <div className="max-w-160.75 w-full h-fit flex min-[615px]:flex-col max-[615px]:flex-wrap max-[615px]:gap-10 min-[615px]:gap-5">
          <DashboardOverview />

          <DashboardQuizzes />
        </div>

        <DashboardPerformance />
      </div>
    </section>
  );
};

export default DashboardPage;
