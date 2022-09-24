import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Tests from "../pages/tests/Tests";
import TestHome from "../components/test/TestHome";
import TestGame from "../components/test/TestGame";
import TestResult from "../components/test/TestResult";
import CreateTest from "../pages/createTest/CreateTest";

function AppRouter({ tests, setTests }) {
  return (
    <Routes>
      <Route exat path="/" element={<Tests tests={tests} />} />
      <Route exat path="/test/:id" element={<TestHome />} />
      <Route exat path="/test/game/:id" element={<TestGame />} />
      <Route exat path="/test/game/result/:id" element={<TestResult />} />
      <Route
        exat
        path="/createTest"
        element={<CreateTest tests={tests} setTests={setTests} />}
      />
    </Routes>
  );
}

export default AppRouter;
