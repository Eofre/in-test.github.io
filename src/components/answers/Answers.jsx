import React, { useState } from "react";
import Answer from "../answer/Answer";

function Answers({
  answer1,
  answer2,
  answer3,
  answer4,
  setAnswer1,
  setAnswer2,
  setAnswer3,
  setAnswer4,
  id,
  onChangeRadio,
}) {
  return (
    <div>
      <Answer
        nameRadio={id}
        valueRadio={0}
        value={answer1}
        onChangeRadio={onChangeRadio}
        onChange={(e) => setAnswer1(e.target.value)}
      />
      <Answer
        nameRadio={id}
        valueRadio={1}
        value={answer2}
        onChangeRadio={onChangeRadio}
        onChange={(e) => setAnswer2(e.target.value)}
      />
      <Answer
        nameRadio={id}
        valueRadio={2}
        value={answer3}
        onChangeRadio={onChangeRadio}
        onChange={(e) => setAnswer3(e.target.value)}
      />
      <Answer
        nameRadio={id}
        valueRadio={3}
        value={answer4}
        onChangeRadio={onChangeRadio}
        onChange={(e) => setAnswer4(e.target.value)}
      />
    </div>
  );
}

export default Answers;
