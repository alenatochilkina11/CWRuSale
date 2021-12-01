import { useState, useEffect } from "react";
import UploadsList from "../Components/Uploads/UploadsList";
import ItemFilter from "../Components/ItemFilter";

const DUMMY_DATA = [
  {
    id: "i1",
    name: "Alena Tochilkina",
    caseID: "abc123",
    itemCategory: "Painting",
    itemDescription:
      "The Starry Night is one of the most recognized paintings in Western art.",
    itemTitle: "The Starry Night",
    itemPrice: "$150,000,000",
    phone: "00000000000",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/600px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
  {
    id: "i2",
    name: "Amelia Churchill",
    caseID: "zyx987",
    itemCategory: "Art",
    itemDescription:
      "Considered an archetypal masterpiece of the Italian Renaissance, it has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.",
    itemTitle: "Mona Lisa",
    itemPrice: "$860,000,000",
    phone: "00000000000",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/600px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
  },
];

function ItemsListPage(props) {
  const [filteredCategory, setFilteredCategory] = useState("All");
  const filterChangeHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory);
  };
  const [itemsToShow, setItemsToShow] = useState("");

  console.log("Current Category: " + filteredCategory);

  const  getArray = async () => {
    try {
      if (filteredCategory !== "All") {
        const res = await fetch(
          "https://cwru-sale.azurewebsites.net/api/search-items?itemCategory=" +
            filteredCategory,
          { method: "GET" }
        );
        const arr = await res.json()
        setItemsToShow(arr);
      } else {
        itemsToShow = DUMMY_DATA;
      }
    } catch (error) {
      console.log(error);
    }
    console.log("hey")
    return itemsToShow
  }
  console.log(itemsToShow)


  return (
    <section>
      <h1>All Items</h1>
      <div>
        <ItemFilter onChange={filterChangeHandler} />
      </div>
      <UploadsList filter={filteredCategory} uploads={getArray} />
    </section>
  );
}

//Change DUMMY_DATA to itemsToShow once fetch method is figured out

export default ItemsListPage;
