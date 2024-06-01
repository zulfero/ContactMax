import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";
import icon from "../assets/images/magnifier.png";
import contact from "../assets/images/contact.png";

function Contacts() {
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
      <div className="flex flex-col cursor-pointer">
        <div className="flex justify-around mt-[4em] border rounded-sm py-2">
          <h1>Names</h1>
          <h1>Email</h1>
          <h1>Phone Number</h1>
          <h1>Address</h1>
          <h1>Birth Date</h1>
        </div>
        <Link to="/dashboard/singlecontact">
          {" "}
          <div className="flex justify-around items-center mt-[2em] border-b-black ">
            <p>Marvin Omondi</p>
            <p>Marviniie@gmail.com</p>
            <p>(00741)0743921270</p>
            <p>Magnolia horegion 1234</p>
            <p>1994/02/3</p>
          </div>{" "}
        </Link>
        <div className="flex justify-around items-center mt-[2em] border-b-black ">
          <p>Marvin Omondi</p>
          <p>Marviniie@gmail.com</p>
          <p>(00741)0743921270</p>
          <p>Magnolia horegion 1234</p>
          <p>1994/02/3</p>
        </div>{" "}
        <div className="flex justify-around items-center mt-[2em] border-b-black ">
          <p>Marvin Omondi</p>
          <p>Marviniie@gmail.com</p>
          <p>(00741)0743921270</p>
          <p>Magnolia horegion 1234</p>
          <p>1994/02/3</p>
        </div>{" "}
        <div className="flex justify-around items-center mt-[2em] border-b-black ">
          <p>Marvin Omondi</p>
          <p>Marviniie@gmail.com</p>
          <p>(00741)0743921270</p>
          <p>Magnolia horegion 1234</p>
          <p>1994/02/3</p>
        </div>{" "}
        <div className="flex justify-around items-center mt-[2em] border-b-black ">
          <p>Marvin Omondi</p>
          <p>Marviniie@gmail.com</p>
          <p>(00741)0743921270</p>
          <p>Magnolia horegion 1234</p>
          <p>1994/02/3</p>
        </div>{" "}
        <div className="flex justify-around items-center mt-[2em] border-b-black ">
          <p>Marvin Omondi</p>
          <p>Marviniie@gmail.com</p>
          <p>(00741)0743921270</p>
          <p>Magnolia horegion 1234</p>
          <p>1994/02/3</p>
        </div>{" "}
        <div className="flex justify-around items-center mt-[2em] border-b-black ">
          <p>Marvin Omondi</p>
          <p>Marviniie@gmail.com</p>
          <p>(00741)0743921270</p>
          <p>Magnolia horegion 1234</p>
          <p>1994/02/3</p>
        </div>{" "}
        <div className="flex justify-around items-center mt-[2em] border-b-black ">
          <p>Marvin Omondi</p>
          <p>Marviniie@gmail.com</p>
          <p>(00741)0743921270</p>
          <p>Magnolia horegion 1234</p>
          <p>1994/02/3</p>
        </div>{" "}
        <div className="flex justify-around items-center mt-[2em] border-b-black ">
          <p>Marvin Omondi</p>
          <p>Marviniie@gmail.com</p>
          <p>(00741)0743921270</p>
          <p>Magnolia horegion 1234</p>
          <p>1994/02/3</p>
        </div>{" "}
        <div className="flex justify-around items-center mt-[2em] border-b-black ">
          <p>Marvin Omondi</p>
          <p>Marviniie@gmail.com</p>
          <p>(00741)0743921270</p>
          <p>Magnolia horegion 1234</p>
          <p>1994/02/3</p>
        </div>{" "}
        <div className="flex justify-around items-center mt-[2em] border-b-black ">
          <p>Marvin Omondi</p>
          <p>Marviniie@gmail.com</p>
          <p>(00741)0743921270</p>
          <p>Magnolia horegion 1234</p>
          <p>1994/02/3</p>
        </div>{" "}
      </div>
    </Dashboard>
  );
}

export default Contacts;
