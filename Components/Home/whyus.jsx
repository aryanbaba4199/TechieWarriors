import React from 'react';
import { WhyusData } from '@/pages/api/Constants/basicInfo';

const Whyus = () => {
  return (
    <div className="px-8 py-12">
      <div className="flex justify-center items-center mt-16">
        <p className="text-4xl font-bold bg-slate-950 text-white px-4 py-1 rounded-md">Why Us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {WhyusData.map((item, index) => (
          <div key={index} className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-xl transition-all hover:scale-110 hover:z-50 duration-300 ease-in-out">
            <img src={item.imgSrc} alt={item.title} className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center">{item.title}</h3>
            <p className="text-gray-700 text-center mt-2 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Whyus;
