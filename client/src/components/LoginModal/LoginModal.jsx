import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faEllipsis,
  faRobot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./LoginModal.css";
import React from "react";

const LoginModal = (props) => {
  const { toggleLoginModal } = props;
  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent div
  };

  return (
    <div className="modal-blur" onClick={toggleLoginModal}>
      <div className="login-modal" onClick={handleModalClick}>
        <div className="modal-x">
          {" "}
          <p onClick={toggleLoginModal}>X</p>
        </div>
        <div className="modal-header">
          <h4>Log in</h4>
          <p>By contintuntei </p>
        </div>

        <div></div>

        <div></div>

        <div></div>

        <div></div>
      </div>
    </div>
  );
};

export default LoginModal;
