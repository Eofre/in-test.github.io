import React, { useEffect, useState } from "react";
import Answer from "../answer/Answer";
import cl from "./Answers.module.scss";

function Answers({
  id,
  changeCurrectAnswer,
  changeAnswer,
  answers,
  addAnswer,
}) {
  return (
    <div>
      {answers.map((item, index) => (
        <Answer
          key={index}
          nameRadio={id}
          valueRadio={index}
          changeCurrectAnswer={changeCurrectAnswer}
          value={answers[index]}
          onChange={(e) => changeAnswer(id, index, e)}
          placeholder={`Ответ № ${index + 1}`}
        />
      ))}
      <button className={cl.btn} onClick={(e) => addAnswer(e, id)}>
        Добавить ответ
      </button>
    </div>
  );
}

export default Answers;
