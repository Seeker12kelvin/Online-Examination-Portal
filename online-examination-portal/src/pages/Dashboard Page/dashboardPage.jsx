import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";
import { BsQuestion } from "react-icons/bs";
import { IoMdStopwatch } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { TbMicroscopeFilled } from "react-icons/tb";
import MenuBtn from "../../components/menuBtn";

const DashboardPage = () => {
  const cardsDetail = [
    {
      icon: <TbMicroscopeFilled size={30} />,
      title: "Molecular Biology: DNA Replication",
      desc: "A detailed assessment covering helicase functions, Okazaki fragments, and polymerase error rates.",
      time: "20 MIN",
      num_of_quest: "15 Qs",
      borderColor: "black",
      urgency: "intermediate",
    },
    {
      icon: <TfiWrite size={30} />,
      title: "Modern History: The Industrial Revolution",
      desc: "Focusing on social impacts and technological breakthroughs in the 18th-century textile industry.",
      time: "15 MIN",
      num_of_quest: "10 Qs",
      borderColor: "#43474E",
      urgency: "introductory",
    },
  ];

  const performanceList = [
    { text: "Exams Taken", num: "12" },
    { text: "Average Score", num: "82/100" },
    { text: "Global Rank", num: "Top 10%" },
  ];

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
          <div className="max-w-160.75 min-[870px]:max-h-68.5 w-full min-[870px]:h-full max-[870px]:h-fit box flex flex-col max-[615px]:gap-5 min-[615px]:gap-2 p-0">
            <div className="p-4 flex flex-col gap-2">
              <div className="bg-[#1A365D] rounded-4xl py-1 px-3 w-fit">
                <p className="text-[#86A0CD] uppercase text-xs">
                  Upcoming Exam
                </p>
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
                    <span className="text-4xl font-semibold text-[#002045]">
                      01
                    </span>
                    d{" "}
                    <span className="text-4xl font-semibold text-[#002045]">
                      14
                    </span>
                    h{" "}
                    <span className="text-4xl font-semibold text-[#002045]">
                      22
                    </span>
                    m
                  </h3>
                </div>
              </div>
            </div>
            <div className="min-[870px]:max-h-18 w-full min-[870px]:h-full max-[870px]:h-fit bg-[#E4E9EE] flex flex-wrap justify-between items-center p-4 max-[870px]:gap-3 rounded-b-xl">
              <div className="flex gap-3 items-center">
                <BsCardChecklist size={24} />
                <p className="text-[#596376] text-sm">
                  50 Questions • 3 Sections
                </p>
              </div>

              <button className="bg-[#002045] py-2 px-10 text-white rounded-sm">
                Prepare Now
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap justify-between items-center">
              <h2 className="text-[#171C20] text-2xl font-semibold">
                Available Quizzes
              </h2>
              <Link
                to={"."}
                className="text-[#002045] font-bold text-xs uppercase"
              >
                view all
              </Link>
            </div>

            {cardsDetail.map((data, index) => (
              <div
                key={index}
                className={`p-5 border-l-[${data.borderColor}] border-l-3 border border-y-[#C4C6CF] border-r-[#C4C6CF] rounded-xl flex flex-wrap max-[1001px]:gap-6 max-[1001px]:justify-center justify-between items-center`}
              >
                <div className="bg-[#ADC7F7] py-3 px-2 rounded-lg w-fit">
                  {data.icon}
                </div>

                <div className="max-w-90 w-full flex flex-col gap-2">
                  <h3 className="text-[#002045] font-bold leading-3 max-[768px]:leading-normal">
                    {data.title}
                  </h3>
                  <p className="text-sm text-[#43474E] font-normal">
                    {data.desc}
                  </p>
                  <div className="flex gap-5 items-center">
                    <div className="flex gap-1 items-center">
                      <IoMdStopwatch />
                      <p className="text-[#43474E] text-xs font-bold">
                        {data.time}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <BsQuestion />
                      <p className="text-[#43474E] text-xs font-bold">
                        {data.num_of_quest}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <AiOutlineStock />
                      <p className="text-[#002715] text-xs font-bold">
                        {data.urgency}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="bg-transparent text-[#002045] font-bold box p-2 max-[930px]:w-[50%] max-[481px]:w-[80%] max-[674px]:w-[50%]">
                  Start Quiz
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-77.25 w-full max-h-130.5 h-full box flex flex-col justify-between">
          <h2 className="text-[#43474E] text-xs font-bold uppercase tracking-[0.6px]">
            overall performance
          </h2>

          <div className="border-[#002045] border-8 max-h-35 max-w-35 h-full w-full rounded-full self-center flex flex-col items-center justify-center">
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
                className="bg-[#F5FAFF] max-h-14 p-4 flex justify-between items-center rounded-sm"
              >
                <p className="text-[#43474E] text-sm">{data.text}</p>
                <p className="text-[#002045] font-bold">{data.num}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
