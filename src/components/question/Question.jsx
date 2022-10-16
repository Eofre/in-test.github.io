import React, { useEffect, useState } from "react";
import Answers from "../answers/Answers";
import "./Question.scss";

function Question({
  nameQuestion,
  id,
  changeCurrectAnswer,
  changeNameQuestion,
  changeAnswer,
  answers,
  addAnswer,
  ...props
}) {
  return (
    <div className="question">
      <input
        value={nameQuestion}
        onChange={(e) => changeNameQuestion(e, id)}
        type="text"
        className="question__input-question"
        {...props}
      />
      <p>Поставьте галочку напротив верного ответа</p>
      <Answers
        changeCurrectAnswer={changeCurrectAnswer}
        id={id}
        changeAnswer={changeAnswer}
        answers={answers}
        addAnswer={addAnswer}
      />
    </div>
  );
}

export default Question;
