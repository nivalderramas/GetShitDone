import React from 'react';
import { todoContext } from "./hooks/useContext";

function NewTaskForm() {
  const { addTask, setShowModal} = React.useContext(todoContext);
  const [ textValue, setTextValue ] = React.useState('')
  return (
    //form reading the input value for a new todo task reading the
    <form 
      className="newTaskForm"
      onSubmit={(e) => {
        e.preventDefault();addTask(textValue); setShowModal(prevState => !prevState)}
    }>
      <h1>Add a ToDo</h1>
      <textarea
        className="newTaskInput"
        type=""
        placeholder=""
        onChange={(e) => {setTextValue(e.target.value)}}
      />
        <div className='buttonGroup'>
          <button className="buttonForm" type="submit">
            Add
          </button>
          <button className="buttonForm buttonFormCancel" onClick={() => {setShowModal(prevState => !prevState)}}>
            Cancel
          </button>
        </div>
    </form>
  );
}

export { NewTaskForm }; 