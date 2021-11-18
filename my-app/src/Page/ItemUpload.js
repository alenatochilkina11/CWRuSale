import ItemUploadForm from "../Components/Uploads/ItemUploadForm";

function ItemsUploadPage() {
  const uploadItemHandler = (itemData) => {
    fetch(
      "https://cwru-sale.azurewebsites.net/api/upload-item?" +
        new URLSearchParams(itemData),
      { method: "GET" }
    );
  };

  return (
    <section>
      <h1>Upload Item For Sale</h1>
      <ItemUploadForm onUploadItem={uploadItemHandler} />
    </section>
  );
}

export default ItemsUploadPage;
