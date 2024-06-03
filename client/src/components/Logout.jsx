import { useNavigate } from "react-router-dom";


function Logout({setIsopen,isopen}) {
    const navigate = useNavigate();
    function handlelogout(e) {
      setIsopen((prev) => ({ ...prev, logout: false }));
    }
  return (
    <>
      <div className="container mx-auto">
        {/* <div className=" fixed w-[100%] bg-[rgba(0,0,0,0.7)] h-screen top-0 left-0"> */}
        <div>
          <span
            onClick={(e) => handlelogout()}
            className=" border border-none absolute flex items-center justify-center right-[27em] top-[8em] cursor-pointer size-8 rounded-full text-2xl p-2 bg-[#4870FC] text-white"
          >
            x
          </span>
        </div>
        <div className="border mt-[5em] rounded-3xl bg-gray-200 w-[40%] mx-auto py-5  ">
          <h1 className="text-center font-bold text-2xl pb-5">Log-Out</h1>
          <form className="  flex flex-col gap-4 px-[2.5em]">
            <div className="text-center flex flex-col gap-8 mb-[5em]  items-center">
              <button
                className="font-semibold border rounded-md w-[30%] py-4 text-xl bg-[#4870FC] cursor-pointer text-white"
                onClick={() => navigate("/")}
              >
                Log-Out
              </button>
              <button
                className="font-semibold border rounded-md w-[30%] py-4 text-xl bg-[#4870FC] cursor-pointer text-white"
                onClick={() => navigate("/dashboard/contacts")}
              >
                Exit
              </button>
            </div>
          </form>
        </div>
      </div>{" "}
      {/* </div> */}
    </>
  );
}
export default Logout;
