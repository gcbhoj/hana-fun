import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

import Button from "../UIComponents/Button";
import TopNavBar from "../Components/NavBarComponents/TopNavBar";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Define routes where you want to hide the main top nav
  const hiddenRoutes = ["/learn", "/game"]; // Can be extended

  // If the pathname starts with one of the hidden routes
  const shouldHideTopNav = hiddenRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  if (shouldHideTopNav) {
    return (
      <div className="p-4 flex items-center gap-4 dark:bg-zinc-800 dark:text-white">
        <Button
          width="w-10"
          height="h-10"
          hoverLabel="Back"
          onClick={() => navigate("/")}
          iconImage={
            <MdKeyboardBackspace className="dark:text-zinc-400" />
          }
        />

        <h1 className="text-xl font-semibold">
          {location.pathname.includes("/learn")
            ? "Learning Mode"
            : location.pathname.includes("/game")
            ? "Game Mode"
            : "Back"}
        </h1>
      </div>
    );
  }

  return <TopNavBar />;
};

export default Navbar;
