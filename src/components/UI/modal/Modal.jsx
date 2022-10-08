import React from "react";
import "./Modal.scss";

function Modal({ children, visible, setVisible }) {
  return (
    <div
      className={visible ? "modal active" : "modal"}
      onClick={() => setVisible(false)}
    >
      <div
        className={visible ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
