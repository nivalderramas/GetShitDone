import React from "react";
import { todoContext } from "./hooks/useContext";
import { NewTaskForm } from "./NewTaskForm";
import { Modal } from './ui/Modal'

function CreateTask() {
  const {showModal, setShowModal } = React.useContext(todoContext);
  return (
    <div className="addButtonContainer">
      <button className="addButton" onClick={() => setShowModal(!showModal)} >+</button>
      {showModal && 
        <Modal><NewTaskForm/></Modal>
      }
    </div>
  );
}

export { CreateTask };
