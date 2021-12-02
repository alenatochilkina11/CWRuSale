import classes from "./ItemFilter.module.css";
//A UI element for dropdown menu on Item List page.
//Is used on Item List page
//Once triggered, passes the triggered value, so the appropriate array is returned from the database
function ItemFilter(props) {
  return (
    <div className={classes.itemsfilter}>
      <div className={classes.itemsfilter__control}>
        <label>Filter by Category</label>
        <select
          value={props.selected}
          onChange={(event) => props.onChange(event.target.value)}
        >
          <option value="Select">--Select--</option>
          <option value="All">All</option>
          <option value="Textbook">Textbook</option>
          <option value="Academic">Academic</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Bathroom">Bathroom</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Technology">Technology</option>
          <option value="Living Room">Living Room</option>
        </select>
      </div>
    </div>
  );
}

export default ItemFilter;
