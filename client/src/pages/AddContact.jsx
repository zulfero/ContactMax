import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

function AddContact() {
  return (
    <>
      <Dashboard>
        <div className="ml-[3em] ">
          <div>
            <h1 className="font-bold text-center mt-4 text-4xl text-white">
              Add A Contact
            </h1>
          </div>
          <div className="flex flex-col gap-[3em] mt-[3em]">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white  text-xl ">FirstName</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                type="text"
                placeholder="Firstname"
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white text-xl ">LastName</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                type="text"
                placeholder="Lastname"
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                {" "}
                <h1 className="text-white text-xl ">EmailAdd</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white text-xl ">PhoneNo.</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                type="Number"
                placeholder=""
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                {" "}
                <h1 className="text-white text-xl ">DOfBirth.</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-[5em] "
                type="Date"
                placeholder="Firstname"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link to="/dashboard/contacts">
              <button className="border border-none outline-none text-xl py-4 px-4 text-white bg-[#6180f0] rounded-md">
                Add The Contact
              </button>
            </Link>
          </div>
        </div>
      </Dashboard>
    </>
  );
}
export default AddContact;
