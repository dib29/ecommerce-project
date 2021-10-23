import Header from "../Components/Header";
import Footer from "../Components/Footer";

import { useState } from "react";
import { Link } from "react-router-dom";

import SectionHeading from "../Components/Shop/Sections/SectionHeading";
import SectionProductCategory from "../Components/Shop/Sections/SectionProductCategory";

export default function Shop() {


  return (
    <>
      <Header />
      <SectionHeading/>

     <SectionProductCategory/>
      <Footer />
    </>
  );
}
