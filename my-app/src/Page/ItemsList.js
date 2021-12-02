import { useState } from "react";
import UploadsList from "../Components/Uploads/UploadsList";
import ItemFilter from "../Components/ItemFilter";

//Page where items are displayed and are filtered by category
function ItemsListPage() {
  const [filteredCategory, setFilteredCategory] = useState("All");

  //Upon change of ItemFilter, the selected value is passed as selected category,
  //function to get items from the database is triggered
  const filterChangeHandler = async (selectedCategory) => {
    setFilteredCategory(selectedCategory);
    const filtered = await getFilteredItems(selectedCategory);
    console.log("selectedCategory" + selectedCategory);
    setItemsToShow(filtered);
  };
  console.log("filteredCategory " + filteredCategory);

  const [itemsToShow, setItemsToShow] = useState([]);

  //Function to get the array returned by the trigger function
  const getFilteredItems = async (category) => {
    try {
      const res = await fetch(
        "https://cwru-sale.azurewebsites.net/api/search-items?itemCategory=" +
          category,
        { method: "GET" }
      );
      const arr = await res.json();
      return arr;
    } catch (error) {
      console.log(error);
    }
  };

  //checks whether the returned array from databse has any elements to display
  if (itemsToShow.length !== 0)
    return (
      <section>
        <h1>Items</h1>
        <ItemFilter
          selected={filteredCategory}
          onChange={filterChangeHandler}
        />
        <UploadsList uploads={itemsToShow} />
      </section>
    );

  //If not, returns blan page without elements
  return (
    <section>
      <h1>Items</h1>
      <ItemFilter onChange={filterChangeHandler} />
    </section>
  );
}

export default ItemsListPage;
