import { MdSubject } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";

const PerformancePage = () => {
  const blocks = [
    { title: "CORRECT", num: "42", color: "#83D8A6" },
    { title: "INCORRECT", num: "5", color: "#BA1A1A" },
    { title: "SKIPPED", num: "3", color: "#43474E" },
    { title: "TIME SPENT", num: "01:12:45", color: "#002045" },
  ];

  const progressBars = [
    { title: "Quantitative Reasoning", percent: "92%" },
    { title: "Analytical Writing", percent: "78%" },
    { title: "Logical Deduction", percent: "88%" },
    { title: "Data Interpretation", percent: "65%" },
  ];

  return (
    <section className="min-[1200px]:h-full w-full flex flex-col gap-4 p-10 max-[481px]:p-7 overflow-scroll">
      <div className="max-w-244 w-full h-fit flex flex-col gap-10">
        <div className="box border-t-[black] border-t-4 flex flex-col items-center gap-5 max-h-122.5 h-full w-full">
          <MdStarOutline size={44} className="fill-[#83D8A6]" />

          <h1 className="text-[28px] font-bold text-[#002045]">
            Outstanding Performance!
          </h1>

          <p className="text-sm text-[#43474E] min-[1200px]:max-w-148.25 text-center">
            Congratulations, you've successfully completed the Final Examination
            with an exceptional result.
          </p>

          <div className="border-[#002045] border-8 max-h-44 max-w-44 h-full w-full rounded-full self-center flex flex-col items-center justify-center">
            <h3 className="text-[#002045] font-semibold text-4xl">
              75<span className="text-[#002045] text-2xl font-semibold">%</span>
            </h3>
            <p className="text-[#43474E] text-xs font-bold uppercase">
              success rate
            </p>
          </div>
        </div>

        <div className="w-full flex gap-5 items-start">
          <div className="max-w-160.75 w-full h-fit flex flex-col gap-5">
            <div className="w-full h-full flex max-[1001px]:flex-wrap justify-between gap-5">
              {blocks.map((data, index) => (
                <div
                  key={index}
                  className="bg-[#E9EEF3] w-full max-h-26.5 h-full box flex flex-col gap-2 justify-between text-center"
                >
                  <h2 className="text-[#43474E] text-xs font-bold">
                    {data.title}
                  </h2>
                  <p
                    style={{ color: data.color }}
                    className={`text-2xl font-semibold`}
                  >
                    {data.num}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-h-76.5 h-full box w-full flex flex-col gap-5">
              <div className="flex gap-2 items-center">
                <MdSubject size={24} />
                <h2 className="text-2xl font-semibold">Subject Proficiency</h2>
              </div>

              <div className="flex flex-col gap-5">
                {progressBars.map((data, index) => (
                  <div key={index} className="flex flex-col gap-2 w-full">
                    <div className="w-full flex justify-between items-center">
                      <h3 className="text-[#171C20] text-sm font-semibold">
                        {data.title}
                      </h3>
                      <p>{data.percent}</p>
                    </div>
                    <div className="h-2 w-full bg-[#DEE3E8]">
                      <div
                        style={{ width: `${data.percent}` }}
                        className={`rounded-4xl h-full max-w-full bg-[#002045]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full">
            <button className="bg-[#002045] text-sm font-bold text-white ">
              Review Answers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformancePage;
