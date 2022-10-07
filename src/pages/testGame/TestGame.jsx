import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TestGame.scss";

function TestGame() {
  const [currectAnswers, setCurrectAnswers] = useState(0);
  const [answersId, setAnswersId] = useState([]);
  const [progress, setProgress] = useState(1);
  const [step, setStep] = useState(0);
  const router = useNavigate();
  const location = useLocation();
  const test = location.state;
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
      <header className="test-game__top">
        <div className="test-game__progress">
          <div
            className="test-game__progress-bar"
            style={{
              width: `${(progress / test.questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </header>
      {step != test.questions.length ? (
        <section className="test-game">
          <div className="test-game__inner">
            <div className="test-game__inner-left">
              <h3 className="test-game__question">{question.question}</h3>
              <img src={test.img} alt="" />
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
          <p className="test-game__progress-question">{`${step + 1}/${
            test.questions.length
          }`}</p>
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
