import gsap from "gsap";
import { LuTimer } from "react-icons/lu";
import { MdNavigateNext } from "react-icons/md";

const ExamsPage = () => {
  const answers = [
    "Bauhaus Functionalism",
    "Modern Minimalism",
    "Neoclassical Revival",
    "Art Deco Streamline",
  ];

  const handleAnim = (i) => {
    gsap.to(`.index-${i}`, {
      background: "#D6E0F6",
      borderColor: "#002045",
      border: "4px",
      duration: 0.1,
    });
  };

  return (
    <section className="h-full w-full flex max-[768px]:flex-wrap justify-center min-[1200px]:gap-10 max-[1100px]:gap-5 max-[768px]:gap-10 p-10 max-[481px]:p-7 overflow-scroll">
      <div className="flex flex-col gap-2 box bg-[#EFF4F9] w-fit h-fit min-[768px]:hidden">
        <div className="flex gap-2 items-center">
          <LuTimer size={24} />
          <p className="text-[#43474E] text-xs font-bold uppercase">
            time remaining
          </p>
        </div>
        <h2 className="font-semibold text-4xl text-[#002045]">01:24:05</h2>
      </div>

      <div className="max-w-228 w-full h-full flex flex-col gap-10">
        <div className="w-full min-[1200px]:max-h-127 min-[1200px]:h-full max-[1200px]:h-fit box flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-[#43474E] font-bold">
              QUESTION 5 OF 20
            </span>
            <p className="text-xs text-[#43474E] font-bold">4 Points</p>
          </div>
          <h1 className="font-medium min-[1200px]:text-lg max-[1120px]:text-sm text-[#171C20] leading-7">
            Which of the following architectural styles emphasizes a "less is
            more" philosophy, characterized by simplicity, clean lines, and a
            monochromatic palette with color used as an accent?
          </h1>

          <div className="flex flex-col gap-4">
            {answers.map((data, index) => (
              <label
                key={index}
                onClick={() => handleAnim(index)}
                className={` max-h-19 h-full box flex gap-5 items-center focus:bg-[#D6E0F6]`}
              >
                <input
                  type="radio"
                  className="rounded-full size-4"
                  name="answers"
                />
                {data}
              </label>
            ))}
          </div>
        </div>
        <div className="flex max-[768px]:flex-wrap max-[768px]:justify-center min-[768px]:justify-between w-full min-[768px]:max-h-14.5 h-full max-[768px]:gap-5">
          <button className="p-3 max-w-57.75 w-full rounded-sm border border-[#C4C6CF] text-[#43474E] font-bold">
            Mark for Review
          </button>
          <button className="p-3 max-w-57.75 w-full rounded-sm bg-[#002045] text-white font-bold flex justify-center items-center">
            Save & Next
            <MdNavigateNext size={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 box bg-[#EFF4F9] w-fit h-fit max-[768px]:hidden">
        <div className="flex gap-2 items-center">
          <LuTimer size={24} />
          <p className="text-[#43474E] text-xs font-bold uppercase">
            time remaining
          </p>
        </div>
        <h2 className="font-semibold text-4xl text-[#002045]">01:24:05</h2>
      </div>
    </section>
  );
};

export default ExamsPage;
