import React, { useEffect, useState } from "react";
import Answers from "../answers/Answers";
import "./Question.scss";

function Question({ addQuestion, id }) {
  const [answers, setAnswers] = useState(["", ""]);
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
    tempObjectQuestion.answers = answers;
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
        answers={answers}
        setAnswers={setAnswers}
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
