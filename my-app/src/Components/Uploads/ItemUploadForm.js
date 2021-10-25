import { useRef } from "react";
import classes from "./ItemUploadForm.module.css";
import Card from "../Elems/Card";

function ItemUploadForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();
  const categoryInputRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const itemData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      price: enteredPrice,
      category: enteredCategory,
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
    };

    console.log(itemData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Item Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Item Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="price">Price</label>
          <input type="text" required id="price" ref={priceInputRef} />
        </div>
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
          <button>Upload Item</button>
        </div>
      </form>
    </Card>
  );
}

export default ItemUploadForm;
