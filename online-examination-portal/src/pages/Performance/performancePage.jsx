import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import star_image from "../../images/Icon.png";
import MenuBtn from "../../components/menuBtn";
import { UserContext } from "../../components/user";
import { MdDashboard, MdSubject } from "react-icons/md";
import { fetchUsers } from "../../firebase/firestore";

const PerformancePage = () => {
  const { examScoreInfo, setExamScoreInfo, setNetworkError, userData, userId } =
    useContext(UserContext);

  const handleFetchResultsLogic = async () => {
    const userInfo = await fetchUsers(userId);
    if (!userInfo) {
      setNetworkError("Please check your internet connection...");
    } else {
      userInfo.map((data) => {
        setExamScoreInfo((prev) => ({
          ...prev,
          percentage: data.percentage,
          correct: data.correct,
          incorrect: data.incorrect,
          skippedQuestions: data.skippedQuestions,
          remainingTime: data.remainingTime,
        }));
      });
    }
  };

  const { percentage, correct, incorrect, skippedQuestions, remainingTime } =
    examScoreInfo;

  const blocks = [
    { title: "CORRECT", num: correct, color: "#83D8A6" },
    { title: "INCORRECT", num: incorrect, color: "#BA1A1A" },
    { title: "SKIPPED", num: skippedQuestions, color: "#43474E" },
    { title: "TIME SPENT", num: remainingTime, color: "#002045" },
  ];

  const progressBars = [{ title: userData.department, percent: percentage }];

  const sectionRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.call(() => handleFetchResultsLogic())
        .fromTo(
          ".animationNav",
          { scale: 0 },
          { scale: 1, delay: 0.5, duration: 0.1, stagger: 0.05, ease: "none" },
        )
        .fromTo(
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

  return !percentage ? (
    <div
      ref={sectionRef}
      className="h-screen w-screen flex flex-col justify-between items-center p-10 max-[481px]:px-7"
    >
      <div className="w-full flex justify-end items-center">
        <MenuBtn />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-[#002045] font-semibold animNavtext text-center">
          I'm sorry but, you have no exam scores to grade.
        </h1>
        <p className="text-sm text-[#43474E] min-[1200px]:max-w-148.25 text-center animNavtext">
          Please start and finish an exam to see your score...
        </p>
      </div>

      <div />
    </div>
  ) : (
    <section
      ref={sectionRef}
      className="h-screen w-full flex flex-col gap-4 p-10 max-[481px]:px-7 max-[481px]:pt-7 overflow-y-scroll"
    >
      <div className="border-[#F5FAFF] border-b pb-4 flex justify-between w-full">
        <div className="flex flex-col">
          <h1 className="text-2xl text-[#002045] font-semibold animNavtext">
            Your Performance
          </h1>
        </div>
        <MenuBtn />
      </div>
      <div className="max-w-244 w-full flex flex-col gap-10">
        <div className="animationNav box border-t-[black] border-t-4 flex flex-col items-center gap-5 min-[768px]:h-105.5 max-[768px]:h-fit w-full">
          <img
            src={star_image}
            alt="A star icon"
            className="fill-[#83D8A6] size-11 animNavtext"
          />

          <h1 className="text-[28px] font-bold text-[#002045] max-[768px]:text-center animNavtext">
            {percentage < 30
              ? "You could do better"
              : percentage < 20
                ? "Poor Performance!"
                : percentage >= 50
                  ? "Great Performace"
                  : percentage >= 70
                    ? "Outstanding Performance!"
                    : "Outstanding Performance!"}
          </h1>

          <p className="text-sm text-[#43474E] min-[1200px]:max-w-148.25 text-center animNavtext">
            Congratulations, you've successfully completed the Final Examination
            with an exceptional result.
          </p>

          <div className="animationNav border-[#002045] border-8 min-[768px]:max-h-44 min-[768px]:max-w-44 max-[768px]:h-40 min-[768px]:h-full min-[768px]:w-full max-[768px]:w-40 rounded-full flex flex-col items-center justify-center animNavtext">
            <h3 className="text-[#002045] font-semibold min-[768px]:text-4xl max-[768px]:text-3xl">
              {percentage}
              <span className="text-[#002045] text-2xl font-semibold">%</span>
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
                  className="animationNav bg-[#E9EEF3] w-full max-h-26.5 max-w-37.25 h-full box rounded-sm flex flex-col gap-2 justify-between text-center animNavtext"
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

            <div className="animationNav min-[1200px]:max-h-76.5 min-[1200px]:h-full max-[1200px]:h-fit box w-full flex flex-col gap-5">
              <div className="flex gap-2 items-center animNavtext">
                <MdSubject size={24} />
                <h2 className="text-2xl font-semibold">Subject Proficiency</h2>
              </div>

              <div className="flex flex-col gap-5">
                {progressBars.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-2 w-full animNavtext"
                  >
                    <div className="w-full flex justify-between items-center">
                      <h3 className="text-[#171C20] text-sm font-semibold">
                        {data.title}
                      </h3>
                      <p>{data.percent}%</p>
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
            {/* <button className="animationNav bg-[#002045] text-sm font-bold text-white w-full max-h-17 h-full py-6 flex gap-2 justify-center items-center">
              <VscPreview size={24} />
              Review Answers
            </button> */}

            <Link
              to={"/dashboard"}
              className="animationNav bg-[#E4E9EE] text-sm font-bold text-[#171C20] w-full max-h-17 h-full py-6 flex gap-2 justify-center items-center"
            >
              <MdDashboard size={24} />
              Return to Dashboard
            </Link>

            <div className="animationNav max-h-43.75 h-full bg-[#D6E0F6] w-full p-5 rounded-lg flex flex-col gap-3 max-[1200px]:hidden animNavtext">
              <h3 className="text-xs text-[#596376] font-bold">
                NEXT MILESTONE
              </h3>

              <p className="text-sm text-[#596376] font-normal">
                Based on your results, we recommend the Advanced Analytics
                Seminar starting next week.
              </p>
            </div>
          </div>
          <div className="animationNav max-h-fit h-full bg-[#D6E0F6] w-full p-5 rounded-lg flex flex-col gap-3 min-[1200px]:hidden animNavtext">
            <h3 className="text-xs text-[#596376] font-bold">NEXT MILESTONE</h3>

            <p className="text-sm text-[#596376] font-normal">
              Based on your results, we recommend the Advanced{" "}
              {userData.department} Seminar starting next week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformancePage;
