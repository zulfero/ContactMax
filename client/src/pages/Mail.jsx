import Dashboard from "./Dashboard";

function Mail() {
  return (
    <>
      <Dashboard>
        <div>
          <h1 className="mb-[5em] font-bold text-2xl outline-none text-white ml-[3em]">Write Mail</h1>
          <div
            className="flex
        flex-col gap-9 ml-[3em]"
          >
            <div>
              {" "}
              <input  className="py-4 border border-none rounded-sm  outline-none"  type="text" placeholder="From:" />
            </div>
            <div>
              {" "}
              <input  className="py-4 border border-none rounded-sm outline-none" type="text" placeholder="To:" />
            </div>
            <div>
              {" "}
              <input className="py-4 border border-none rounded-sm outline-none"  type="text" placeholder="Cc:" />
            </div>

            <textarea className="border border-none rounded-sm resize-none outline-none" name="" id="" cols="30" rows="10"></textarea>
            {/* <div>
              {" "}
              <button>Send</button>
            </div> */}
          </div>
        </div>
      </Dashboard>
    </>
  );
}
export default Mail;
