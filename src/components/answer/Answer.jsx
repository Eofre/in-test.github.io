import React from "react";
import cl from "./Answer.module.scss";

function Answer({ valueRadio, onChangeRadio, nameRadio, ...props }) {
  return (
    <div>
      <input className={cl.answer} type="text" {...props} />
      <input
        type="radio"
        name={nameRadio}
        value={valueRadio}
        onChange={(e) => onChangeRadio(e)}
      />
    </div>
  );
}

export default Answer;
