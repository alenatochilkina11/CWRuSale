import ItemUploadForm from "../Components/Uploads/ItemUploadForm";

function ItemsUploadPage() {
  const uploadItemHandler = (itemData) => {
    fetch("https://cwru-sale.azurewebsites.net/api/upload-item", {
      method: "GET",
      headers: {
        name: itemData.name,
        caseID: itemData.email,
        itemCategory: itemData.category,
        itemDescription: itemData.description,
        itemTitle: itemData.title,
        itemPrice: itemData.price,
        phone: itemData.phone,
        imageUrl: itemData.image,
      },
    });
  };

  return (
    <section>
      <h1>Upload Item For Sale</h1>
      <ItemUploadForm onUploadItem={uploadItemHandler} />
    </section>
  );
}

export default ItemsUploadPage;
