import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PostService from "../../API/PostService.js";
import Header from "../../components/header/Header.jsx";
import TestItem from "../../components/testItem/TestItem.jsx";

import "./Tests.scss";

const filterTests = (searchText, listOfTests) => {
  if (!searchText) {
    return listOfTests;
  }
  return listOfTests.filter(({ title }) =>
    title.toLowerCase().includes(searchText.toLowerCase())
  );
};

function Tests({ tests, setPathname, searchTerm }) {
  const [testList, setTestList] = useState(tests);

  const location = useLocation();
  setPathname(location.pathname);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredTests = filterTests(searchTerm, tests);
      setTestList(filteredTests);
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  return (
    <section className="tests">
      <div className="conteiner">
        <div className="tests__inner">
          <div className="tests__list">
            {testList.map((test) => (
              <TestItem key={test.id} test={test} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tests;
