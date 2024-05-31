import Dashboard from "./Dashboard";

function Mail() {
  return (
    <>
      <Dashboard>
        <div
          className="flex
        flex-col gap-9"
        >
          <h1>Mail</h1>
          <div>
            <div>
              {" "}
              <input type="text" placeholder="From" />
            </div>
            <div>
              {" "}
              <input type="text" placeholder="To" />
            </div>
            <div>
              {" "}
              <input type="text" placeholder="Cc" />
            </div>

            <textarea name="" id="" cols="30" rows="10"></textarea>
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
