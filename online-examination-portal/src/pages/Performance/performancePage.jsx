import { Link } from "react-router-dom";
import { VscPreview } from "react-icons/vsc";
import star_image from "../../images/Icon.png";
import { MdDashboard, MdSubject } from "react-icons/md";
import MenuBtn from "../../components/menuBtn";

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
    <section className="h-screen w-full flex flex-col gap-4 p-10 max-[481px]:px-7 max-[481px]:pt-7">
      <div className="border-[#F5FAFF] border-b pb-4 flex justify-between w-full">
        <div className="flex flex-col">
          <h1 className="text-2xl text-[#002045] font-semibold animNavtext">
            Your Performance
          </h1>
        </div>
        <MenuBtn />
      </div>
      <div className="max-w-244 w-full flex flex-col gap-10">
        <div className="box border-t-[black] border-t-4 flex flex-col items-center gap-5 min-[768px]:h-105.5 max-[768px]:h-fit w-full">
          <img
            src={star_image}
            alt="A star icon"
            className="fill-[#83D8A6] size-11"
          />

          <h1 className="text-[28px] font-bold text-[#002045] max-[768px]:text-center">
            Outstanding Performance!
          </h1>

          <p className="text-sm text-[#43474E] min-[1200px]:max-w-148.25 text-center">
            Congratulations, you've successfully completed the Final Examination
            with an exceptional result.
          </p>

          <div className="border-[#002045] border-8 min-[768px]:max-h-44 min-[768px]:max-w-44 max-[768px]:h-40 min-[768px]:h-full min-[768px]:w-full max-[768px]:w-40 rounded-full flex flex-col items-center justify-center">
            <h3 className="text-[#002045] font-semibold min-[768px]:text-4xl max-[768px]:text-3xl">
              75<span className="text-[#002045] text-2xl font-semibold">%</span>
            </h3>
            <p className="text-[#43474E] text-xs font-bold uppercase">
              success rate
            </p>
          </div>
        </div>

        <div className="w-full flex max-[1200px]:flex-wrap min-[1200px]:justify-between max-[1200px]:justify-center max-[768px]:gap-10 min-[768px]:gap-5 items-start">
          <div className="max-w-160.75 w-full h-fit flex flex-col min-[768px]:gap-5 max-[768px]:gap-10">
            <div className="w-full h-full flex max-[1001px]:flex-wrap justify-center gap-5">
              {blocks.map((data, index) => (
                <div
                  key={index}
                  className="bg-[#E9EEF3] w-full max-h-26.5 max-w-37.25 h-full box rounded-sm flex flex-col gap-2 justify-between text-center"
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

            <div className="min-[1200px]:max-h-76.5 min-[1200px]:h-full max-[1200px]:h-fit box w-full flex flex-col gap-5">
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

          <div className="min-[1200px]:max-w-77.25 max-[1200px]:max-w-full w-full flex min-[1200px]:flex-col gap-5 max-[481px]:flex-wrap">
            <button className="bg-[#002045] text-sm font-bold text-white w-full max-h-17 h-full py-6 flex gap-2 justify-center items-center">
              <VscPreview size={24} />
              Review Answers
            </button>

            <Link
              to={"/dashboard"}
              className="bg-[#E4E9EE] text-sm font-bold text-[#171C20] w-full max-h-17 h-full py-6 flex gap-2 justify-center items-center"
            >
              <MdDashboard size={24} />
              Return to Dashboard
            </Link>

            <div className="max-h-43.75 h-full bg-[#D6E0F6] w-full p-5 rounded-lg flex flex-col gap-3 max-[1200px]:hidden">
              <h3 className="text-xs text-[#596376] font-bold">
                NEXT MILESTONE
              </h3>

              <p className="text-sm text-[#596376] font-normal">
                Based on your results, we recommend the Advanced Analytics
                Seminar starting next week.
              </p>
            </div>
          </div>
          <div className="max-h-fit h-full bg-[#D6E0F6] w-full p-5 rounded-lg flex flex-col gap-3 min-[1200px]:hidden">
            <h3 className="text-xs text-[#596376] font-bold">NEXT MILESTONE</h3>

            <p className="text-sm text-[#596376] font-normal">
              Based on your results, we recommend the Advanced Analytics Seminar
              starting next week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformancePage;
