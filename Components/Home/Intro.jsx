import React, { useEffect } from 'react';
import AOS from 'aos';

const Intro = () => {
  useEffect(() => {
    AOS.init({
      // Options for AOS initialization (if needed)
    });
    
  }, []);
  

  const title = ["T", " E", " C"," H", " I"," E","   ",  "   W", " A", " R", "R ", "I ", "O ", "R ", "S "]

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div className="flex justify-center items-center mt-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-5xl text-slate-950" data-aos="fade-in" >
            Bring Your Business Online
          </h1>
          <span className="font-bold text-3xl mt-4" data-aos="fade-up" data-aos-delay={700}>
            With{' '}
            {title.map((item, index)=>(
              <span
              key={index}
              className="text-[#1974e9]"
              data-aos-delay={500+index*100}
              data-aos="fade-up">{item}</span>
            ))}
            
            
          </span>
        </div>
      </div>
      <div className="mt-20 flex justify-center items-center px-4 text-lg">
        <div className=" ">
          <span data-aos="fade-up" data-aos-delay={700} className="text-lg text-black font-semibold border-2 border-black px-4 py-2">
            Your Vision, Our Code
          </span>
        </div>
      </div>
      <div className="flex justify-end w-full mr-24 items-start">
        <span
          className="border-2 border-blue-800 font-semibold px-4 py-2 text-2xl rounded-md shadow-lg shadow-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-green-600 to-red-600"
          data-aos="zoom-in" data-aos-delay={3000}
        >
          Starting Price : 3000/-
        </span>
      </div>
    </div>
  );
};

export default Intro;