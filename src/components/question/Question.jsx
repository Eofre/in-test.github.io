import React, { useEffect, useState } from "react";
import Answers from "../answers/Answers";
import "./Question.scss";
import deleteSvg from "../../assets/image/delete.svg";
import noPhoto from "../../assets/image/camera.svg";

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
  changeExplanation,
  explanation,
  updateQuestion,
  imgQuestion,
  ...props
}) {
  const fileReaderQuestion = new FileReader();
  fileReaderQuestion.onloadend = () => {
    updateQuestion(id, fileReaderQuestion.result);
  };
  function onImgSelectedQuestion(e) {
    e.preventDefault();
    const file = e.target.files[0];
    fileReaderQuestion.readAsDataURL(file);
  }

  return (
    <div className="question">
      <div className="question__picture">
        <label className="question__picture-label">
          Иллюстрация
          {imgQuestion !== "" ? (
            <img
              className="question__picture-label-img"
              src={imgQuestion}
              alt=""
            />
          ) : (
            <img
              className="question__picture-label-icon"
              src={noPhoto}
              alt=""
            />
          )}
          <input
            className="question__picture-input"
            type="file"
            onChange={(e) => onImgSelectedQuestion(e)}
          />
        </label>
      </div>
      <div className="question__right">
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
        <textarea
          className="question__textarea"
          placeholder="Объяснение ответа"
          value={explanation}
          onChange={(e) => changeExplanation(e, id)}
        />
      </div>
    </div>
  );
}

export default Question;
