import classes from "./ItemFilter.module.css";
function ItemFilter() {
  const filterChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className={classes.itemsfilter}>
      <div className={classes.itemsfilter__control}>
        <label>Filter by Category</label>
        <select onChange={filterChangeHandler}>
          <option value="All">All</option>
          <option value="Textbook">Textbook</option>
          <option value="Academic">Academic</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Bathroom">Bathroom</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Technology">Technology</option>
        </select>
      </div>
    </div>
  );
}

export default ItemFilter;
