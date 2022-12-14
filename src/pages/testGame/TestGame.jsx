import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TestGame.scss";
import closeIcon from "../../assets/image/close.svg";

function TestGame({ setPathname, setPathnameId }) {
  const [currectAnswers, setCurrectAnswers] = useState(0);
  const [answersId, setAnswersId] = useState([]);
  const [progress, setProgress] = useState(1);
  const [step, setStep] = useState(0);
  const router = useNavigate();
  const location = useLocation();
  setPathname(location.pathname);
  console.log(location.pathname);
  const test = location.state;
  setPathnameId(test.id);
  const question = test.questions[step];
  function chooseAnAnswer(index) {
    if (question.currectAnswer == index) {
      setStep(step + 1);
      setProgress(progress + 1);
      setCurrectAnswers(currectAnswers + 1);
      answersId.push(index);
    } else {
      setStep(step + 1);
      setProgress(progress + 1);
      answersId.push(index);
    }
  }

  return (
    <>
      <div className="header">
        <div className="header__content">
          <div>Тест</div>
          <div className="test-game__progress-question">
            {`${step + 1} / ${test.questions.length}`}
            <p>Вопросы</p>
          </div>
          <img
            className="header__icon"
            src={closeIcon}
            alt="иконка кнопки выхода"
            onClick={() => router(-1)}
          />
        </div>
        <div className="test-game__progress">
          <div
            className="test-game__progress-bar"
            style={{
              width: `${(progress / test.questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      {step != test.questions.length ? (
        <section className="test-game">
          <div className="test-game__inner">
            <div className="test-game__inner-left">
              <h3 className="test-game__question">{question.question}</h3>
              <img
                className="test-game__question-img"
                src={question.img}
                alt="фото вопроса"
              />
            </div>
            <div className="test-game__inner-right">
              <h3>Выберите один вариант ответа:</h3>
              <ul className="test-game__answer-list">
                {question.answers.map((item, index) => (
                  <li
                    key={item}
                    onClick={() => chooseAnAnswer(index)}
                    className="test-game__answer-item"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : (
        router(`/test/game/result/${test.id}`, {
          state: {
            currectAnswers,
            test,
            answersId,
          },
        })
      )}
    </>
  );
}

export default TestGame;
