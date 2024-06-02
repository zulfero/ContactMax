import Dashboard from "./Dashboard";
import phone from "../assets/images/phone.png";
import log from "../assets/images/envelope-line-icon.svg";
import img from "../assets/images/female.jpg";
import { Link } from "react-router-dom";
import person from "../assets/images/avatar-icon.svg";
import birth from "../assets/images/calendar.png";
import point from "../assets/images/location.png";
import email from "../assets/images/email-symbol-icon.svg";
import TestimonialProp from "../components/TestimonialProp";

function Profile() {
  return (
    <Dashboard>
      <div className="ml-12 flex font-bold text-2xl text-white text-center mt-[4em]">
        <h1>My Profile</h1>
      </div>
      <div className="flex justify-between items-center mb-[5em]">
        <div className=" ml-12  text-white  px-2 p-[4em]">
          <TestimonialProp
            image={img}
            name="Natasha Romanof"
            paragraph="“ I have found using the contact-
        max useful due to its fast pace
        and ease of adding the contact
        that is important”"
          />
        </div>
        <div className="flex flex-col gap-[5em] mt-[10em] border mr-[4em] p-[5em]">
          <div className="flex flex-col items-center gap-[6em] mr-14">
            <div className="flex gap-[6em]">
              <img src={person} alt="" width={30} />{" "}
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
          <div>
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
                <h1 className="text-xl text-white">Location:</h1>
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
        </div>
      </div>
    </Dashboard>
  );
}
export default Profile;
