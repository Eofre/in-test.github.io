import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Question from "../../components/question/Question";
import Modal from "../../components/UI/modal/Modal";
import noPhoto from "../../assets/image/no-photo.jpg";
import "./CreateTest.scss";

function CreateTest({ addTest }) {
  const fileReader = new FileReader();
  const [modal, setModal] = useState(false);
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
  fileReader.onloadend = () => {
    setTest({ ...test, img: fileReader.result });
  };
  function onImgSelected(e) {
    e.preventDefault();
    const file = e.target.files[0];
    fileReader.readAsDataURL(file);
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

  function changeImgQuestion(e, id) {
    copyQuestions[id].img = e.target.value;
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

  useEffect(() => {
    setTest({ ...test, questions: questions });
  }, [questions]);

  console.log(test);

  return (
    <>
      <Header />
      <section className="create-test">
        <Modal visible={modal} setVisible={setModal}>
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
        </Modal>
        <div className="conteiner">
          <div className="create-test__inner ">
            <h2 className="create-test__title">Создание теста</h2>
            <form className="create-test__form">
              <div className="create-test__information">
                <h3>Данные теста</h3>
                <input
                  value={test.title}
                  type="text"
                  className="create-test__input"
                  placeholder="Название"
                  onChange={(e) => setTest({ ...test, title: e.target.value })}
                />
                <textarea
                  value={test.description}
                  type="text"
                  className="create-test__input create-test__textarea"
                  placeholder="Описание"
                  onChange={(e) =>
                    setTest({ ...test, description: e.target.value })
                  }
                />
                <div className="create-test__picture">
                  <div className="create-test__nav">
                    <button
                      className="create-test__nav-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setStatusBtnImg(true);
                        setTest({ ...test, img: "" });
                      }}
                    >
                      Изображение по ссылке
                    </button>
                    <button
                      className="create-test__nav-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setStatusBtnImg(false);
                        setTest({ ...test, img: "" });
                      }}
                    >
                      Загрузить изображение с компьютера
                    </button>
                  </div>
                  <img
                    className="create-test__img"
                    src={test.img === "" ? noPhoto : test.img}
                    alt=""
                  />
                  {statusBtnImg ? (
                    <input
                      value={test.img}
                      type="text"
                      className="create-test__input"
                      placeholder="Ссылка на изображение"
                      onChange={(e) =>
                        setTest({ ...test, img: e.target.value })
                      }
                    />
                  ) : (
                    <input type="file" onChange={(e) => onImgSelected(e)} />
                  )}
                </div>
              </div>
              <div className="create-test__questions create-test__information">
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
                    placeholder={`Вопрос № ${index + 1}`}
                    removeAnswer={removeAnswer}
                    removeQuestion={removeQuestion}
                    changeExplanation={changeExplanation}
                    explanation={copyQuestions[index].explanation}
                    changeImgQuestion={changeImgQuestion}
                    imgQuestion={copyQuestions[index].img}
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
                  e.preventDefault();
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
