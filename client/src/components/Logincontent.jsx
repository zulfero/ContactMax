import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logincontent({ setIsopen, isopen }) {
  const navigate=useNavigate()
  function handlelogincontent(e) {
    setIsopen((prev) => ({ ...prev, login: false }));
  }
  return (
    <div className="container mx-auto">
      <div className=" fixed w-[100%] bg-[rgba(0,0,0,0.7)] h-screen top-0 left-0">
        <div>
          <span
            onClick={(e) => handlelogincontent()}
            className=" border border-none absolute flex items-center justify-center right-[24em] top-[3.4em] cursor-pointer size-8 rounded-full text-2xl p-2 bg-[#4870FC] text-white"
          >
            x
          </span>
        </div>
        <div className="border mt-[5em] rounded-3xl bg-gray-200 w-[40%] mx-auto py-5  ">
          <h1 className="text-center font-bold text-2xl pb-5">Sign-Up</h1>
          <form className="  flex flex-col gap-4 px-[3em]">
            <input className="px-2 py-5" type="text" placeholder="Email" />
            <input className="px-2 py-5" type="text" placeholder="Password" />

            <div className="text-center flex flex-col gap-8 mb-[7em] mt-[3em] items-center">
              <button className="font-semibold border rounded-md w-[30%] py-4 text-xl bg-[#4870FC] cursor-pointer text-white" onClick={()=>navigate("/dashboard/contacts")}>
                Log-In
              </button>
            </div>
          </form>
          <p className="text-center">
            Don't Have An Account?
            <span className=" text-[1em] text-[#4870FC] underline">
              Sign-Up
            </span>
          </p>
        </div>
      </div>
      //{" "}
    </div>
  );
}
export default Logincontent;
