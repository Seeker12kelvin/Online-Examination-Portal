import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";
import { BsQuestion } from "react-icons/bs";
import { IoMdStopwatch } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { TbMicroscopeFilled } from "react-icons/tb";

const DashboardQuizzes = () => {
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

  return (
    <div className="animationNav flex flex-col gap-4">
      <div className="flex flex-wrap justify-between items-center animNavtext">
        <h2 className="text-[#171C20] text-2xl font-semibold">
          Available Quizzes
        </h2>
        <Link to={"."} className="text-[#002045] font-bold text-xs uppercase">
          view all
        </Link>
      </div>

      {cardsDetail.map((data, index) => (
        <div
          key={index}
          className={`p-5 border-l-[${data.borderColor}] border-l-3 border border-y-[#C4C6CF] border-r-[#C4C6CF] rounded-xl flex flex-wrap max-[1001px]:gap-6 max-[1001px]:justify-center justify-between items-center`}
        >
          <div className="bg-[#ADC7F7] py-3 px-2 rounded-lg w-fit animNavtext">
            {data.icon}
          </div>

          <div className="max-w-90 w-full flex flex-col gap-2 animNavtext">
            <h3 className="text-[#002045] font-bold leading-3 max-[768px]:leading-normal">
              {data.title}
            </h3>
            <p className="text-sm text-[#43474E] font-normal">{data.desc}</p>
            <div className="flex gap-5 items-center">
              <div className="flex gap-1 items-center">
                <IoMdStopwatch />
                <p className="text-[#43474E] text-xs font-bold">{data.time}</p>
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

          <button className="animNavtext bg-transparent text-[#002045] font-bold box p-2 max-[930px]:w-[50%] max-[481px]:w-[80%] max-[674px]:w-[50%]">
            Start Quiz
          </button>
        </div>
      ))}
    </div>
  );
};

export default DashboardQuizzes;
