import classes from "./Card.module.css";

//A card to display data - UI component
function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
