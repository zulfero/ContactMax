import { Link } from "react-router-dom";
import conts from "../assets/images/notebook-of-contacts.png";
import profile from "../assets/images/avatar-icon.svg";
import cat from "../assets/images/categories.png";
import img from "../assets/images/logout.png";

function Sidebar() {
  return (
    <div className=" pl-8  ">
      <h1 className="font-bold text-2xl text-white  mb-6 mt-3">Dashboard</h1>
      <div className=" text-white text-xl flex flex-col gap-5">
        <Link to="/dashboard/contacts">
          <div className="flex  items-center gap-6">
            <img src={conts} alt="" width={30} /> <h2>Contacts</h2>
          </div>{" "}
        </Link>

        <Link to="/dashboard/categories">
          {" "}
          <div className="flex  items-center gap-6">
            <img src={cat} alt="" width={30} /> <h2>Categories</h2>
          </div>{" "}
        </Link>
        <Link to="/dashboard/profile">
          {" "}
          <div className="flex  items-center gap-6">
            <img src={profile} alt="" width={30} />
            <h2>Profile</h2>
          </div>{" "}
        </Link>

        <Link to="/dashboard/logout">
          {" "}
         
          <div className="flex  items-center gap-6">
          <img src={img} alt="" width={30} />
            <h2>Log-Out</h2>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
}
export default Sidebar;
