import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Question from "../../components/question/Question";
import Modal from "../../components/UI/modal/Modal";
import noPhoto from "../../assets/image/camera.svg";
import "./CreateTest.scss";
import { useLocation } from "react-router-dom";

function CreateTest({ addTest, setPathname }) {
  const location = useLocation();
  setPathname(location.pathname);
  const fileReaderTest = new FileReader();

  const [modal, setModal] = useState(false);
  const [modalWarning, setModalWarning] = useState("A");
  const [statusBtnImg, setStatusBtnImg] = useState(true);
  const [questions, setQuestions] = useState([
    {
      id: 0,
      question: "",
      answers: [""],
      currectAnswer: "",
      explanation: "",
      img: "",
    },
  ]);
  const [test, setTest] = useState({
    id: Date.now(),
    title: "",
    description: "",
    img: "",
    questions: [],
  });
  let copyQuestions = Object.assign([], questions);

  function addQuestion(e, index) {
    e.preventDefault();
    copyQuestions.push({
      id: index,
      question: "",
      answers: [""],
      currectAnswer: "",
      explanation: "",
      img: "",
    });
    setQuestions(copyQuestions);
  }
  function validationCheckTestForm() {
    if (test.title !== "" && test.description !== "" && test.img !== "") {
      return true;
    } else {
      return false;
    }
  }

  function createTest(e, test) {
    e.preventDefault();
    if (validationCheckTestForm()) {
      addTest(test);
      setModal(true);
      setModalWarning("A");
      return true;
    } else {
      setModalWarning("B");
      setModal(true);
      return false;
    }
  }

  fileReaderTest.onloadend = () => {
    setTest({ ...test, img: fileReaderTest.result });
  };
  function onImgSelectedTest(e) {
    e.preventDefault();
    const file = e.target.files[0];
    fileReaderTest.readAsDataURL(file);
  }

  function addAnswer(e, id) {
    e.preventDefault();
    copyQuestions[id].answers.push("");
    setQuestions(copyQuestions);
  }

  function changeCurrectAnswer(e, id) {
    copyQuestions[id].currectAnswer = e.target.value;
    setQuestions(copyQuestions);
  }

  function changeNameQuestion(e, id) {
    copyQuestions[id].question = e.target.value;
    setQuestions(copyQuestions);
  }

  function changeAnswer(id, idAns, e) {
    copyQuestions[id].answers[idAns] = e.target.value;
    setQuestions(copyQuestions);
  }

  function changeExplanation(e, id) {
    copyQuestions[id].explanation = e.target.value;
    setQuestions(copyQuestions);
  }

  function removeQuestion(e, id) {
    e.preventDefault();
    copyQuestions = copyQuestions.filter((item, itemIndex) => itemIndex !== id);
    setQuestions(copyQuestions);
  }

  function removeAnswer(e, id, idAns) {
    e.preventDefault();
    copyQuestions[id].answers = copyQuestions[id].answers.filter(
      (item, itemIndex) => itemIndex !== idAns
    );
    setQuestions(copyQuestions);
  }

  function updateQuestion(id, value) {
    copyQuestions[id].img = value;
    setQuestions(copyQuestions);
  }

  useEffect(() => {
    setTest({ ...test, questions: questions });
  }, [questions]);

  console.log(test);

  return (
    <section className="create-test">
      <Modal visible={modal} setVisible={setModal}>
        {modalWarning === "A" ? (
          <>
            Тест успешно создан!
            <button
              className="create-test__btn-modal"
              onClick={(e) => {
                e.preventDefault();
                setModal(false);
              }}
            >
              Ок
            </button>
          </>
        ) : (
          <>
            Заполните все поля!
            <button
              className="create-test__btn-modal"
              onClick={(e) => {
                e.preventDefault();
                setModal(false);
              }}
            >
              Ок
            </button>
          </>
        )}
      </Modal>
      <div className="conteiner">
        <div className="create-test__inner ">
          <h2 className="create-test__title">Создание теста</h2>
          <form className="create-test__form">
            <div className="create-test__information">
              <h3>Данные теста</h3>
              <div className="create-test__label">
                <label className="create-test__label">
                  Название
                  <input
                    value={test.title}
                    type="text"
                    className="create-test__input"
                    placeholder="Например: Тест по русскому языку для детей"
                    onChange={(e) =>
                      setTest({ ...test, title: e.target.value })
                    }
                  />
                </label>
              </div>
              <div className="create-test__label">
                <label>
                  Описание
                  <textarea
                    value={test.description}
                    type="text"
                    className="create-test__input create-test__textarea"
                    placeholder="Например: Тест покажет уровень знаний ребенка"
                    onChange={(e) =>
                      setTest({ ...test, description: e.target.value })
                    }
                  />
                </label>
              </div>
              <div className="create-test__picture">
                <label className="create-test__file">
                  Иллюстрация для обложки
                  {test.img === "" ? (
                    <img className="create-test__icon" src={noPhoto} alt="" />
                  ) : (
                    <img className="create-test__img" src={test.img} alt="" />
                  )}
                  <input
                    className="create-test__file-input"
                    type="file"
                    accept="image/jpeg,image/png"
                    onChange={(e) => onImgSelectedTest(e)}
                  />
                </label>
              </div>
            </div>
            <div className="create-test__questions">
              <h3>Вопросы</h3>
              {questions.map((item, index) => (
                <Question
                  key={item.id}
                  nameQuestion={copyQuestions[index].question}
                  id={index}
                  changeCurrectAnswer={changeCurrectAnswer}
                  changeNameQuestion={changeNameQuestion}
                  changeAnswer={changeAnswer}
                  answers={copyQuestions[index].answers}
                  addAnswer={addAnswer}
                  questionNumber={`Вопрос № ${index + 1}`}
                  removeAnswer={removeAnswer}
                  removeQuestion={removeQuestion}
                  changeExplanation={changeExplanation}
                  explanation={copyQuestions[index].explanation}
                  imgQuestion={copyQuestions[index].img}
                  updateQuestion={updateQuestion}
                />
              ))}
              <button
                className="create-test__btn"
                onClick={(e) => addQuestion(e, questions.length)}
              >
                Добавить вопрос
              </button>
            </div>
            <button
              className="create-test__btn"
              onClick={(e) => {
                createTest(e, test);
              }}
            >
              Создать тест
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CreateTest;
