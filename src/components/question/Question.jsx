import React, { useEffect, useState } from "react";
import Answers from "../answers/Answers";
import cl from "./Question.module.scss";
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
  questionNumber,
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
    <div className={cl.question}>
      <div className={cl.questionTop}>
        <h4>{questionNumber}</h4>
        <img
          className={cl.questionRemove}
          src={deleteSvg}
          alt=""
          onClick={(e) => removeQuestion(e, id)}
        />
      </div>
      <div className={cl.questionInner}>
        <div className={cl.questionLeft}>
          <label style={{ cursor: "pointer" }} className={cl.questionLabel}>
            Иллюстрация
            {imgQuestion !== "" ? (
              <img className={cl.questionImage} src={imgQuestion} alt="" />
            ) : (
              <img className={cl.questionImageNoPhoto} src={noPhoto} alt="" />
            )}
            <input
              className={cl.questionFile}
              type="file"
              accept="image/jpeg,image/png"
              onChange={(e) => onImgSelectedQuestion(e)}
            />
          </label>
        </div>
        <div className={cl.questionRight}>
          <label className={cl.questionLabel}>
            Текст вопроса
            <input
              className={cl.questionInput}
              value={nameQuestion}
              onChange={(e) => changeNameQuestion(e, id)}
              type="text"
              placeholder="Например: Сколько будет 5 + 5?"
            />
          </label>
          <Answers
            changeCurrectAnswer={changeCurrectAnswer}
            id={id}
            changeAnswer={changeAnswer}
            answers={answers}
            addAnswer={addAnswer}
            removeAnswer={removeAnswer}
          />
          <textarea
            className={cl.questionTextarea}
            placeholder="Объяснение ответа"
            value={explanation}
            onChange={(e) => changeExplanation(e, id)}
          />
        </div>
      </div>
    </div>
  );
}

export default Question;
