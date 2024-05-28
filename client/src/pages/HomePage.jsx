import Home from "../components/Home";
import Herosect from "../components/Herosect";
import Cards from "../components/Cards";
import Subscribe from "../components/Subscribe";
import Testimonials from "../components/Testimonials";
import Signupcontent from "../components/Signupcontent";
import { useState } from "react";

function Homepage({isopen, setIsopen}) {
  return (
    <>
      <Home />
      <Herosect />
      <Cards />
      <Subscribe />
      <Testimonials />
      
    </>
  );
}
export default Homepage;
