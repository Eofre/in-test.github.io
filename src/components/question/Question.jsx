import React, { useEffect, useState } from "react";
import Answer from "../answer/Answer";
import "./Question.scss";

function Question({ addQuestion, removeQuestion, id }) {
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

  function saveQuestion() {
    let tempObjectQuestion = question;
    tempObjectQuestion.answers = [answer1, answer2, answer3, answer4];
    setSaveStatus(true);
    addQuestion(tempObjectQuestion);
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
      <div className="answers">
        <div>
          <input
            type="text"
            value={answer1}
            onChange={(e) => setAnswer1(e.target.value)}
            placeholder="Ответ"
            className="question__input"
          />
          <input
            className="question__radio"
            name={id}
            type="radio"
            value={0}
            onChange={(e) =>
              setQuestion({
                ...question,
                currectAnswer: Number(e.target.value),
              })
            }
          />
        </div>
        <div>
          <input
            type="text"
            value={answer2}
            onChange={(e) => setAnswer2(e.target.value)}
            placeholder="Ответ"
            className="question__input"
          />
          <input
            className="question__radio"
            name={id}
            type="radio"
            value={1}
            onChange={(e) =>
              setQuestion({
                ...question,
                currectAnswer: Number(e.target.value),
              })
            }
          />
        </div>
        <div>
          <input
            type="text"
            value={answer3}
            onChange={(e) => setAnswer3(e.target.value)}
            placeholder="Ответ"
            className="question__input"
          />
          <input
            className="question__radio"
            name={id}
            type="radio"
            value={2}
            onChange={(e) =>
              setQuestion({
                ...question,
                currectAnswer: Number(e.target.value),
              })
            }
          />
        </div>
        <div>
          <input
            type="text"
            value={answer4}
            onChange={(e) => setAnswer4(e.target.value)}
            placeholder="Ответ"
            className="question__input"
          />
          <input
            className="question__radio"
            name={id}
            type="radio"
            value={3}
            onChange={(e) =>
              setQuestion({
                ...question,
                currectAnswer: Number(e.target.value),
              })
            }
          />
        </div>
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
