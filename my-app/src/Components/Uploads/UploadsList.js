import UploadItem from "./UploadItem";
import classes from "./UploadsList.module.css";

function UploadsList(props) {

  return (
    <ul className={classes.list}>
      {props.uploads.map((item) => (
        <UploadItem
          key={item.id}
          id={item.id}
          image={item.imageUrl}
          title={item.itemTitle}
          description={item.itemDescripton}
          price={item.itemPrice}
        />
      ))}
    </ul>
  );
}




export default UploadsList;
