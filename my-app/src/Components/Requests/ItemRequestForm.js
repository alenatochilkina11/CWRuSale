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
          <select onChange={categoryChangeHandler} required>
            <option value="Textbook">Textbook</option>
            <option value="Academic">Academic</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Technology">Technology</option>
          </select>
        </div>
        <div className={classes.control} data-testid="requestBuyerName">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Johnny Appleseed"
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
            placeholder="abc123"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={classes.control} data-testid="requestBuyerPhone">
          <label htmlFor="phone">Mobile Phone</label>
          <input
            type="tel"
            required
            id="phone"
            placeholder="000-000-0000"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
