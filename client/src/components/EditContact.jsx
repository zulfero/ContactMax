import { useNavigate } from "react-router-dom";


function EditContact({setIsopen,isopen}) {
    const navigate = useNavigate({ isopen: false, setIsopen: false });
    function handleEditContact(e) {
      setIsopen(false);
    }
    return (
      <>
        <div className="container mx-auto">
          <div className=" fixed w-[100%] bg-[rgba(0,0,0,0.2)] h-screen top-0 left-0">
            <div>
              <span
                onClick={() =>
                  setIsopen((prev) => ({ ...prev, editcontact: false }))
                }
                className=" border border-none absolute flex items-center justify-center right-[26.5em] top-[3.4em] cursor-pointer size-8 rounded-full text-2xl p-2 bg-[#4870FC] text-white"
              >
                x
              </span>
            </div>
            <div className="border mt-[5em] rounded-3xl bg-gray-200 w-[34%] mx-auto py-3  ">
              <h1 className="text-center font-bold text-2xl pb-5">
                Edit Contact
              </h1>
              <form className="  flex flex-col gap-4 px-[3em]">
             
              <div className="flex flex-col gap-[3em] mt-[3em]">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white  text-xl ">FirstName</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                type="text"
                placeholder="Firstname"
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white text-xl ">LastName</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                type="text"
                placeholder="Lastname"
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                {" "}
                <h1 className="text-white text-xl ">EmailAdd</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-white text-xl ">PhoneNo.</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-8"
                type="Number"
                placeholder=""
              />
            </div>
            <div className="flex items-center gap-6">
              <div>
                {" "}
                <h1 className="text-white text-xl ">DOfBirth.</h1>
              </div>

              <input
                className="py-4 border rounded-sm px-[5em] "
                type="Date"
                placeholder="Firstname"
              />
            </div>
          </div>
                <div className="text-center flex flex-col gap-8 mb-[7em] mt-[3em] items-center">
                  <button
                    className="font-semibold border rounded-md w-[30%] py-4 text-xl bg-[#4870FC] cursor-pointer text-white"
                    onClick={() => navigate("/dashboard/singlecontact")}
                  >
                    Add Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default EditContact