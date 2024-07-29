import { useState } from "react";

function Signupcontent({ setIsopen, isopen }) {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errorMessege, setErrorMessage] = useState("");

  function handlesignupcontent(e) {
    setIsopen((prev) => ({ ...prev, signup: false }));
  }
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleregister = (e) => {
    e.preventDefault();

    if (formdata.firstname === "") {
      setErrorMessage("Kindly fill all the Fileds");
    } else if (formdata.lastname === "") {
      setErrorMessage("Kindly fill all the Fileds");
    } else if (formdata.email === "") {
      setErrorMessage("Kindly fill all the Fileds");
    } else if (formdata.password === "") {
      setErrorMessage("Kindly fill all the Fileds");
    } else {
      setErrorMessage("");
      console.log(formdata);
      const url = "http://127.0.0.1:8000/api/userregistration/";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      };
      fetch(url, options)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            return res.json().then((message) => {
              setErrorMessage(message["email"][0]);
            });
          }

          return res.json();
        })
        .then((data) => {
          if (data !== undefined) {
            console.log(data);
            setIsopen((prev) => ({ ...prev, signup: false }));
            setIsopen((prev) => ({ ...prev, login: true }));
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    // <div className="container mx-auto">
    // <div className="border block mx-auto p-16 px-2 w-[70%] bg-[#4870FC] ">
    <div className=" fixed w-[100%] bg-[rgba(0,0,0,0.7)] h-screen top-0 left-0">
      <div>
        <span
          onClick={(e) => handlesignupcontent()}
          className=" border border-none absolute flex items-center justify-center right-[24em] top-[3.4em] cursor-pointer size-8 rounded-full text-2xl p-2 bg-[#4870FC] text-white"
        >
          x
        </span>
      </div>
      <div className="border mt-[5em] rounded-3xl bg-gray-200 w-[40%] mx-auto py-5  ">
        <h1 className="text-center font-bold text-2xl pb-5">Sign-Up</h1>
        <form className="  flex flex-col gap-4 px-[3em]">
          <input
            className=" px-2 py-5"
            name="firstname"
            onChange={handleChange}
            type="text"
            placeholder="FirstName"
          />
          <input
            className="px-2 py-5"
            name="lastname"
            onChange={handleChange}
            type="text"
            placeholder="LastName"
          />
          <input
            className="px-2 py-5"
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />
          <input
            className="px-2 py-5"
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
          <input
            className="px-2 py-5"
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <p className="text-red-500 text-center text-xl">{errorMessege}</p>
          <div className="text-center flex flex-col gap-8 mb-[7em] mt-[3em] items-center">
            <button
              className="font-semibold border rounded-md w-[30%] py-4 text-xl bg-[#4870FC] cursor-pointer text-white"
              onClick={handleregister}
            >
              Submit
            </button>
          </div>
        </form>
        <p className="text-center">
          Already Have An Account?
          <span className=" text-[1em] text-[#4870FC] underline">Log-In</span>
        </p>
      </div>
    </div>
    //  </div>
    // </div>
  );
}
export default Signupcontent;
