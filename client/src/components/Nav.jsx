import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between text-center items-center">
        <div>
          <img src="src/images/project.png" alt="" width={100} />
        </div>
        <div className="flex gap-4">
          <button className="border rounded-xl bg-[#4870FC] text-white p-2 px-12">
            Login
          </button>
          <Link to="/signupcontent">
            <button className="border rounded-xl bg-[#4870FC] text-white p-2 px-12">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
