import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Context } from "./App";

const Modal = () => {
  const { isShowingModal, closeModal } = useContext(Context);

  return (
    <div className={`modal-overlay ${isShowingModal ? "show-modal" : ""}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
