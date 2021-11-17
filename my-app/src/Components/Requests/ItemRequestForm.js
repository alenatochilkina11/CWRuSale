import { useState } from "react";
import classes from "./ItemRequestForm.module.css";
import Card from "../Elems/Card";

function ItemRequestForm() {

  const [enteredCategory, setEnteredCategory] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPhone, setEnteredPhone] = useState('')

  const categoryChangeHandler = (event) =>{
    setEnteredCategory(event.target.value)
  }
  const nameChangeHandler = (event) =>{
    setEnteredName(event.target.value)
  }
  const emailChangeHandler = (event) =>{
    setEnteredEmail(event.target.value)
  }
  const phoneChangeHandler = (event) =>{
    setEnteredPhone(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault();

    const itemData = {
      category: enteredCategory,
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
    };

    console.log(itemData);

    setEnteredCategory('')
    setEnteredName('')
    setEnteredEmail('')
    setEnteredPhone('')
  }
  return (
    <Card data-testid="requestCard">
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control} data-testid="requestCategory">
          <label htmlFor="category">Category</label>
          <input type="text" required id="category"  value={enteredCategory} onChange={categoryChangeHandler} />
        </div>
        <div className={classes.control} data-testid="requestBuyerName">
          <label htmlFor="name">Full Name</label>
          <input type="text" required id="name" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className={classes.control} data-testid="requestBuyerEmail">
          <label htmlFor="email">CWRU Network ID</label>
          <input type="text" required id="email" value={enteredEmail} onChange={emailChangeHandler} />
        </div>
        <div className={classes.control} data-testid="requestBuyerPhone">
          <label htmlFor="phone">Mobile Phone</label>
          <input type="text" required id="phone" value={enteredPhone} onChange={phoneChangeHandler} />
        </div>
        <div className={classes.actions}>
          <button>Notify Me!</button>
        </div>
      </form>
    </Card>
  );
}

export default ItemRequestForm;