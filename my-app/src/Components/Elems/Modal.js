import classes from './Modal.module.css';

function Modal(props) {
    function closeHandler(){
        props.onCancel();
    }

    return <div className={classes.modal}>
        <p>{props.text}</p>
        <button className={classes.btn} onClick={closeHandler}>Close</button>
    </div>
}

export default Modal;