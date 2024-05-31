import Dashboard from "./Dashboard";

function AddContact() {
  return (
    <>
      <Dashboard>
        <div className="ml-[3em]">
          <div>
            <h1 className="font-bold text-center mt-4 text-4xl text-white">
              Add A Contact
            </h1>
          </div>
          <div className="flex flex-col ">
            <div className="flex   gap-[10em] my-[4em]">
              <div>
                <h1>FirstName</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                type="text"
                placeholder="Firstname"
              />
            </div>
            <div className="flex  gap-[10em] my-[4em]">
              <div>
                <h1>LastName</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                type="text"
                placeholder="Lastname"
              />
            </div>
            <div className="flex  gap-[10em] my-[4em]">
              <div>
                {" "}
                <h1>EmailAdd</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="flex  gap-[10em] my-[4em]">
              <div>
                <h1>PhoneNo.</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                type="Number"
                placeholder=""
              />
            </div>
            <div className="flex gap-[10em]">
              <div>
                {" "}
                <h1>DOfBirth.</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-[5em] "
                type="Date"
                placeholder="Firstname"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="border outline-none text-xl py-4 px-4 rounded-md">Add The Contact</button>
          </div>
        </div>
      </Dashboard>
    </>
  );
}
export default AddContact;
