import ItemRequestForm from "../Components/Requests/ItemRequestForm";
import { useState } from "react";

//Page to leave request for an item
function ItemsRequestPage() {
  const [requestText, setRequestText] = useState("");
  const requestItemHandler = async (itemData) => {
    const res = await fetch(
      "https://cwru-sale.azurewebsites.net/api/request-item?" +
        new URLSearchParams(itemData),
      { method: "GET" }
    );
    const text = await res.text();
    setRequestText(text);
  };

  return (
    <section>
      <h1>Be Notified of Item Uploads</h1>
      <ItemRequestForm text={requestText} onRequestItem={requestItemHandler} />
    </section>
  );
}

export default ItemsRequestPage;
