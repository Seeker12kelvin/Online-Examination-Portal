import { BsCardChecklist } from "react-icons/bs";

const DashboardOverview = () => {
  return (
    <div className="max-w-160.75 min-[870px]:max-h-68.5 w-full min-[870px]:h-full max-[870px]:h-fit box flex flex-col max-[615px]:gap-5 min-[615px]:gap-2 p-0">
      <div className="p-4 flex flex-col gap-2">
        <div className="bg-[#1A365D] rounded-4xl py-1 px-3 w-fit">
          <p className="text-[#86A0CD] uppercase text-xs">Upcoming Exam</p>
        </div>
        <div className="w-full flex flex-wrap gap-2 justify-between">
          <div>
            <h2 className="text-[#002045] text-[28px] font-bold max-w-68 w-full leading-9 max-[870px]:max-w-full max-[615px]:max-w-full max-[615px]:text-2xl">
              Advanced Quantum Mechanics
            </h2>
          </div>
          <div className="max-[870px]:max-w-full max-[615px]:max-w-full max-w-55 w-full max-h-29.5 h-full bg-[#E4E9EE] p-4 flex flex-col gap-2 items-center rounded-sm border-[#C4C6CF] border">
            <h3 className="text-[#43474E] text-xs font-bold uppercase tracking-[0.6px]">
              Time Remaining
            </h3>
            <h3 className="text-[#002045]">
              <span className="text-4xl font-semibold text-[#002045]">01</span>d{" "}
              <span className="text-4xl font-semibold text-[#002045]">14</span>h{" "}
              <span className="text-4xl font-semibold text-[#002045]">22</span>m
            </h3>
          </div>
        </div>
      </div>
      <div className="min-[870px]:max-h-18 w-full min-[870px]:h-full max-[870px]:h-fit bg-[#E4E9EE] flex flex-wrap justify-between items-center p-4 max-[870px]:gap-3 rounded-b-xl">
        <div className="flex gap-3 items-center">
          <BsCardChecklist size={24} />
          <p className="text-[#596376] text-sm">50 Questions • 3 Sections</p>
        </div>

        <button className="bg-[#002045] py-2 px-10 text-white rounded-sm">
          Prepare Now
        </button>
      </div>
    </div>
  );
};

export default DashboardOverview;
