import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Tests from "../pages/tests/Tests";
import TestHome from "../components/test/TestHome";
import TestGame from "../components/test/TestGame";
import TestResult from "../components/test/TestResult";
import Login from "../pages/login/Login";

function AppRouter({ tests }) {
  console.log(tests);
  return (
    <Routes>
      <Route exat path="/" element={<Home tests={tests} />} />
      <Route exat path="/tests" element={<Tests tests={tests} />} />
      <Route exat path="/test/:id" element={<TestHome />} />
      <Route exat path="/test/game/:id" element={<TestGame />} />
      <Route exat path="/test/game/result/:id" element={<TestResult />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRouter;
