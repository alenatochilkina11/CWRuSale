import UploadsList from "../Components/Uploads/UploadsList";

const DUMMY_DATA = [
  {
    id: "i1",
    title: "The Starry Night",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/600px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    description:
      "The Starry Night is one of the most recognized paintings in Western art.",
    price: "$150,000,000",
  },
  {
    id: "i2",
    title: "Mona Lisa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/600px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    description:
      "Considered an archetypal masterpiece of the Italian Renaissance, it has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world.",
    price: "$860,000,000",
  },
];

function ItemsListPage() {
    return (
        <section>
          <h1>All Items</h1>
          <UploadsList uploads={DUMMY_DATA} />
        </section>
      );
}

export default ItemsListPage;