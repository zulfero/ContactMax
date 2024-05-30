import Dashboard from "./Dashboard";
import log from "../assets/images/envelope-line-icon.svg";

import image from "../assets/images/female.jpg";

function SingleContact() {
  return (
    <>
      <Dashboard>
        <div className="flex flex-col justify-center items-center">
          <div className=" border border-none absolute flex items-center justify-center right-[3/em] top-[7em] cursor-pointer">
            <img src={log} alt="" width={50} />
          </div>
          <img
            className="border rounded-full mb-9 mt-9"
            src={image}
            alt=""
            width={200}
          />
          <h2 className="font-bold text-2xl">Natasha Romanof</h2>
        </div>
        <div className="pl-[5em] flex flex-col mt-[5em] gap-[5em]">
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
              <h2>Natasha </h2>
              <h2>Romanof</h2>
            </div>
          </div>{" "}
          <div className="flex gap-[6em]">
            <h1>PhoneNo.:</h1>
            <div className="flex">
              <h2>Natasha </h2>
              <h2>Romanof</h2>
            </div>
          </div>{" "}
          <div className="flex gap-[6em]">
            <h1>Address:</h1>
            <div className="flex">
              <h2>Natasha </h2>
              <h2>Romanof</h2>
            </div>
          </div>{" "}
          <div className="flex gap-[6em]">
            <h1>BirthDate:</h1>
            <div className="flex">
              <h2>Natasha </h2>
              <h2>Romanof</h2>
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
