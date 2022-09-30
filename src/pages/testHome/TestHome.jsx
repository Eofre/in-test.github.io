import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TestHome.scss";

function TestHome() {
  const router = useNavigate();
  const location = useLocation();
  const test = location.state;

  return (
    <section className="test-home">
      <div className="conteiner">
        <div className="test-home__inner">
          <img src={test.img} className="test-home__img"></img>
          <h2 className="test-home__title">{test.title}</h2>
          <p className="test-home__description">{test.description}</p>
          <p className="test-home__numbers-questions-text">
            Количество вопросов: {test.questions.length}
          </p>
          <button
            onClick={() => router(`/test/game/${test.id}`, { state: test })}
            className="test-home__btn"
          >
            Начать
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestHome;
