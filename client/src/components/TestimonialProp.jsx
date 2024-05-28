function TestimonialProp({ image, name, paragraph }) {
  return (
    <div className="">
      <div className="w-[80%]  text-center items-center border rounded-lg  bg-[#879ef0] text-white   px-2 p-[4em]">
        {" "}
        <img
          className="border rounded-full mb-9 block mx-auto"
          src={image}
          alt=""
          width={170}
        />
        <div
          className="flex
        flex-col gap-6"
        >
          <h1 className="text-xl">{name}</h1>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}
export default TestimonialProp;
