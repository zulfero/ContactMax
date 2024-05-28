import TestimonialProp from "./TestimonialProp";

function Testimonials() {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="font-bold mt-5 text-2xl">Testimonials</h1>
      </div>
      <div className=" flex justify-around">
        <TestimonialProp
          image="src/assets/images/female.jpg"
          name="Natasha Romanof"
          paragraph="“ I have found using the contact-
        max useful due to its fast pace
        and ease of adding the contact
        that is important”"
        />
        <TestimonialProp
          image="src/assets/images/images (1).jpeg"
          name="Kalvin clain"
          paragraph="“ I have found using the contact-
        max useful due to its fast pace
        and ease of adding the contact
        that is important”"
        />
        <TestimonialProp
          image="src/assets/images/avater.jpg"
          name="Jhon Cena"
          paragraph="“ I have found using the contact-
        max useful due to its fast pace
        and ease of adding the contact
        that is important”"
        />
      </div>
    </div>
  );
}
export default Testimonials;
