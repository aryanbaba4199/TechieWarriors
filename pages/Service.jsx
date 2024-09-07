import React from "react";
import { ServiceData } from "./api/Constants/basicInfo";
import Services from "@/Components/Home/Services";
import Pricing from "@/Components/Pricing";

const Service = () => {
  return (
    <>
    <div>
      
    </div>
    <div className="flex flex-col gap-2">
      <Services/>
      <Pricing/>
      </div>
    </>
  );
};

export default Service;
