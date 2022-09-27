import React, { useEffect, useState } from "react";
import "./Question.scss";

function Question({ questions, setQuestions }) {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [saveStatus, setSaveStatus] = useState(false);
  const [question, setQuestion] = useState({
    question: "",
    answers: [answer1, answer2, answer3, answer4],
    currectAnswer: 3,
  });

  function saveQuestion() {
    let tempObjectQuestion = question;
    tempObjectQuestion.answers = [answer1, answer2, answer3, answer4];
    setSaveStatus(true);
    setQuestions([...questions, tempObjectQuestion]);
  }

  return (
    <div className="question">
      <input
        value={question.question}
        onChange={(e) => setQuestion({ ...question, question: e.target.value })}
        type="text"
        className="question__input"
        placeholder="Вопрос"
      />
      <div className="answers">
        <input
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          type="text"
          className="question__input"
          placeholder="Ответ"
        />
        <input
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
          type="text"
          className="question__input"
          placeholder="Ответ"
        />
        <input
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
          type="text"
          className="question__input"
          placeholder="Ответ"
        />
        <input
          value={answer4}
          onChange={(e) => setAnswer4(e.target.value)}
          type="text"
          className="question__input"
          placeholder="Ответ"
        />
      </div>
      {saveStatus ? (
        <button className="question__btn" disabled>
          Сохранить
        </button>
      ) : (
        <button className="question__btn" onClick={saveQuestion}>
          Сохранить
        </button>
      )}
    </div>
  );
}

export default Question;
