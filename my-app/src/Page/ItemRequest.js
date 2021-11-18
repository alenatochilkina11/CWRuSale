import ItemRequestForm from "../Components/Requests/ItemRequestForm";
function ItemsRequestPage() {
  const requestItemHandler = (itemData) => {
    fetch(
      "https://cwru-sale.azurewebsites.net/api/request-item?" +
        new URLSearchParams(itemData),
      { method: "GET" }
    );
  };

  return (
    <section>
      <h1>Be Notified of Item Uploads</h1>
      <ItemRequestForm onRequestItem={requestItemHandler} />
    </section>
  );
}

export default ItemsRequestPage;
