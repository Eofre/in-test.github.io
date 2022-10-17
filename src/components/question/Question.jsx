import React, { useEffect, useState } from "react";
import Answers from "../answers/Answers";
import "./Question.scss";
import deleteSvg from "../../assets/image/delete.svg";

function Question({
  nameQuestion,
  id,
  changeCurrectAnswer,
  changeNameQuestion,
  changeAnswer,
  answers,
  addAnswer,
  removeAnswer,
  removeQuestion,
  ...props
}) {
  return (
    <div className="question">
      <div className="question__top">
        <input
          value={nameQuestion}
          onChange={(e) => changeNameQuestion(e, id)}
          type="text"
          className="question__input-question"
          {...props}
        />
        <img
          className="question__img"
          src={deleteSvg}
          alt=""
          onClick={(e) => removeQuestion(e, id)}
        />
      </div>
      <p>Поставьте галочку напротив верного ответа</p>
      <Answers
        changeCurrectAnswer={changeCurrectAnswer}
        id={id}
        changeAnswer={changeAnswer}
        answers={answers}
        addAnswer={addAnswer}
        removeAnswer={removeAnswer}
      />
    </div>
  );
}

export default Question;
