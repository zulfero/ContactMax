import Signupcontent from "./Signupcontent";
import { useState } from "react";

function Herosect() {
  // const [isopen, setIsopen] = useState({
  //   Signupcontent: false,
  //   Logincontent: false,
  // });

  return (
    <>
      <div className="container mx-auto flex mt-11  items-center">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-6xl">Contact-Max</h1>
          <p className="w-[60%]  text-xl">
            For those in need to manage their piling accounts without stress and
            secure and easy to find. With Contact-max one has the ability to
            manage ,organize and handle and also add not one , not three but up
            to ten contacts.
          </p>
          <div>
            <button
              className="border bg-[#4870FC] rounded-md py-4 px-12 text-white"
              // onClick={() => setIsopen(true)}
            >
              Subscribe
            </button>
          </div>
        </div>

        <img className="" src="src/images/new.svg" alt="" />
      </div>
      {/* {isopen ? <Signupcontent setIsopen={setIsopen} isopen={isopen} /> : null} */}
    </>
  );
}
export default Herosect;
