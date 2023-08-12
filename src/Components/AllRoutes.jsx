import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Milk from "./Milk";
import FodderForm from "./FodderForm";
import CowHealthForm from "./CowHealthForm";
import MilkRequirementForm from "./MilkRequirementForm";
import Navbar from "./Navbar";
import MilkData from "./MilkData";
import AnimalData from "./AnimalData";
import FodderData from "./FodderData";
import CustomerData from "./CustomerData";
import Welcome from "./Welcome";
import About from "./About";
import Products from "./Products";
import ExplainBussiness from "./ExplainBussiness";

function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/dashboard" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/milk" element={<Milk />}></Route>
        <Route path="/fodder" element={<FodderForm />}></Route>
        <Route path="/health" element={<CowHealthForm />}></Route>
        <Route path="/customer" element={<MilkRequirementForm />}></Route>
        <Route path="/milkdata" element={<MilkData />}></Route>
        <Route path="/fodderdata" element={<FodderData />}></Route>
        <Route path="/customerdata" element={<CustomerData />}></Route>
        <Route path="/Animaldata" element={<AnimalData />}></Route>
        <Route path="/business" element={<ExplainBussiness />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
