"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Question, category } from "@/type/type";
import { categories, fetchData } from "@/servers/server";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function HeroSection() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [category, setCategory] = useState<category[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [amount, setAmount] = useState<string>("10");
  const [categoryId, setCategoryId] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [clicked, setClicked] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(30);
  const [laodTimer, setLoadTimer] = useState<boolean>(false);

  async function getCatogry(): Promise<void> {
    let categorys = await categories();
    setCategory(categorys);
  }
  getCatogry();
  const loadQuestions = async (): Promise<void> => {
    setLoadTimer(true);
    const questionsData = await fetchData(amount, categoryId, type);
    const modifiedQuestions = questionsData.map((elem) => {
      let index = Math.floor(
        Math.random() * (elem.incorrect_answers.length + 1)
      );
      let incorrectAnswersCopy = [...elem.incorrect_answers];
      incorrectAnswersCopy.splice(index, 0, elem.correct_answer);
      return {
        ...elem,
        incorrect_answers: incorrectAnswersCopy,
      };
    });
    setQuestions(modifiedQuestions);
  };
  const handleNextQuestion = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const buttonElement = e.currentTarget;
    const parentElement = buttonElement.parentElement?.children[1];
    if (parentElement && parentElement.children.length > 0) {
      Array.from(parentElement.children).forEach((elem: any): any => {
        elem.classList.remove("bg-green-400");
        elem.classList.remove("bg-red-400");
      });
    }

    if (clicked) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setClicked(false);
      setTimer(30);
    } else {
      toast("Please choose option", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  function handleOptionClick(
    e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ): void {
    if (
      e.currentTarget.textContent ==
        questions[currentQuestionIndex].correct_answer &&
      !clicked
    ) {
      toast.success("Right answer!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      e.currentTarget.classList.add("bg-green-400");
      setScore(score + 1);
      setClicked(true);
    } else {
      toast.error(" Wrong answer!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setClicked(true);
      const parentElement = e.currentTarget.parentElement;
      if (parentElement && parentElement.children.length > 0) {
        Array.from(parentElement.children).forEach((elem: any) => {
          if (
            elem.innerHTML == questions[currentQuestionIndex].correct_answer
          ) {
            elem.classList.add("bg-green-400");
          } else {
            elem.classList.add("bg-red-400");
          }
        });
      }
    }
  }
  if (laodTimer) {
    setTimeout((): void => {
      if (!clicked) {
        if (timer > 0) {
          setTimer(timer - 1);
        } else {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      } else {
      }
    }, 1000);
  }
  return (
    <div className="min-h-[80vh] mb-6 md:mb-0">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {questions.length == 0 ? (
        <div className="container pt-4">
          <div className="text-center">
            <h1 className=" text-4xl font-bold pb-2 ">
              Welcome to the Ultimate Quiz App
            </h1>
            <p className="text-xl font-light pb-4">
              Select your ultimate quiz and test your knowledge
            </p>
          </div>
          <div className=" flex justify-evenly flex-wrap gap-8 lg:gap-0">
            <div className="w-[300px] min-h-[270px] p-4 border-2 border-gray-300 rounded-lg ">
              <h1 className="text-center text-3xl font-bold py-2">
                Total Questions
              </h1>
              <div className="text-center">
                <select
                  className="border-2 border-gray-300 w-full rounded-lg py-2"
                  name="name"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={25}>25</option>
                  <option value={30}>30</option>
                </select>
              </div>
            </div>
            <div className="w-[300px] min-h-[270px] p-4 border-2 border-gray-300 rounded-lg">
              <h1 className="text-center text-3xl font-bold py-2">
                Catagories
              </h1>
              <div className="text-center">
                <select
                  className="border-2 border-gray-300 w-full rounded-lg py-2 "
                  id="category"
                  name="name"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option>Any Category</option>
                  {category.map((data: category) => (
                    <option
                      className="md:text-1xl text-[11px]  "
                      value={data.id}
                    >
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="w-[300px] min-h-[270px] p-4 border-2 border-gray-300 rounded-lg">
              <h1 className="text-center text-3xl font-bold py-2">
                Difficulty Level
              </h1>
              <div className="text-center">
                <select
                  className="border-2 border-gray-300 w-full rounded-lg py-2"
                  name="name"
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option>Any Difficulty</option>
                  <option value={"easy"}>Easy</option>
                  <option value={"medium"}>Medium</option>
                  <option value={"hard"}>Hard</option>
                </select>
              </div>
            </div>
          </div>
          <div className="text-center pt-4  ">
            <Button onClick={loadQuestions}>Start Quiz</Button>
            <h2 className="py-2 font-semibold text-xl">YOU CAN DO IT !</h2>
          </div>
        </div>
      ) : currentQuestionIndex >= questions.length ? (
        <div>
          {score == questions.length ? (
            <div className="mx-3 md:container md:mx-auto md:w-[66%] border-2 border-gray-300 mt-16 p-4 text-center rounded-lg ">
              <h1 className="text-green-600 font-semibold text-3xl pb-2">
                CONGRATS YOU PASSED THE QUIZ WITH FULL POINTS
              </h1>
              <h1 className="text-4xl font-bold pb-2">
                You have completed Your Quiz
              </h1>
              <p className="text-3xl font-semibold pb-2">
                TOTAL POINTS:{score}/{amount}
              </p>
              <h4 className="text-lg pb-2">want to try again ?</h4>
              <Button>
                {" "}
                <a href="/">NEW QUIZ</a>
              </Button>
            </div>
          ) : score >= questions.length / 2 ? (
            <div className=" mx-3 md:container md:mx-auto md:w-[66%] border-2 border-gray-300 mt-16 p-4 text-center rounded-lg ">
              <h1 className="text-green-600 font-semibold text-3xl pb-2">
                CONGRATS YOU PASSED THE QUIZ
              </h1>
              <h1 className="text-4xl font-bold pb-2">
                You have completed Your Quiz
              </h1>
              <p className="text-3xl font-semibold pb-2">
                TOTAL POINTS:{score}/{amount}
              </p>
              <h4 className="text-lg pb-2">want to try again ?</h4>
              <Button>
                {" "}
                <a href="/">NEW QUIZ</a>
              </Button>
            </div>
          ) : (
            <div className=" mx-3 md:container md:mx-auto md:w-[66%] border-2 border-gray-300 mt-16 p-4 text-center rounded-lg ">
              <h1 className="text-red-500 font-semibold text-3xl pb-2">
                BETTER LUCK NEXT TIME
              </h1>
              <h1 className="text-4xl font-bold pb-2">
                You have completed Your Quiz
              </h1>
              <p className="text-3xl font-semibold pb-2">
                TOTAL POINTS:{score}/{amount}
              </p>
              <h4 className="text-lg pb-2">want to try again ?</h4>
              <Button>
                {" "}
                <a href="/">NEW QUIZ</a>
              </Button>
            </div>
          )}
          <br />
        </div>
      ) : (
        <div className="lg:container lg:mx-auto py-2">
          <div className="text-center">
            <h2 className="text-xl font-semibold inline-block px-2">
              Question No{" "}
            </h2>
            <p className="text-lg font-light inline-block">
              {currentQuestionIndex + 1} out of {amount}
            </p>
            <div>
              <h2 className="text-xl font-semibold inline-block px-2">Timer</h2>
              <p className="text-lg font-light inline-block">{timer}</p>
            </div>
            <div></div>
          </div>
          <div className=" md:mx-auto md:w-[70%] border-2 border-gray-300 p-4 mx-3">
            <h1 className="text-3xl font-bold py-2 break-words">
              {questions[currentQuestionIndex].question}
            </h1>
            <div>
              {questions[currentQuestionIndex].incorrect_answers.map(
                (elem: string, index: number) => (
                  <h2
                    onClick={(
                      e: React.MouseEvent<HTMLHeadingElement, MouseEvent>
                    ) => handleOptionClick(e)}
                    key={index}
                    className="text-xl pb-2 mb-2 font-semibold w-full border-2 border-gray-300 rounded-lg p-2 cursor-pointer "
                  >
                    {elem}
                  </h2>
                )
              )}
            </div>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                handleNextQuestion(e)
              }
              className=" text-lg px-4"
            >
              Next Question
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
export default HeroSection;
