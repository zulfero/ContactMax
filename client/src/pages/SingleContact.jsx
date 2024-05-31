import Dashboard from "./Dashboard";
import log from "../assets/images/envelope-line-icon.svg";
import { Link } from "react-router-dom";
import phone from "../assets/images/phone.png";
import email from "../assets/images/email-symbol-icon.svg";
import image from "../assets/images/female.jpg";
import person from "../assets/images/avatar-icon.svg";
import birth from "../assets/images/calendar.png";
import point from "../assets/images/location.png";
import remove from "../assets/images/delete.png";
import edit from "../assets/images/editing.png";

function SingleContact() {
  return (
    <>
      <Dashboard>
        <div className="flex flex-col justify-center items-center">
          <img
            className="border rounded-full mb-9 mt-9"
            src={image}
            alt=""
            width={200}
          />

          <h2 className="font-bold text-2xl">Natasha Romanof</h2>
        </div>
        <div className="pl-[5em] flex justify-between items-center my-[6em]  text-white  text-center mt-[5em] pr-[5em]">
          <div className="flex flex-col gap-[6em]">
            <div className="flex gap-[6em]">
              <img src={person} alt="" width={30} />
              <h1 className="text-xl text-white">Names:</h1>
              <div className="flex gap-6">
                <h2>Natasha </h2>
                <h2>Romanof</h2>
              </div>
            </div>
            <div className="flex gap-[6em]">
              <div>
                <Link to="/dashboard/mail">
                  {" "}
                  <img src={log} alt="" width={30} />{" "}
                </Link>
              </div>
              <h1 className="text-xl text-white">Email:</h1>
              <div className="flex ">
                <h2>Marviniie@gmail.com</h2>
              </div>
            </div>{" "}
            <div className="flex gap-[6em]">
              <img className="text-black" src={phone} alt="" width={30} />
              <h1 className="text-xl text-white">PhoneNo:</h1>
              <div className="flex">
                <h2>(00741)0743921270</h2>
              </div>
            </div>{" "}
          </div>

          <div className="flex flex-col gap-[6em]">
            <div className="flex gap-[6em]">
              <img src={email} alt="" width={30} />
              <h1 className="text-xl text-white">Address:</h1>
              <div className="flex">
                <h2>Magnolia horegion 1234</h2>
              </div>
            </div>{" "}
            <div className="flex gap-[6em]">
              <img src={point} alt="" width={30} />
              <h1 className="text-xl text-white">Address:</h1>
              <div className="flex">
                <h2>Magnolia horegion 1234</h2>
              </div>
            </div>{" "}
            <div className="flex gap-[6em]">
              <img src={birth} alt="" width={30} />
              <h1 className="text-xl text-white">BirthDate:</h1>
              <div className="flex">
                <h2>1994/02/3</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button>Edit Contact</button>

          <button>Send Email</button>

          <button>Delete Contact</button>
        </div>
      </Dashboard>
    </>
  );
}
export default SingleContact;
