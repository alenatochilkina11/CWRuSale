import { useState } from "react";
import classes from "./ItemRequestForm.module.css";
import Card from "../Elems/Card";
import Modal from "../Elems/Modal";
import Backdrop from "../Elems/Backdrop";

function ItemRequestForm(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const btnHandler = () => {
    setModalIsOpen(true);
  };

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  function submitHandler(event) {
    event.preventDefault();

    const itemData = {
      categoryRequested: enteredCategory,
      name: enteredName,
      caseID: enteredEmail,
      phoneNumber: enteredPhone,
    };

    console.log(itemData);
    props.onRequestItem(itemData);

    setEnteredCategory("");
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPhone("");
  }
  return (
    <Card data-testid="requestCard">
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control} data-testid="requestCategory">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            required
            id="category"
            value={enteredCategory}
            onChange={categoryChangeHandler}
          />
        </div>
        <div className={classes.control} data-testid="requestBuyerName">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            required
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div className={classes.control} data-testid="requestBuyerEmail">
          <label htmlFor="email">CWRU Network ID</label>
          <input
            type="text"
            required
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={classes.control} data-testid="requestBuyerPhone">
          <label htmlFor="phone">Mobile Phone</label>
          <input
            type="text"
            required
            id="phone"
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <button onClick={btnHandler}>Notify Me!</button>
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

export default ItemRequestForm;
