import Dashboard from "./Dashboard";

function Contacts() {
  return (
    <Dashboard>
      <div className="ml-7 flex flex-col gap-5 mt-6">
        <h1 className="font-bold text-2xl rounded-lg">Contacts</h1>
        <div className="">
          <input
            className="border rounded-md p-4 px-[8em] bg-[#bfc9ee]"
            type="text"
            placeholder="search for contacts,email..."
          />
        </div>
      </div>
    </Dashboard>
  );
}

export default Contacts;
