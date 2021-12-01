import { useState } from "react";
import classes from "./UploadItem.module.css";
import Card from "../Elems/Card";
import Modal from '../Elems/Modal';
import Backdrop from '../Elems/Backdrop';

function UploadItem(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const btnHandler = () => {
      setModalIsOpen(true);
  };

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const text = 
  "Contact Info-- \n Name: " + props.name +" / \n Case ID: "+ props.email +" / \n Phone: " + props.phone

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <h3>{props.price}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={btnHandler}>Get Info</button>
        </div>
        <div>
          {modalIsOpen && (
            <Modal text={text} onCancel={closeModalHandler} />
          )}
          {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
      </Card>
    </li>
  );
}

export default UploadItem;
