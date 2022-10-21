import React, { useEffect, useState } from "react";
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

function Tests({ tests }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [testList, setTestList] = useState(tests);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredTests = filterTests(searchTerm, tests);
      setTestList(filteredTests);
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchTerm]);

  return (
    <>
      <Header>
        <div className="tests__search">
          <input
            type="search"
            className="tests__search-input"
            placeholder="Поиск"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
      </Header>
      <section className="tests">
        <div className="conteiner">
          <div className="tests__inner">
            {/* <div className="tests__inner-top">
              <h2 className="tests__title">Тесты</h2>
            </div> */}
            <div className="tests__list">
              {testList.map((test) => (
                <TestItem key={test.id} test={test} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tests;
