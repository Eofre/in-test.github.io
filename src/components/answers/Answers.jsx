import React, { useEffect, useState } from "react";
import Answer from "../answer/Answer";
import cl from "./Answers.module.scss";

function Answers({ answers, setAnswers, id, onChangeRadio }) {
  let copy = Object.assign([], answers);
  function changeAnswer(e, index) {
    copy[index] = e.target.value;
    setAnswers(copy);
  }
  function addNewAnswer(e) {
    e.preventDefault();
    copy.push("");
    setAnswers(copy);
  }
  const removeAnswer = (answer) => {
    setAnswers(answers.filter((a) => a !== answer));
  };
  return (
    <div>
      {answers.map((item, index) => (
        <Answer
          key={index}
          nameRadio={id}
          valueRadio={index}
          onChangeRadio={onChangeRadio}
          value={copy[index]}
          onChange={(e) => changeAnswer(e, index)}
          placeholder={`Ответ № ${index + 1}`}
          removeAnswer={removeAnswer}
        />
      ))}
      <button className={cl.btn} onClick={(e) => addNewAnswer(e)}>
        Добавить ответ
      </button>
    </div>
  );
}

export default Answers;
