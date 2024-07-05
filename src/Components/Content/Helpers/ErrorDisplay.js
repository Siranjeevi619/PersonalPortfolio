import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../Helpers/Helpers-Style/ErrorDisplay.css";
import PropTypes from "prop-types";

Modal.setAppElement("#root");

function ErrorDisplay(props) {
  const [openCard, setOpenCard] = useState(true);

  const handleCard = () => {
    setOpenCard(false);
  };

  return (
    <Modal
      isOpen={openCard}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
      onRequestClose={handleCard}
    >
      {props.Message ? <h3>{props.Message}</h3> : <h3>Error does not found</h3>}
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-primary text-center" onClick={handleCard}>
          Close
        </button>
      </div>
    </Modal>
  );
}

ErrorDisplay.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorDisplay;
