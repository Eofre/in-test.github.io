import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tests from "../pages/tests/Tests";
import CreateTest from "../pages/createTest/CreateTest";
import TestHome from "../pages/testHome/TestHome";
import TestGame from "../pages/testGame/TestGame";
import TestResult from "../pages/testResult/TestResult";
import Header from "./header/Header";

function AppRouter({ tests, addTest, setPathname, setPathnameId, searchTerm }) {
  return (
    <Routes>
      <Route
        exat
        path="/"
        element={
          <Tests
            tests={tests}
            setPathname={setPathname}
            searchTerm={searchTerm}
          />
        }
      />
      <Route
        exat
        path="/test/:id"
        element={<TestHome setPathname={setPathname} />}
      />
      <Route
        exat
        path="/test/game/:id"
        element={
          <TestGame setPathnameId={setPathnameId} setPathname={setPathname} />
        }
      />
      <Route exat path="/test/game/result/:id" element={<TestResult />} />
      <Route
        exat
        path="/createTest"
        element={<CreateTest addTest={addTest} setPathname={setPathname} />}
      />
    </Routes>
  );
}

export default AppRouter;
