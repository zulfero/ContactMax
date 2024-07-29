import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddCategory({ setIsopen, isopen }) {
  const [formdata, setFormdata] = useState({
    category: "",
  });
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const [errorMessege, setErrorMessage] = useState("");

  const handleaddcategory = (e) => {
    e.preventDefault();

    if (formdata.category === "") {
      setErrorMessage("Kindly fill in the category name");
    } else {
      setErrorMessage("");
      console.log(formdata);
      const url = "http://127.0.0.1:8000/api/category/";
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
            return res.json().then((category) => {
              console.log(category["category"]);
            });
          }
          return res.json();
        })
        .then((data) => {
          if (data !== undefined) {
            console.log(data);
          }
        });
    }
  };

  const navigate = useNavigate({ isopen: false, setIsopen: false });
  function handleAddcategory(e) {
    setIsopen(false);
  }
  return (
    <>
      <div className="container mx-auto">
        <div className=" fixed w-[100%] bg-[rgba(0,0,0,0.7)] h-screen top-0 left-0">
          <div>
            <span
              onClick={() =>
                setIsopen((prev) => ({ ...prev, addcategory: false }))
              }
              className=" border border-none absolute flex items-center justify-center right-[25em] top-[3.4em] cursor-pointer size-8 rounded-full text-2xl p-2 bg-[#4870FC] text-white"
            >
              x
            </span>
          </div>
          <div className="border mt-[5em] rounded-3xl bg-gray-200 w-[40%] mx-auto py-5  ">
            <h1 className="text-center font-bold text-2xl pb-5">
              Add Category
            </h1>
            <form className="  flex flex-col gap-4 px-[3em]">
              <input
                className="px-2 py-5 outline-none"
                name="category"
                type="text"
                placeholder="Category Name..."
                onChange={handleChange}
              />
              <p className="text-red-500 text-center text-2xl font-bold">
                {errorMessege}
              </p>

              <div className="text-center flex flex-col gap-8 mb-[7em] mt-[3em] items-center">
                <button
                  className="font-semibold border rounded-md w-[30%] py-4 text-xl bg-[#4870FC] cursor-pointer text-white"
                  onClick={handleaddcategory}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddCategory;
