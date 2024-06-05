import EditContact from "../components/EditContact";

function Edit({ setIsopen, isopen }) {
  return (
    <>
      <EditContact setIsopen={setIsopen} isopen={isopen} />
    </>
  );
}
export default Edit;