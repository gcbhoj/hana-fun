import React, { useState } from "react";
import MathComponent from "../Components/QuizPageComponents/MathComponent";
import GeneralKnowledgeComponent from "../Components/QuizPageComponents/GeneralKnowledgeComponent";

const QuizPage = () => {
  const headerList = [
    { headerTitle: "Math's", displayElement: <MathComponent /> },
    {
      headerTitle: "General Knowledge",
      displayElement: <GeneralKnowledgeComponent />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Default to first tab

  return (
    <div className="p-4">
      {/* Tab headers as side-by-side list */}
      <ul className="flex gap-6 mb-4">
        {headerList.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer text-lg font-semibold pb-2 border-b-2 transition-all duration-150 text-gray-950 
              ${
                activeIndex === index
                  ? "dark:text-zinc-400"
                  : "border-transparent text-gray-600 hover:dark:text-gray-400 hover:text-[#422450]"
              }`}
          >
            {item.headerTitle}
          </li>
        ))}
      </ul>

      {/* Display selected component */}
      <div>{headerList[activeIndex].displayElement}</div>
    </div>
  );
};

export default QuizPage;
