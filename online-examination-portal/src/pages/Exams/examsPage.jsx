import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { LuTimer } from "react-icons/lu";
import { MdDashboard, MdNavigateNext } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../components/user";
import { computer_science, information_technology } from "../data/data";
import { handleExamLogic } from "../../firebase/firestore";
import Loading from "../../components/loading";

const EXAM_SETS = {
  "computer science": computer_science,
  "information technology": information_technology,
  "modern history: the industrial revolution": information_technology,
};

const TOTAL_TIME = 60 * 20;

const ExamRunner = ({ title }) => {
  const { handleExamNum, setCanAccessExam, setActiveExamTitle, userId } =
    useContext(UserContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviewed, setReviewed] = useState({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(null);
  const [skippedQuestions, setSkippedQuestions] = useState();
  const answersRef = useRef(answers);

  const questions = useMemo(() => {
    const normalizedTitle = title?.trim().toLowerCase();
    return EXAM_SETS[normalizedTitle] || [];
  }, [title]);

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  useEffect(() => {
    if (!questions.length || finished) return undefined;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          setFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [questions, finished]);

  useEffect(() => {
    if (!finished) return;

    const calculatedScore = questions.reduce(
      (total, question) =>
        total + (answersRef.current[question.id] === question.answer ? 1 : 0),
      0,
    );

    setScore(calculatedScore);
    handleExamNum();
  }, [finished, questions, handleExamNum]);

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = currentQuestion
    ? answers[currentQuestion.id] || ""
    : "";
  const reviewCount = Object.keys(reviewed).length;

  const handleAnswerChange = (value) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const handleNext = () => {
    if (!currentQuestion) return;
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }
    handleFinish();
  };

  const handleMarkForReview = () => {
    if (!currentQuestion) return;
    setReviewed((prev) => ({ ...prev, [currentQuestion.id]: true }));
    handleNext();
  };

  const handleFinish = () => {
    if (!questions.length || finished) return;

    const calculatedScore = questions.reduce(
      (total, question) =>
        total + (answers[question.id] === question.answer ? 1 : 0),
      0,
    );

    const skippedQuestions = questions.filter(
      (question) => !answers[question.id],
    );

    setSkippedQuestions(skippedQuestions.length);
    setScore(calculatedScore);
    setFinished(true);
    handleExamNum();
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleExam = async () => {
    const dividedScore = score / questions.length;
    const percentage = Math.round(dividedScore * 100);
    const calculate = percentage / 100;
    const correct = Math.floor(calculate * questions.length);
    const incorrect = questions.length - correct;
    const timeSpent = TOTAL_TIME - timeLeft;
    const remainingTime = formatDuration(timeSpent);
    const examScore = {
      percentage,
      skippedQuestions,
      correct,
      incorrect,
      remainingTime,
    };
    await handleExamLogic(examScore, userId);
    console.log(examScore);
    setCanAccessExam(false);
    setActiveExamTitle(null);
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${minutes}m : ${secs}s`;
  };

  return (
    <section className="h-fit items-start w-full flex max-[768px]:flex-wrap justify-center min-[1200px]:gap-10 max-[1100px]:gap-5 max-[768px]:gap-10 p-10 max-[481px]:p-7 overflow-scroll">
      <div className="flex flex-col gap-2 box bg-[#EFF4F9] w-fit h-fit md:hidden items-center">
        <div className="flex gap-2 items-center">
          <LuTimer size={24} />
          <p className="text-[#43474E] text-xs font-bold uppercase">
            time remaining
          </p>
        </div>
        <h2 className="font-semibold text-4xl text-[#002045]">
          {formatTime(timeLeft)}
        </h2>
      </div>

      <div className="max-w-228 w-full h-full flex flex-col max-md:items-center gap-10 overflow-x-scroll">
        <div className="max-[345px]:max-h-full max-md:max-h-122.5 min-[1200px]:max-h-127 h-full w-full overflow-hidden flex flex-col gap-5 items-center">
          {finished ? (
            <div className="h-full w-full box max-[345px]:p-5 p-8 flex flex-col gap-4 items-center text-center">
              <h1 className="max-[481px]:text-3xl text-5xl font-semibold text-[#002045]">
                Exam complete
              </h1>
              <p className="text-[#43474E] text-sm">
                You answered {Object.keys(answers).length} of {questions.length}{" "}
                questions.
              </p>
              <h2 className="text-[#43474E] text-xl">
                Score: {score}/{questions.length}
              </h2>
              <button
                onClick={() => handleExam()}
                className="animationNav bg-[#E4E9EE] text-sm font-bold text-[#171C20] w-fit max-h-17 h-full rounded-sm max-[345px]:p-4 p-6"
              >
                <Link to={"/dashboard"} className="flex items-center gap-2">
                  <MdDashboard size={24} />
                  Return to Dashboard
                </Link>
              </button>
            </div>
          ) : questions.length ? (
            <div className="w-full min-[1200px]:max-h-127 min-[1200px]:h-full max-[1200px]:h-fit box flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#43474E] font-bold">
                  QUESTION {currentIndex + 1} OF {questions.length}
                </span>
                <p className="text-xs text-[#43474E] font-bold">4 Points</p>
              </div>
              <h1 className="font-medium min-[1200px]:text-lg max-[1120px]:text-sm text-[#171C20] leading-7">
                {currentQuestion.question}
              </h1>

              {[
                currentQuestion.option_one,
                currentQuestion.option_two,
                currentQuestion.option_three,
                currentQuestion.option_four,
              ].map((option, index) => (
                <div key={index + 1} className="flex flex-col gap-4">
                  <label className="max-h-19 h-full box flex gap-5 items-center focus:bg-[#D6E0F6] p-4 rounded-sm">
                    <input
                      type="radio"
                      value={option}
                      checked={selectedAnswer === option}
                      onChange={() => handleAnswerChange(option)}
                      className="checked:bg-[#002045] size-4"
                      name="answers"
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full box p-8 text-center">
              <h1 className="font-medium min-[1200px]:text-lg max-[1120px]:text-sm text-[#171C20] leading-7">
                No exam found for "{title}".
              </h1>
              <p className="text-sm text-[#43474E] mt-2">
                Please select a valid quiz from the dashboard.
              </p>
            </div>
          )}
        </div>

        {!finished && questions.length ? (
          <>
            {reviewCount > 0 ? (
              <div className="text-sm text-[#43474E] font-semibold">
                Marked for review: {reviewCount}
              </div>
            ) : null}
            <div className="flex max-[768px]:flex-wrap max-[768px]:justify-center min-[768px]:justify-between w-full min-[768px]:max-h-14.5 h-full max-[768px]:gap-5">
              <button
                onClick={handleMarkForReview}
                className="p-3 max-w-57.75 w-full rounded-sm border border-[#C4C6CF] text-[#43474E] font-bold"
              >
                Mark for Review
              </button>
              <button
                onClick={handleNext}
                className="p-3 max-w-57.75 w-full rounded-sm bg-[#002045] text-white font-bold flex justify-center items-center"
              >
                {currentIndex < questions.length - 1
                  ? "Save & Next"
                  : "Finish Exam"}
                <MdNavigateNext size={24} />
              </button>
            </div>
          </>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 box bg-[#EFF4F9] w-fit h-fit max-[768px]:hidden">
        <div className="flex gap-2 items-center">
          <LuTimer size={24} />
          <p className="text-[#43474E] text-xs font-bold uppercase">
            time remaining
          </p>
        </div>
        <h2 className="font-semibold text-4xl text-[#002045]">
          {formatTime(timeLeft)}
        </h2>
      </div>
    </section>
  );
};

const ExamsPage = () => {
  const { canAccessExam, activeExamTitle } = useContext(UserContext);
  const { title } = useParams();
  if (!canAccessExam || title !== activeExamTitle) {
    return <Loading />;
  } else {
    return <ExamRunner key={title} title={title} />;
  }
};

export default ExamsPage;
