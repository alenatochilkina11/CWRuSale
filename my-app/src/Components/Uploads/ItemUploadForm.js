import { useState } from "react";
import classes from "./ItemUploadForm.module.css";
import Card from "../Elems/Card";

function ItemUploadForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredImage, setEnteredImage] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.value);
  }
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  }
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  }
  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  }
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }
  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  }

  const submitHandler = (event) =>{
    event.preventDefault();

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

    setEnteredTitle('')
    setEnteredImage('')
    setEnteredDescription('')
    setEnteredPrice('')
    setEnteredCategory('')
    setEnteredName('')
    setEnteredEmail('')
    setEnteredPhone('')


  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control} data-testid="uploadTitle">
          <label htmlFor="title">Item Title</label>
          <input type="text" required id="title" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className={classes.control} data-testid="uploadImage"> 
          <label htmlFor="image">Item Image</label>
          <input type="url" required id="image" value={enteredImage} onChange={imageChangeHandler} />
        </div>
        <div className={classes.control} data-testid="uploadDescription">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          ></textarea>
        </div>
        <div className={classes.control} data-testid="uploadPrice" >
          <label htmlFor="price">Price</label>
          <input type="text" required id="price" value={enteredPrice} onChange={priceChangeHandler}/>
        </div>
        <div className={classes.control} data-testid="uploadCategory" >
          <label htmlFor="category">Category</label>
          <input type="text" required id="category" value={enteredCategory} onChange={categoryChangeHandler}/>
        </div>
        <div className={classes.control} data-testid="uploadSellerName" >
          <label htmlFor="name">Full Name</label>
          <input type="text" required id="name" value={enteredName} onChange={nameChangeHandler}/>
        </div>
        <div className={classes.control} data-testid="uploadSellerEmail" >
          <label htmlFor="email">CWRU Network ID</label>
          <input type="text" required id="email" value={enteredEmail} onChange={emailChangeHandler}/>
        </div>
        <div className={classes.control} data-testid="uploadSellerPhone" >
          <label htmlFor="phone">Mobile Phone</label>
          <input type="text" id="phone" value={enteredPhone} onChange={phoneChangeHandler}/>
        </div>
        <div className={classes.actions}>
          <button>Upload Item</button>
        </div>
      </form>
    </Card>
  );
}

export default ItemUploadForm;
