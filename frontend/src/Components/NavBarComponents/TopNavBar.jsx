import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  const navBarItems = [
    { itemName: "Home", pageLink: "/" },
    { itemName: "Games", pageLink: "/games" },
    { itemName: "Learning", pageLink: "/learn" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <nav className="ml-5 mb-10 md:flex gap-6 p-4">
      <ul className="flex gap-5">
        {navBarItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.pageLink}
              onClick={() => setActiveIndex(index)}
              className={`font-[Roboto] text-xl cursor-pointer transition-all duration-200 animate-pulse
                dark:text-zinc-500 hover:text-[#422450] hover:underline hover:underline-offset-8 hover:scale-105 dark:hover:text-zinc-400  
                ${
                  activeIndex === index
                    ? "dark:text-zinc-200 font-semibold underline underline-offset-8 active:scale-90 active:text-[12px] active:font-thin"
                    : ""
                }
              `}
            >
              {item.itemName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNavBar;
