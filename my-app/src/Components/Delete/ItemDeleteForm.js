import { useState } from "react";
import classes from "./ItemDeleteForm.module.css";
import Card from "../Elems/Card";
import Modal from "../Elems/Modal";
import Backdrop from "../Elems/Backdrop";

function ItemDeleteForm(props) {
  const form = document.getElementById("delete-form");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const btnHandler = () => {
    if (form != null && form.reportValidity()) {
      setModalIsOpen(true);
    }
  };
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const [enteredID, setEnteredID] = useState("");

  const idChangeHandler = (event) => {
    setEnteredID(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();

    const itemData = {
      id: enteredID
    };

    console.log(itemData);
    props.onDeleteItem(itemData);

    setEnteredID("");
  }
  return (
    <Card data-testid="deleteCard">
      <form id="delete-form" className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="id">Item/Request ID</label>
          <input
            type="text"
            required
            id="id"
            placeholder="00000000-00000-0000-0000-000000000000"
            value={enteredID}
            onChange={idChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <button onClick={btnHandler}>Delete</button>
        </div>
        <div>
          {modalIsOpen && (
            <Modal text={props.text} onCancel={closeModalHandler} />
          )}
          {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
        </div>
      </form>
    </Card>
  );
}

export default ItemDeleteForm;