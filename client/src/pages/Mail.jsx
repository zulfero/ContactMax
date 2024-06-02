import Dashboard from "./Dashboard";
import plane from "../assets/images/paper-plane.png"

function Mail() {
  return (
    <>
      <Dashboard>
        <div>
          <h1 className="mb-[3em] font-bold outline-none text-white ml-[3em] text-2xl mt-[3em]">
            Write Mail
          </h1>
          <div
            className="flex
        flex-col gap-9 ml-[3em] bg-green-500"
          >
            <div>
              {" "}
              <input
                className="py-4  px-[4em] border border-none rounded-sm  outline-none"
                type="text"
                placeholder="From:"
              />
            </div>
            <div>
              {" "}
              <input
                className="py-4  px-[4em] border border-none rounded-sm outline-none"
                type="text"
                placeholder="To:"
              />
            </div>
            <div>
              {" "}
              <input
                className="py-4  px-[4em] border border-none rounded-sm outline-none"
                type="text"
                placeholder="Cc:"
              />
            </div>

            <textarea
              className="border border-none rounded-sm resize-none outline-none w-[70%] h-[40vh]"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
      
        </div>
            <div className=" flex items-center w-[10%] bg-red-500 border  py-4  outline-none text-white text-xl">
            {" "}
            <button className="">
              Send
            </button>
            <img src={plane} alt="" width={30} />
          </div>
      </Dashboard>
    </>
  );
}
export default Mail;
