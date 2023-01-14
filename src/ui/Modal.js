import React from 'react';
import ReactDOM from 'react-dom';
import {todoContext} from '../hooks/useContext';

function Modal(props) {

    const {setShowModal}  = React.useContext(todoContext);
    React.useEffect(() => {
      const handleEsc = (event) => {
         if (event.keyCode === 27) {
            setShowModal(prevState => !prevState);
        }
      };
      window.addEventListener('keydown', handleEsc);

      return () => {
        window.removeEventListener('keydown', handleEsc);
      };
    }, []);
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {props.children}
        </div>
        ,
        document.getElementById("modal")
    );
}

export { Modal };
