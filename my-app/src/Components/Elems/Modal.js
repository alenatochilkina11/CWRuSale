import classes from "./Modal.module.css";

//The modal component - shows up when buttons are clicked
function Modal(props) {
  function closeHandler() {
    props.onCancel();
  }

  return (
    <div className={classes.modal}>
      <h2>{props.header}</h2>
      <p>{props.text}</p>
      <p>{props.text1}</p>
      <p>{props.text2}</p>
      <button className={classes.btn} onClick={closeHandler}>
        Close
      </button>
    </div>
  );
}

export default Modal;
