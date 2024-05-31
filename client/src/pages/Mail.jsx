import Dashboard from "./Dashboard";

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
        flex-col gap-9 ml-[3em]"
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
          <div className="text-end mr-[5em]">
            {" "}
            <button className="border  py-4 px-[4em] outline-none text-white text-xl">
              Send
            </button>
          </div>
        </div>
      </Dashboard>
    </>
  );
}
export default Mail;
