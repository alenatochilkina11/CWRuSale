import classes from './UploadItem.module.css';
import Card from '../Elems/Card';
// import Modal from '../Elems/Modal';
// import Backdrop from '../Elems/Backdrop';

function UploadItem(props){
    return (
        <li className={classes.item}>

        <Card>
          <div className={classes.image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <h3>{props.price}</h3>
          </div>
          <div className={classes.actions}>
            <button>Get Info</button>
          </div>
        </Card>
      </li>
    );
}

export default UploadItem;