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

  // let itemsToShow; --> Array that will be displayed

  // if(filteredCategory != "All") {
  //   const res = fetch(
  //     "https://cwru-sale.azurewebsites.net/api/search-items?itemCategory=" + filteredCategory,
  //     { method: "GET" }
  //   );
  //   itemsToShow = res.body;
  // } else {
  //   itemsToShow = ??? --> need a function that returns all elements 
  // };

  return (
    <section>
      <h1>All Items</h1>
      <div>
        <ItemFilter onChange={filterChangeHandler} />
      </div>
      <UploadsList filter={filteredCategory} uploads={DUMMY_DATA} />
    </section>
  );
}

//Change DUMMY_DATA to itemsToShow once fetch method is figured out

export default ItemsListPage;
