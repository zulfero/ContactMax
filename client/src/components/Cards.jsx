import Cardsprop from "./Cardsprop";

function Cards() {
  return (
    <div className="container mx-auto">
      <div className="mb-[10em]">
        <h1 className="font-bold text-4xl text-center mb-[3em]">Features</h1>
        <div className="flex justify-between text-center">
          <div className=" w-[25%] rounded-2xl h-[20vh]">
            <Cardsprop
              heading="Phase 1."
              paragraph=" Users can input details such as names, phone numbers, email addresses, and additional notes, ensuring easy access to important contacts when needed."
            />
          </div>
          <div className=" w-[25%] rounded-2xl h-[20vh] ">
            <Cardsprop
              heading="Phase 1."
              paragraph=" Users can input details such as names, phone numbers, email addresses, and additional notes, ensuring easy access to important contacts when needed."
            />
          </div>
          <div className=" w-[25%] rounded-2xl h-[20vh]">
            <Cardsprop
              heading="Phase 1."
              paragraph=" Users can input details such as names, phone numbers, email addresses, and additional notes, ensuring easy access to important contacts when needed."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
