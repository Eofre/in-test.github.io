import React from "react";
import "./Home.scss";
import TestGame from "../../components/test/TestGame";
import TestItem from "../../components/test/TestItem";

function Home({ tests }) {
  return (
    <section className="home">
      <div className="conteiner">
        <div className="home__inner">
          <h2 className="home__title">Актуальные тесты</h2>
          <div className="home__tests">
            {tests.map((test, index) =>
              index < 3 ? <TestItem key={test.id} test={test} /> : false
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
