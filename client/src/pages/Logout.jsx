import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <Dashboard>
      <div className="container mx-auto">
        <div className="border mt-[5em] rounded-3xl bg-gray-200 w-[40%] mx-auto py-5  ">
          <h1 className="text-center font-bold text-2xl pb-5">Log-Out</h1>
          <form className="  flex flex-col gap-4 px-[2.5em]">
            <div className="border rounded-xl text-center w-[30%] ml-[12em] bg-[#4870FC]">
              <Link to="/dashboard/contacts">
                {" "}
                <button className="py-4 px-2 text-xl text-white  ">Exit</button>
              </Link>
            </div>
            <div className="border text-center rounded-xl w-[30%] ml-[12em] bg-[#4870FC]">
              <Link to="/">
                {" "}
                <button className="py-4 px-2 text-xl text-white ">
                  Log-Out
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Dashboard>
  );
}
export default Logout;
