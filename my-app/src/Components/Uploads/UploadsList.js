import UploadItem from "./UploadItem";
import classes from "./UploadsList.module.css";

function UploadsList(props) {
  return (
    <ul className={classes.list}>
      {props.uploads.map((item) => (
        <UploadItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </ul>
  );
}

export default UploadsList;
