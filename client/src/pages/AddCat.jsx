import AddCategory from "../components/AddCategory";

function AddCat({ setIsopen, isopen }) {
  return (
    <>
      <AddCategory setIsopen={setIsopen} isopen={isopen} />
    </>
  );
}
export default AddCat;
