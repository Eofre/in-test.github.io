import React, { useState } from "react";
import cl from "./Answer.module.scss";
import deleteSvg from "../../assets/image/delete.svg";

function Answer({
  valueRadio,
  changeCurrectAnswer,
  nameRadio,
  removeAnswer,
  ...props
}) {
  return (
    <div className={cl.inner}>
      <input
        className={cl.radio}
        type="radio"
        name={nameRadio}
        value={valueRadio}
        onChange={(e) => changeCurrectAnswer(e, nameRadio)}
      />
      <input className={cl.answer} type="text" {...props} />
      <img
        className={cl.imgBtn}
        src={deleteSvg}
        onClick={(e) => removeAnswer(e, nameRadio, valueRadio)}
      />
    </div>
  );
}

export default Answer;
