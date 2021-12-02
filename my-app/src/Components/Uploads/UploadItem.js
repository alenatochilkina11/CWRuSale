import { useState } from "react";
import classes from "./UploadItem.module.css";
import Card from "../Elems/Card";
import Modal from "../Elems/Modal";
import Backdrop from "../Elems/Backdrop";

//Creates a card with item for sale
function UploadItem(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //Handles "Get Info" button
  const btnHandler = () => {
    setModalIsOpen(true);
  };

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  //Text that should appear once the button is clicked and modal opens.
  const text = "Name: " + props.name;
  const text1 = "Case ID: " + props.email;
  const text2 = "Phone: " + props.phone;

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
            <Modal
              header="Contact Info:"
              text={text}
              text1={text1}
              text2={text2}
              onCancel={closeModalHandler}
            />
          )}
          {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
      </Card>
    </li>
  );
}

export default UploadItem;
