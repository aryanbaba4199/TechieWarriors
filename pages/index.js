import React from "react";

import Intro from "@/Components/Home/Intro";
import Services from "@/Components/Home/Services";
import Pricing from "@/Components/Pricing";
import Whyus from "@/Components/Home/whyus";
import Tech from "@/Components/Home/Tech";
import AboutUs from "@/Components/Home/aboutus";
import ContactUs from "@/Components/Home/ContactUs";

const Index = () => {
  return (
    <>
      <div className="mb-8">
        <Intro />
        <Services />
        <Pricing />
        <Whyus />
        <Tech />
        <AboutUs />
        <ContactUs />
      </div>
    </>
  );
};

export default Index;
