import React from "react";
import { Link, Links } from "react-router-dom";

const MathComponent = () => {
  const quizList = [
    {
      quizType: "Addition Word Problems",
      pageReference: "/addWrdProb",
    },
    {
      quizType: "Simple Addition",
      pageReference: "/simple-addition",
    },
    {
      quizType: "Number Line Addition",
      pageReference: "/number-line-addition",
    },
    {
      quizType: "Missing Addends",
      pageReference: "/missing-addends",
    },
  ];

  return (
    <div className="border-2 p-6 rounded-md shadow-md w-full md:w-2/3 lg:w-1/2 mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Math Quizzes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quizList.map((quiz, index) => (
          <Link to={quiz.pageReference}>
            <div
              key={index}
              className="bg-zinc-700 text-zinc-400 hover:text-zinc-200 px-4 py-3 rounded-lg text-center dark:hover:bg-zinc-600 cursor-pointer transition-all hover:scale-x-105"
            >
              {quiz.quizType}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MathComponent;
