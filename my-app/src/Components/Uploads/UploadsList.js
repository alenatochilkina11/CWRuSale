import UploadItem from "./UploadItem";
import classes from "./UploadsList.module.css";

function UploadsList(props) {
  // const filteredItems = props.uploads.filter(upload => {
  //   return upload.itemCategory === props.filter;
  // });

  //replace props.uploads below with filterdItems once that is fixed
  //add conditional statements:
  //1. If filteredItems.length == 0, returm a message
  //2. If props.filter == 'All' return props.uploads.map((item) => ...) (the entire array)
  return (
    <ul className={classes.list}>
      {props.uploads.map((item) => (
        <UploadItem
          key={item.id}
          id={item.id}
          image={item.imageURL}
          title={item.itemTitle}
          description={item.itemDescription}
          price={item.itemPrice}
          category={item.itemCategory}
        />
      ))}
    </ul>
  );
}

export default UploadsList;
