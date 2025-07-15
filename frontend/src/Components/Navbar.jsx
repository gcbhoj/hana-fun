import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

import Button from "../UIComponents/Button";
import TopNavBar from "../Components/NavBarComponents/TopNavBar";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const hiddenRoutes = ["/learn", "/game", "/quiz"];

  const shouldHideTopNav = hiddenRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  const getTitle = () => {
    if (location.pathname.startsWith("/learn")) return "Learning Mode";
    if (location.pathname.startsWith("/game")) return "Game Mode";
    if (location.pathname.startsWith("/quiz")) return "Quiz Mode";
    return "Back";
  };

  if (shouldHideTopNav) {
    return (
      <div className="p-4 flex items-center gap-4 dark:bg-zinc-800 dark:text-white">
        <Button
          width="w-10"
          height="h-10"
          hoverLabel="Back"
          onClick={() => navigate("/")}
          iconImage={<MdKeyboardBackspace className="dark:text-zinc-400" />}
        />
        <h1 className="text-xl font-semibold">{getTitle()}</h1>
      </div>
    );
  }

  return <TopNavBar />;
};

export default Navbar;
