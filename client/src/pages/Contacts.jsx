import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <Dashboard>
      <div className="ml-7 flex items-center justify-between gap-5 mt-6">
        <div>
          {" "}
          <h1 className="font-bold text-2xl mb-[2em] rounded-lg">Contacts</h1>
          <div className="">
            <input
              className="border rounded-md p-4 px-[8em] bg-[#bfc9ee] border-none"
              type="text"
              placeholder="search for contacts,email..."
            />
          </div>
        </div>

        <div>
          <button className="border border-none bg-[#4870FC] rounded py-4 px-8">
            Add a Contact
          </button>
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
