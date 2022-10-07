import React, { useState } from "react";

function Answer() {
  const [answer, setAnswer] = useState("");
  return (
    <input
      type="text"
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder="Ответ"
    />
  );
}

export default Answer;
