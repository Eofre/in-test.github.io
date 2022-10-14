import React, { useState } from "react";
import Answers from "../answers/Answers";
import "./Question.scss";

function Question({ addQuestion, id }) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [saveStatus, setSaveStatus] = useState(false);
  const [question, setQuestion] = useState({
    id: id,
    question: "",
    answers: [],
    currectAnswer: "",
  });

  function saveQuestion(e) {
    e.preventDefault();
    let tempObjectQuestion = question;
    tempObjectQuestion.answers = [answer1, answer2, answer3, answer4];
    setSaveStatus(true);
    addQuestion(tempObjectQuestion);
    console.log(question);
  }
  function onChangeRadio(e) {
    setQuestion({ ...question, currectAnswer: e.target.value });
  }

  return (
    <div className="question">
      <input
        value={question.question}
        onChange={(e) => setQuestion({ ...question, question: e.target.value })}
        type="text"
        className="question__input-question"
        placeholder="Вопрос"
      />
      <p>Поставьте галочку напротив верного ответа</p>
      <Answers
        answer1={answer1}
        answer2={answer2}
        answer3={answer3}
        answer4={answer4}
        setAnswer1={setAnswer1}
        setAnswer2={setAnswer2}
        setAnswer3={setAnswer3}
        setAnswer4={setAnswer4}
        onChangeRadio={onChangeRadio}
        id={id}
      />
      {saveStatus ? (
        <button className="question__btn" disabled>
          Сохранить
        </button>
      ) : (
        <button className="question__btn" onClick={(e) => saveQuestion(e)}>
          Сохранить
        </button>
      )}
    </div>
  );
}

export default Question;
