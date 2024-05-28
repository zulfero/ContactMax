import { Link } from "react-router-dom";
import { useState } from "react";
import Logincontent from "./Logincontent";
import Signupcontent from "./Signupcontent";
import logo from "../assets/images/project.png"

function Nav() {
  const [isopen, setIsopen] = useState({
    signup: false,
    login: false,
  });
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between text-center items-center">
        <div>
          <Link to="/">
            <img src={logo} alt="" width={100} />
          </Link>
        </div>
        <div className="flex gap-4">
          <button
            className="border rounded-xl bg-[#4870FC] text-white p-2 px-12"
            onClick={() => setIsopen((prev) => ({ ...prev, login: true }))}
          >
            Login
          </button>
          <button
            className="border rounded-xl bg-[#4870FC] text-white p-2 px-12"
            onClick={() => setIsopen((prev) => ({ ...prev, signup: true }))}
          >
            Sign Up
          </button>
        </div>
      </nav>
      {isopen.signup ? (
        <Signupcontent setIsopen={setIsopen} isopen={isopen} />
      ) : null}
      {isopen.login ? (
        <Logincontent setIsopen={setIsopen} isopen={isopen} />
      ) : null}
    </div>
  );
}
export default Nav;
