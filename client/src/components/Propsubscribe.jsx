import { Link } from "react-router-dom";


function Propsubscribe({
  heading1,
  heading2,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  note,
}) {
  return (
    <div className="shadow-2xl p-14 pl-7 pr-7 border  rounded-lg transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300 hover:bg-[#879ef0]">
      <div className="mb-6">
        <h1 className="text-xl mb-3 font-bold">{heading1}</h1>
        <div className="flex text-center items-center">
          <h2 className="font-semibold text-4xl">{heading2}</h2>
          <h3 className="">
            <span className="text-[gray] ml-2">{note}</span>
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex items-center gap-1">
          <img src="src/assets/images/check-mark.png" alt="" width={20} />
          <p>{paragraph1}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src="src/assets/images/check-mark.png" alt="" width={20} />
          <p>{paragraph2}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src="src/assets/images/check-mark.png" alt="" width={20} />
          <p>{paragraph3}</p>
        </div>
        <div className="flex items-center gap-1">
          <img src="src/assets/images/check-mark.png" alt="" width={20} />
          <p>{paragraph4}</p>
        </div>
      </div>
      <div className="text-center mt-6">
        <button className="border rounded-md bg-[#4870FC] text-white w-[100%] py-4">
          Try For Free
        </button>
      </div>
    </div>
  );
}
export default Propsubscribe;
