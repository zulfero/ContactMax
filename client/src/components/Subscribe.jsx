import Propsubscribe from "./Propsubscribe";

function Subscribe() {
  return (
    <div className="container mx-auto">
      <div className="mb-12">
        <h1 className="font-bold text-center text-2xl  flex items-center justify-center mt-11">
          Choose Your Plan
        </h1>
        <h2 className="font-semibold text-center text-2xl  flex items-center justify-center">
          For a Better Experience In Managing Your Contacts
        </h2>

        <div className="flex container mx-auto gap-[13em] mt-12">
          <div className="rounded-md w-[35%]">
            <Propsubscribe
              heading1="Free"
              heading2="$0"
              note="per month"
              paragraph1="Store Upto 50 Contacts"
              paragraph2="Basic Contacts Field"
              paragraph3="Basic Search Functionalities"
              paragraph4="Limited Bulk Emailing"
            />
          </div>
          <div className=" pb-8 rounded-md w-[35%]">
            <Propsubscribe
              heading1="Premium"
              heading2="$149"
              note="per month"
              paragraph1="Store Upto 50 Contacts"
              paragraph2="Basic Contacts Field"
              paragraph3="Basic Search Functionalities"
              paragraph4="Limited Bulk Emailing"
            />
          </div>
          <div className=" rounded-md w-[35%]">
            <Propsubscribe
              heading1="Unlimited"
              heading2="$249"
              note="per month"
              paragraph1="Store Upto 50 Contacts"
              paragraph2="Basic Contacts Field"
              paragraph3="Basic Search Functionalities"
              paragraph4="Limited Bulk Emailing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Subscribe;
