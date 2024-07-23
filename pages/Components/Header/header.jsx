import React from "react";
import Image from "next/image";
import { CompanyDetails } from "@/pages/api/Constants/basicInfo";
import { useState } from "react";
import Link from "next/link";


const Header = () => {
   

  return (
    <>
      <div className="bg-slate-800 text-white flex justify-between items-center h-12 px-8">
        <div className="flex justify-center items-center">
          <Image
            alt="Alpha Tech Warriors"
            src="https://cdn-icons-png.flaticon.com/256/11439/11439412.png"
            width={40}
            height={40}
            className="bg-white rounded-full my-1"
          />
          <span className="text-xl ml-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-red-300 font-bold font-serif">
            {CompanyDetails.title}
          </span>
        </div>
        <div>
          <div className="flex justify-center items-center gap-8 mr-4">
            {CompanyDetails.NavMenu.map((item, index) => (
              <div key={index}>
                <Link href={item.uri}  className="hover:bg-blue-800 hover:scale-125 transition-all hover:ease-in-out hover:delay-100 py-1 px-4 rounded-sm">
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
