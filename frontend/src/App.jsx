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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/learn" element={<LearningPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
