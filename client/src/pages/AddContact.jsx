import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { useState } from "react";

function AddContact() {
  const [formdata, setFormdata] = useState({});
  const [errorMessege, setErrorMessage] = useState("");
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleaddcontact = (e) => {
    e.preventDefault();

    if (formdata.firstname === "") {
      setErrorMessage("Kindly fill in all the Fileds");
    } else if (formdata.lastname === "") {
      setErrorMessage("Kindly fill in all the Fileds");
    } else if (formdata.email === "") {
      setErrorMessage("Kindly fill in all the Fileds");
    } else if (formdata.phonenumber === "") {
      setErrorMessage("Kindly fill in all the Fileds");
    } else if (formdata.birthday === "") {
      setErrorMessage("Kindly fill in all the Fileds");
    } else if (formdata.category === "") {
      setErrorMessage("Kindly fill in all the Fileds");
    } else if (formdata.address === "") {
      setErrorMessage("Kindly fill in all the Fileds");
    } else {
      setErrorMessage("");
      console.log(formdata);
    }
  };

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
                name="firstname"
                type="text"
                placeholder="Firstname"
                onChange={e=>handleChange(e)}
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white text-xl ">LastName</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                name="lasname"
                type="text"
                placeholder="Lastname"
                onChange={e=>handleChange(e)}
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                {" "}
                <h1 className="text-white text-xl ">EmailAdd</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                name="email"
                type="text"
                placeholder="Email"
                onChange={e=>handleChange(e)}
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white text-xl ">PhoneNo.</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                name="phonenumber"
                type="Number"
                placeholder=""
                onChange={e=>handleChange(e)}
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white text-xl ">Category</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                name="category"
                type="text"
                placeholder="Category name"
                onChange={e=>handleChange(e)}
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white text-xl ">Address</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                name="phonenumber"
                type="text"
                placeholder="address"
                onChange={e=>handleChange(e)}
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                {" "}
                <h1 className="text-white text-xl ">DOfBirth.</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-[5em] "
                name="birthday"
                type="Date"
                placeholder="Firstname"
                onChange={e=>handleChange(e)}
              />
            </div>
            <p className="text-red-500 text-center text-2xl font-bold">
              {errorMessege}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="border border-none outline-none text-xl py-4 px-4 text-white bg-[#6180f0] rounded-md"
              onClick={handleaddcontact}
            >
              Add The Contact
            </button>
          </div>
        </div>
      </Dashboard>
    </>
  );
}
export default AddContact;
