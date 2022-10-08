import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Question from "../../components/question/Question";
import Modal from "../../components/UI/modal/Modal";
import "./CreateTest.scss";

function CreateTest({ addTest }) {
  const [modal, setModal] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [test, setTest] = useState({
    id: Date.now(),
    title: "",
    description: "",
    img: "",
    questions: [],
  });

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };
  const removeQuestion = (question) => {
    setQuestions(questions.filter((q) => q.id !== question.id));
  };
  const arrayQuestions = [
    <Question key={100000} id={1000000} addQuestion={addQuestion} />,
  ];

  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  for (let i = 0; i < numberOfQuestions; i++) {
    arrayQuestions.push(
      <Question
        key={i}
        id={i}
        addQuestion={addQuestion}
        removeQuestion={removeQuestion}
      />
    );
  }

  function addNewQuestion(e) {
    e.preventDefault();
    setNumberOfQuestions(numberOfQuestions + 1);
  }

  useEffect(() => {
    setTest({ ...test, questions: questions });
  }, [questions]);

  return (
    <>
      <Header />
      <section className="create-test">
        <Modal visible={modal} setVisible={setModal}>
          Тест успешно создан!
          <button
            className="create-test__btn-modal"
            onClick={() => setModal(false)}
          >
            Ок
          </button>
        </Modal>
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
              <button
                className="create-test__btn"
                onClick={() => {
                  addTest(test);
                  setModal(true);
                }}
              >
                Создать тест
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateTest;
