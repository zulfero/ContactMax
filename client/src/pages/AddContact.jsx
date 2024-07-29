import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import { useState } from "react";

function AddContact({Categories}) {
  const [formdata, setFormdata] = useState({});
  const [errorMessege, setErrorMessage] = useState({});
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  let token = localStorage.getItem("access_token");

  const handleaddcontact = (e) => {
    e.preventDefault();

    const errors = {};

    if (formdata.firstname === "") {
      errors.firstname = "Kindly fill in the First Name";
    }
    if (formdata.lastname === "") {
      errors.lastname = "Kindly fill in the last Name";
    }
    if (formdata.email === "") {
      errors.email = "Kindly fill in the Email";
    }
    if (formdata.phonenumber === "") {
      errors.phonenumber = "Kindly fill in Your Phone Number";
    }
    if (formdata.birthday === "") {
      errors.birthday = "Kindly fill in your Date of Birth";
    }
    if (formdata.category === "") {
      errors.category = "Kindly fill in the category";
    }
    if (formdata.address === "") {
      errors.address = "Kindly Fill in The Address";
    } else {
      setErrorMessage("");
      console.log(formdata);
      const url = "http://127.0.0.1:8000/api/contact/";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,

        },
        body: JSON.stringify(formdata),
      };
      fetch(url, options)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            return res.json().then((message) => {
              console.log(message);
              // console.log(contact["contact"]);
            });
          }
          return res.json();
        })
        .then((data) => {
          if (data !== undefined) {
            console.log(data);
          }
        });
    }
    // setErrorMessage(errors);
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
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white text-xl ">LastName</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                name="lastname"
                type="text"
                placeholder="Lastname"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white text-xl ">EmailAdd</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                name="email"
                type="text"
                placeholder="Email"
                onChange={(e) => handleChange(e)}
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
                placeholder="Phone Number"
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white text-xl ">Address.</h1>
              </div>

              <input
                className="py-4 border  rounded-sm px-8"
                name="address"
                type="text"
                placeholder="address"
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* <p className="text-red-500 text-center text-2xl font-bold">
              {errorMessege}
            </p> */}
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white text-xl ">DOfBirth</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-[5em] outline-none "
                name="birthday"
                type="Date"
                placeholder="Firstname"
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* <p className="text-red-500 text-center text-2xl font-bold">
              {errorMessege}
            </p> */}
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
