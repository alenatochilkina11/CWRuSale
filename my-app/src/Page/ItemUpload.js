import { useState } from "react";
import ItemUploadForm from "../Components/Uploads/ItemUploadForm";

function ItemsUploadPage() {
  const [uploadText, setUploadText] = useState("");

  const uploadItemHandler = async (itemData) => {
    const res = await fetch(
      "https://cwru-sale.azurewebsites.net/api/upload-item?" +
        new URLSearchParams(itemData),
      { method: "GET" }
    );

    const text = await res.text();
    setUploadText(text);
  };

  return (
    <section>
      <h1>Upload Item For Sale</h1>
      <ItemUploadForm text={uploadText} onUploadItem={uploadItemHandler} />
    </section>
  );
}

export default ItemsUploadPage;
