import { useState } from "react";
import ItemUploadForm from "../Components/Uploads/ItemUploadForm";

//Upload Items page that displays the upload form and sends the read in form elements to the databse
function ItemsUploadPage() {
  const [uploadText, setUploadText] = useState("");

  const uploadItemHandler = async (itemData) => {
    const res = await fetch(
      "https://cwru-sale.azurewebsites.net/api/upload-item?" +
        new URLSearchParams(itemData),
      { method: "GET" }
    );
    //The text that is returned upon form submission
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
