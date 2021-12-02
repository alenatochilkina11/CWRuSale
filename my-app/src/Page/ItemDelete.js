import ItemDeleteForm from "../Components/Delete/ItemDeleteForm";
import { useState } from "react";

//Page for item deletion
function ItemsDeletePage() {
  const [deleteText, setDeleteText] = useState("");
  const deleteItemHandler = async (itemData) => {
    const res = await fetch(
      "https://cwru-sale.azurewebsites.net/api/management?" +
        new URLSearchParams(itemData),
      { method: "GET" }
    );
    //text is fetched from the function
    const text = await res.text();
    setDeleteText(text);
  };

  return (
    <section>
      <h1>Delete Your Item or Request</h1>
      <ItemDeleteForm text={deleteText} onDeleteItem={deleteItemHandler} />
    </section>
  );
}

export default ItemsDeletePage;
