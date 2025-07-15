import React from "react";
import LearningPage from "./Pages/LearningPage";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import QuizPage from "./Pages/QuizPage";
import GamesPage from "./Pages/GamesPage";
import AddWordProblems from "./Pages/MathQuizPages/AddWordProblems";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/learn" element={<LearningPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/addWrdProb" element={<AddWordProblems />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
