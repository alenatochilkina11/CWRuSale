import { useState, useEffect } from "react";
import UploadsList from "../Components/Uploads/UploadsList";
import ItemFilter from "../Components/ItemFilter";

function ItemsListPage() {
  const [filteredCategory, setFilteredCategory] = useState("All");

  const filterChangeHandler = async (selectedCategory) => {
    setFilteredCategory(selectedCategory);
    const filtered = await getFilteredItems(selectedCategory);
    console.log("selectedCategory" + selectedCategory);
    setItemsToShow(filtered);
  };
  console.log("filteredCategory " + filteredCategory);

  const [itemsToShow, setItemsToShow] = useState([]);

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

  if (itemsToShow.length != 0)
    return (
      <section>
        <h1>Items</h1>
        <ItemFilter selected={filteredCategory} onChange={filterChangeHandler} />
        <UploadsList uploads={itemsToShow} />
      </section>
    );

  return (
    <section>
      <h1>Items</h1>
      <ItemFilter onChange={filterChangeHandler} />
    </section>
  );
}

//Change DUMMY_DATA to itemsToShow once fetch method is figured out

export default ItemsListPage;
