import { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Logincontent({ setIsopen, isopen }) {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const [errorMessege, setErrorMessage] = useState("");

  const navigate = useNavigate();
  function handlelogincontent(e) {
    setIsopen((prev) => ({ ...prev, login: false }));
  }

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlelogin = (e) => {
    e.preventDefault();

    if (formdata.email === "") {
      setErrorMessage("Kindly fill in the email address");
    } else if (formdata.password === "") {
      setErrorMessage("Kindly fill in the password");
    } else {
      setErrorMessage("");
      console.log(formdata);
      const url = "http://127.0.0.1:8000/api/login/";
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
            return res.json().then(info=>{
              console.log(info)
              setErrorMessage(info.message || info.email)
              // setErrorMessage(info[0])
              // setIsopen((prev) => ({ ...prev, login: false}));
            });
          }
          return res.json();
        })
        .then((data) => {
         
          if(data!==undefined){
            console.log(data);
            localStorage.setItem("access_token",data.access_token)
            localStorage.setItem("refresh_token",data.refresh_token)
            navigate("/dashboard/contacts");
             setIsopen((prev) => ({ ...prev, login:false }));
          }
       
        })
        .catch((err) => console.log(err));
    }
  };

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
          <h1 className="text-center font-bold text-2xl pb-5">Log-in</h1>
          <form className="  flex flex-col gap-4 px-[3em]">
            <input
              className="px-2 py-5"
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Email"
            />
            <input
              className="px-2 py-5"
              onChange={handleChange}
              name="password"
              type="text"
              placeholder="Password"
            />
            <p className="text-red-500 text-center text-2xl font-bold">
              {errorMessege}
            </p>

            <div className="text-center flex flex-col gap-8 mb-[7em] mt-[3em] items-center">
              <button
                className="font-semibold border rounded-md w-[30%] py-4 text-xl bg-[#4870FC] cursor-pointer text-white"
                onClick={handlelogin}
              >
                Log-In
              </button>
            </div>
          </form>
          <p className="text-center">
            Don't Have An Account?
            <span
              onClick={() => setIsopen((prev) => ({ ...prev, signup: true }))}
              className=" text-[1em] text-[#4870FC] underline"
            >
              Sign-Up
            </span>
          </p>
        </div>
      </div>{" "}
    </div>
  );
}
export default Logincontent;
