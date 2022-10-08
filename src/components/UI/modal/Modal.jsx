import React from "react";
import cl from "./Modal.module.scss";

function Modal({ children, visible, setVisible }) {
  const rootClasses = [cl.modal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")}>
      <div className={cl.modalContent}>
        {children}
        <button className={cl.modalBtn} onClick={() => setVisible(false)}>
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default Modal;
