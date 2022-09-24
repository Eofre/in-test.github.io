import React, { useState } from "react";
import "./CreateTest.scss";

function CreateTest({ tests, setTests }) {
  const [test, setTest] = useState({
    id: Date.now(),
    title: "",
    description: "",
    img: "https://www.usynovite.ru/f/news/f14b950ecd/2020.05.27_0.jpg",
    questions: [],
  });
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState({
    question: "",
    answers: answers,
    currectAnswer: 0,
  });
  const [answer, setAnswer] = useState("");

  function createNewTest(e) {
    e.preventDefault();
    test.questions.push(question);
    setTests([...tests, test]);
    setQuestion({
      question: "",
      answers: [],
      currectAnswer: 0,
    });
    setTest({
      id: Date.now(),
      title: "",
      description: "",
      img: "https://www.usynovite.ru/f/news/f14b950ecd/2020.05.27_0.jpg",
      questions: [],
    });
  }

  function createNewAnswer(e) {
    e.preventDefault();
    answers.push(answer);
    setAnswers(answers);
    setAnswer("");
  }

  return (
    <section className="create-test">
      <div className="conteiner">
        <div className="create-test__inner">
          <h2 className="create-test__title">Создание теста</h2>
          <form className="create-test__form">
            <input
              value={test.title}
              type="text"
              className="create-test__input"
              placeholder="Название"
              onChange={(e) => setTest({ ...test, title: e.target.value })}
            />
            <input
              value={test.description}
              type="text"
              className="create-test__input"
              placeholder="Описание"
              onChange={(e) =>
                setTest({ ...test, description: e.target.value })
              }
            />
            <div className="create-test__question">
              <input
                value={question.question}
                type="text"
                className="create-test__input"
                placeholder="Вопрос"
                onChange={(e) =>
                  setQuestion({ ...question, question: e.target.value })
                }
              />
              <div className="create-test__answers">
                <input
                  value={answer}
                  type="text"
                  className="create-test__input"
                  placeholder="ответ"
                  onChange={(e) => setAnswer(e.target.value)}
                />
                {answers.map((item) => (
                  <input
                    value={answer}
                    type="text"
                    className="create-test__input"
                    placeholder="ответ"
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                ))}
                <button onClick={createNewAnswer}>Добавить вопрос</button>
              </div>
            </div>
            <button onClick={createNewTest}>Создать</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateTest;
