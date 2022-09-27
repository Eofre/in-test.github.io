import React, { useEffect, useState } from "react";
import Question from "../../components/question/Question";
import "./CreateTest.scss";

function CreateTest({ tests, setTests }) {
  const [createStatus, setCreateStatus] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [test, setTest] = useState({
    id: Date.now(),
    title: "",
    description: "",
    img: "",
    questions: [],
  });

  const arrayQuestions = [];
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  for (let i = 0; i < numberOfQuestions; i++) {
    arrayQuestions.push(
      <Question key={i} questions={questions} setQuestions={setQuestions} />
    );
  }

  function addNewQuestion(e) {
    e.preventDefault();
    setNumberOfQuestions(numberOfQuestions + 1);
  }

  function createNewTest(e) {
    e.preventDefault();
    setCreateStatus(true);
    setTests([...tests, test]);
  }

  useEffect(() => {
    setTest({ ...test, questions: questions });
  }, [questions]);

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
            <input
              value={test.img}
              type="text"
              className="create-test__input"
              placeholder="Ссылка на изображение"
              onChange={(e) => setTest({ ...test, img: e.target.value })}
            />
            <div className="create-test__questions">
              {arrayQuestions}
              <button className="create-test__btn" onClick={addNewQuestion}>
                Добавить вопрос
              </button>
            </div>
            {createStatus ? (
              <button
                disabled
                className="create-test__btn"
                onClick={createNewTest}
              >
                Создать тест
              </button>
            ) : (
              <button className="create-test__btn" onClick={createNewTest}>
                Создать тест
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateTest;
