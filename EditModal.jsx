import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const EditModal = ({ isOpen, onRequestClose, currentTask, onSave }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (currentTask) setTitle(currentTask.title);
  }, [currentTask]);

  const handleSave = () => {
    onSave({ ...currentTask, title });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Task"
      className="modal"
    >
      <h2>Edit Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="modal-buttons">
        <button onClick={handleSave}>Save</button>
        <button onClick={onRequestClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default EditModal;
