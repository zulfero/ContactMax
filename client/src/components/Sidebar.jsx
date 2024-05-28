import { Link } from "react-router-dom";

function Sidebar() {
  return (

      <div className=" pl-8  ">
        <h1 className="font-bold text-2xl text-white  mb-6 mt-3">Dashboard</h1>
        <div className=" text-white text-xl flex flex-col gap-5">
          <Link to="/dashboard/contacts">
            <h2>Contacts</h2>
          </Link>
          <Link to="/dashboard/categories">
            <h2>Categories</h2>
          </Link>

          <h2>Profile</h2>
        </div>
      </div>
  );
}
export default Sidebar;
