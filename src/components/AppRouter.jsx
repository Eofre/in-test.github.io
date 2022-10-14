import React from "react";
import { Routes, Route } from "react-router-dom";
import Tests from "../pages/tests/Tests";
import CreateTest from "../pages/createTest/CreateTest";
import TestHome from "../pages/testHome/TestHome";
import TestGame from "../pages/testGame/TestGame";
import TestResult from "../pages/testResult/TestResult";

function AppRouter({ tests, addTest }) {
  return (
    <Routes>
      <Route exat path="/" element={<Tests tests={tests} />} />
      <Route exat path="/test/:id" element={<TestHome />} />
      <Route exat path="/test/game/:id" element={<TestGame />} />
      <Route exat path="/test/game/result/:id" element={<TestResult />} />
      <Route
        exat
        path="/createTest"
        element={<CreateTest addTest={addTest} />}
      />
    </Routes>
  );
}

export default AppRouter;
