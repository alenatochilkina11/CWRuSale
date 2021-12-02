import { useState } from "react";
import classes from "./ItemUploadForm.module.css";
import Card from "../Elems/Card";
import Modal from "../Elems/Modal";
import Backdrop from "../Elems/Backdrop";

//The form to upload items to the databse
function ItemUploadForm(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const form = document.getElementById("upload-form");

  //The handles makes sure that the modal is not opened untill the form is properly filled up
  const btnHandler = () => {
    if (form != null && form.reportValidity()) {
      setModalIsOpen(true);
    }
  };
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  //Elements entered into the form
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredImage, setEnteredImage] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");

  //Handlers to read in the values
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const imageChangeHandler = (event) => {
    setEnteredImage(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
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

  //Handler for item submission
  const submitHandler = (event) => {
    event.preventDefault();

    const itemData = {
      itemTitle: enteredTitle,
      imageUrl: enteredImage,
      itemDescripton: enteredDescription,
      itemPrice: enteredPrice,
      itemCategory: enteredCategory,
      name: enteredName,
      caseID: enteredEmail,
      phone: enteredPhone,
    };

    //Funtion used to post data into the database
    props.onUploadItem(itemData);

    //Sets the form to empty once it is submitted
    setEnteredTitle("");
    setEnteredImage("");
    setEnteredDescription("");
    setEnteredPrice("");
    setEnteredCategory("");
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPhone("");
  };
  return (
    <Card>
      <form id="upload-form" className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control} data-testid="uploadTitle">
          <label htmlFor="title">Item Title</label>
          <input
            type="text"
            required
            id="title"
            placeholder="E.g. Calculus Book"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={classes.control} data-testid="uploadImage">
          <label htmlFor="image">Item Image</label>
          <input
            type="url"
            required
            id="image"
            placeholder="http://image.jpg"
            value={enteredImage}
            onChange={imageChangeHandler}
          />
          <small>
            <a href="https://postimages.org/" target="_blank">
              {" "}
              Convert your image to URL
            </a>
          </small>
        </div>
        <div className={classes.control} data-testid="uploadDescription">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            placeholder="E.g. Condition, Age, etc."
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          ></textarea>
        </div>
        <div className={classes.control} data-testid="uploadPrice">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            required
            id="price"
            placeholder="10$ OR 5$ - 10$ OR Negotiable"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className={classes.control} data-testid="uploadCategory">
          <label htmlFor="category">Category</label>
          <select onChange={categoryChangeHandler} required>
            <option value=""></option>
            <option value="Textbook">Textbook</option>
            <option value="Academic">Academic</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Bathroom">Bathroom</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Technology">Technology</option>
            <option value="Living Room">Living Room</option>
          </select>
        </div>
        <div className={classes.control} data-testid="uploadSellerName">
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
        <div className={classes.control} data-testid="uploadSellerEmail">
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
        <div className={classes.control} data-testid="uploadSellerPhone">
          <label htmlFor="phone">Mobile Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="000-000-0000"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={enteredPhone}
            onChange={phoneChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <small>
            By Clicking Upload Item, you agree to CWRUSale's User Agreement
          </small>
          <br />
          <br />
          <button onClick={btnHandler}>Upload Item</button>
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

export default ItemUploadForm;
