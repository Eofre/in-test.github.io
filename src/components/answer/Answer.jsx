import React, { useState } from "react";
import cl from "./Answer.module.scss";

function Answer({
  removeAnswer,
  valueRadio,
  changeCurrectAnswer,
  nameRadio,
  ...props
}) {
  return (
    <div>
      <input className={cl.answer} type="text" {...props} />
      <input
        className={cl.radio}
        type="radio"
        name={nameRadio}
        value={valueRadio}
        onChange={(e) => changeCurrectAnswer(e, nameRadio)}
      />
    </div>
  );
}

export default Answer;
