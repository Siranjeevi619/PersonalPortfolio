import React from "react";
import Modal from "react-modal";
import "./Helpers-Style/ErrorDisplay.css";
import PropTypes from "prop-types";

// Set root element for accessibility
Modal.setAppElement("#root");

function ErrorDisplay({ Message, onClose }) {
  return (
    <Modal
      isOpen={true}
      className="glass-modal"
      overlayClassName="glass-overlay"
      onRequestClose={onClose}
      closeTimeoutMS={300}
    >
      <div className="glass-modal-content text-center p-4">
        <div className="modal-icon mb-4">
          <i className="bi bi-shield-lock text-primary-glow"></i>
        </div>
        <h3 className="modal-title mb-3">Notice</h3>
        <p className="modal-message mb-4">{Message || "Resource currently unavailable."}</p>
        <button className="premium-button px-5" onClick={onClose}>
          Understood
        </button>
      </div>
    </Modal>
  );
}

ErrorDisplay.propTypes = {
  Message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ErrorDisplay;
