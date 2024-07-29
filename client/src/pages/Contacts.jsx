import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import icon from "../assets/images/magnifier.png";
import contact from "../assets/images/contact.png";
import { useState, useEffect } from "react";

function Contacts({ formdata, setFormdata }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    const url = "http://127.0.0.1:8000/api/contact/";
    let token = localStorage.getItem("access_token");
    console.log(token);
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify(formdata),
    };
    fetch(url, options)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        if (data !== undefined) {
          console.log(data);
          setContacts(data);
        }
      });
  };
  return (
    <Dashboard>
      <div className="ml-7 flex items-center justify-between gap-5 mt-6">
        <div>
          {" "}
          <h1 className="font-bold text-2xl mb-[2em] rounded-lg">Contacts</h1>
          <div className="flex border rounded-md p-4 px-[6em] bg-[#bfc9ee] border-none gap-6">
            <img src={icon} alt="" width={30} />
            <input
              className="bg-[#bfc9ee] outline-none "
              type="text"
              placeholder="search for contacts,email..."
            />
          </div>
        </div>
        <div className="flex">
          <Link to="/dashboard/addcontact">
            {" "}
            <div className="flex gap-4 border border-none bg-[#4870FC] rounded py-4 px-8 mr-7">
              <img src={contact} alt="" width={30} />
              <button className="">Add a Contact</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col cursor-pointer ">
        <div className="flex mt-[4em] border rounded-sm py-2 font-medium">
          <h1 className="flex-1">Names</h1>
          <h1 className="flex-1">Email</h1>
          <h1 className="flex-1">Phone Number</h1>
          <h1 className="flex-1">Address</h1>
        </div>
        <Link to="/dashboard/singlecontact">
          {" "}
          <div className="mt-[2em] border-b-black ">
           {contacts &&
              contacts.map((contact) => {
                return (
                  <div className="flex gap-[2em]">

                    <p className="flex-1">{`${contact.firstname} ${contact.lastname}`}</p>
                    <p className="flex-1">{contact.email}</p>
                    <p className="flex-1">{`0${contact.phonenumber}`}</p>
                    <p className="flex-1">{contact.address}</p>
                    
                  </div>
                );
              })}
          </div>
        </Link>
      </div>
    </Dashboard>
  );
}

export default Contacts;
