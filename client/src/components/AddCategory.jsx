import { useNavigate } from "react-router-dom";

function AddCategory({setIsopen,isopen}) {
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
                type="text"
                placeholder="Category Name..."
              />

              <div className="text-center flex flex-col gap-8 mb-[7em] mt-[3em] items-center">
                <button
                  className="font-semibold border rounded-md w-[30%] py-4 text-xl bg-[#4870FC] cursor-pointer text-white"
                  onClick={() => navigate("/dashboard/categories")}
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
