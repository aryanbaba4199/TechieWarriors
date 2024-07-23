import React, { useEffect } from "react";
import { SkillData } from "@/pages/api/Constants/basicInfo";
import AOS from "aos";
import "aos/dist/aos.css";

const Tech = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a duration of 1000ms and ensure animations run only once
  }, []);

  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <p className="text-3xl bg-slate-950 py-1 rounded-sm text-white px-4 mt-16">
            We use modern technologies for Developing a website
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
          {SkillData.map((item, index) => (
            <div
              key={index}
              className={`flex justify-center items-center flex-col border-2 border-black p-2 w-28 h-20 transition-all hover:scale-125 hover:z-50 duration-300 hover:bg-${item.color}`}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`} // Adding delay to each item
            >
              <span className={`text-4xl ${item.color}`}>{item.URI}</span>
              <p className="mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech;
