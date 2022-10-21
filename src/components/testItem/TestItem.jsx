import React from "react";
import { useNavigate } from "react-router-dom";
import iconQuestions from "../../assets/image/quiz.svg";
import cl from "./TestItem.module.scss";

function TestItem({ test }) {
  const router = useNavigate();
  return (
    <div
      className={cl.testItem}
      onClick={() => router(`/test/${test.id}`, { state: test })}
    >
      <img className={cl.testItemImg} src={test.img} alt="Обложка теста"></img>
      <p className={cl.testItemLength}>
        <img className={cl.testItemIcon} src={iconQuestions} alt="" />
        {test.questions.length}
      </p>
      <h4 className={cl.testItemTitle}>{test.title}</h4>
      {/* <p className={cl.testItemDescription}>{test.description}</p>
      <div>
        <p>Кол-во вопросов: {test.questions.length}</p>
      </div> */}
    </div>
  );
}

export default TestItem;
