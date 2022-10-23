import axios from "axios";
import { useEffect, useState } from "react";
import PostService from "./API/PostService";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Header from "./components/header/Header";
import DB from "./server/db.json";

function App() {
  const [tests, setTests] = useState(DB.tests);
  const [pathname, setPathname] = useState("/");
  const [pathnameId, setPathnameId] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [isTestsLoading, setIsTestsLoading] = useState(false);
  // useEffect(() => {
  //   fetchTests();
  // }, []);

  // async function fetchTests() {
  //   const tests = await PostService.getAll();
  //   setTests(tests);
  //   console.log("Всё");
  // }
  const addTest = (test) => {
    setTests([...tests, test]);
  };

  return (
    <div className="App">
      {pathname !== `/test/game/${pathnameId}` ? (
        <Header>
          {pathname === "/" ? (
            <div className="tests__search">
              <input
                type="search"
                className="tests__search-input"
                placeholder="Поиск"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              ></input>
            </div>
          ) : (
            <></>
          )}
        </Header>
      ) : (
        <></>
      )}
      <main>
        <AppRouter
          tests={tests}
          addTest={addTest}
          setPathnameId={setPathnameId}
          setPathname={setPathname}
          searchTerm={searchTerm}
        />
      </main>
    </div>
  );
}

export default App;
