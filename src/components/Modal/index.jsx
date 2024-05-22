import { Fragment } from "react";
import ReactDOM from "react-dom";
import "../../styles/components/_modal.scss"

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose}/>
};

const ModalOverlay = (props) => {
    console.log("Modal Rendering");
    return (
      <div className="modal">
        <div className='content'>{props.children}</div>
      </div>
    );
  };
const portalElement = document.getElementById("overlays")
  
  const Modal = (props) => {
    return (
      props.show && (
        <Fragment>
          {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
          {ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
          )}
        </Fragment>
      )
    );
  };
  
  export default Modal;