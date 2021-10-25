import { useRef } from "react";
import classes from "./ItemRequestForm.module.css";
import Card from "../Elems/Card";

function ItemRequestForm() {
  const categoryInputRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredCategory = categoryInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const itemData = {
      category: enteredCategory,
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
    };

    console.log(itemData);
  }
  return (
    <Card data-testid="requestCard">
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="category">Category</label>
          <input type="text" required id="category" ref={categoryInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Full Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">CWRU Network ID</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Mobile Phone</label>
          <input type="text" required id="phone" ref={phoneInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Notify Me!</button>
        </div>
      </form>
    </Card>
  );
}

export default ItemRequestForm;