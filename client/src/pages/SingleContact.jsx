import Dashboard from "./Dashboard";
import log from "../assets/images/envelope-line-icon.svg";
import { Link } from "react-router-dom";

import image from "../assets/images/female.jpg";

function SingleContact() {
  return (
    <>
      <Dashboard>
        <div className="flex flex-col justify-center items-center">
          <div className=" border border-none absolute flex items-center justify-center right-[5em] top-[7em] cursor-pointer">
            <Link to="/dashboard/mail">
              {" "}
              <img src={log} alt="" width={50} />{" "}
            </Link>
          </div>

          <img
            className="border rounded-full mb-9 mt-9"
            src={image}
            alt=""
            width={200}
          />

          <h2 className="font-bold text-2xl">Natasha Romanof</h2>
        </div>
        <div className="pl-[5em] flex flex-col justify-center items-center text-center mt-[5em] gap-[5em]">
          <div className="flex gap-[6em]">
            <h1>Names:</h1>
            <div className="flex gap-6">
              <h2>Natasha </h2>
              <h2>Romanof</h2>
            </div>
          </div>
          <div className="flex gap-[6em]">
            <h1>Email:</h1>
            <div className="flex ">
              <h2>Marviniie@gmail.com</h2>
            </div>
          </div>{" "}
          <div className="flex gap-[6em]">
            <h1>PhoneNo.:</h1>
            <div className="flex">
              <h2>(00741)0743921270</h2>
            </div>
          </div>{" "}
          <div className="flex gap-[6em]">
            <h1>Address:</h1>
            <div className="flex">
              <h2>Magnolia horegion 1234</h2>
            </div>
          </div>{" "}
          <div className="flex gap-[6em]">
            <h1>BirthDate:</h1>
            <div className="flex">
              <h2>1994/02/3</h2>
            </div>
          </div>
          {/* <h1>Email</h1>
          <h1>Phone Number</h1>
          <h1>Address</h1>
          <h1>Birth Date</h1> */}
        </div>
      </Dashboard>
    </>
  );
}
export default SingleContact;
