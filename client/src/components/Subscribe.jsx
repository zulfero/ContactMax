function Subscribe() {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-center text-2xl  flex items-center justify-center mt-11">
        Choose Your Plan
      </h1>
      <h2 className="font-semibold text-center text-2xl  flex items-center justify-center">
        For a Better Experience In Managing Your Contacts
      </h2>

      <div className="flex container mx-auto gap-[15em] text-center mt-12">
        <div className="border rounded-md w-[35%]  bg-[#4870FC]">
          <h1 className="text-xl font-bold  ">Free</h1>
          <h1 className="font-semibold text-xl">$0</h1>
          <div className="leading-10 font-semibold text-white text-[1em]">
            <p>.Store upto 50 Contacts</p>
            <p>.Basic Contacts Field</p>
            <p>.Basic Search Functionality</p>
            <p>.Limited Bulk Emailing</p>
          </div>
        </div>
        <div className="border rounded-md w-[35%]  bg-[#4870FC]">
          <h1 className="text-xl font-bold  ">Advanced</h1>
          <h1 className="font-semibold text-xl">$50</h1>
          <div className="leading-10 font-semibold text-white text-[1em]">
            <p>.Store upto 50 Contacts</p>
            <p>.Basic Contacts Field</p>
            <p>.Basic Search Functionality</p>
            <p>.500 Emailing</p>
          </div>
        </div>
        <div className="border rounded-md w-[35%]  bg-[#4870FC]">
          <h1 className="text-xl font-bold  ">premium</h1>
          <h1 className="font-semibold text-xl">$500</h1>
          <div className="leading-10 font-semibold text-white text-[1em]">
            <p>.Store upto 1000 Contacts</p>
            <p>.Advanced Contacts Field</p>
            <p>.Advanced Search Functionality</p>
            <p>.1000 Emailing</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Subscribe;
