import classes from "./Backdrop.module.css";
//A backdrop component for modal
function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick} />;
}

export default Backdrop;
