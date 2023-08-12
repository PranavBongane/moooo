import React from "react";
import Footer from "./Footer";
import DeleveryComp from "./DeleveryComp";

import Corousel from "./Corousel";
import HomeComp from "./HomeComp";
import Corousel2 from "./Corousel2";

function Welcome() {
  return (
    <>
      <Corousel />
      <DeleveryComp />
      <HomeComp />
      <Corousel2 />
      <Footer />
    </>
  );
}

export default Welcome;
