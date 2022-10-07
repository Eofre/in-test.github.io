import React from "react";
import cl from "./Modal.module.css";

function Modal({ children, visible, setVisible }) {
  const rootClasses = [cl.modal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(" ")}>
      <div className={cl.modalContent}>{children}</div>
    </div>
  );
}

export default Modal;
