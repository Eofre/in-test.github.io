import React from "react";
import { useNavigate } from "react-router-dom";
import "./TestItem.scss";

function TestItem({ test }) {
  const router = useNavigate();
  return (
    <div
      className="test-item"
      onClick={() => router(`/test/${test.id}`, { state: test })}
    >
      <img src={test.img} alt="Обложка теста" className="test-item__img" />
      <h4 className="test-item__title">{test.title}</h4>
      <p className="test-item__description">{test.description}</p>
      <div className="test-item__inner-bottom">
        <span className="test-item__date">
          Кол-во вопросов: {test.questions.length}
        </span>
      </div>
    </div>
  );
}

export default TestItem;
