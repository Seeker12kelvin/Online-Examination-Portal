const DashboardPerformance = () => {
  const performanceList = [
    { text: "Exams Taken", num: "12" },
    { text: "Average Score", num: "82/100" },
    { text: "Global Rank", num: "Top 10%" },
  ];

  return (
    <div className="animationNav max-w-77.25 w-full max-h-130.5 h-full box flex flex-col justify-between">
      <h2 className="animNavtext text-[#43474E] text-xs font-bold uppercase tracking-[0.6px]">
        overall performance
      </h2>

      <div className="border-[#002045] border-8 max-h-35 max-w-35 h-full w-full rounded-full self-center flex flex-col items-center justify-center animNavtext">
        <h3 className="text-[#002045] font-semibold text-4xl">
          75<span className="text-[#002045] text-2xl font-semibold">%</span>
        </h3>
        <p className="text-[#43474E] text-xs font-bold uppercase">
          success rate
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {performanceList.map((data, index) => (
          <div
            key={index}
            className="bg-[#F5FAFF] max-h-14 p-4 flex justify-between items-center rounded-sm animNavtext"
          >
            <p className="text-[#43474E] text-sm">{data.text}</p>
            <p className="text-[#002045] font-bold">{data.num}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPerformance;
