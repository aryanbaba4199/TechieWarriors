import React from "react";
import Image from "next/image";
import { CompanyDetails } from "@/pages/api/Constants/basicInfo";
import { useState } from "react";
import Link from "next/link";
import { Drawer, Typography } from "@mui/material";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/"); // Track currently active tab

  const handleNavItemClick = (uri) => {
    setActiveTab(uri); // Update active tab on click
    setOpen(false); // Close drawer if open
  };


  return (
    <>
      <div className="bg-slate-800 backdrop-blur-xl  fixed left-0 top-0 w-full inset-96 fill-neutral-700 text-white flex justify-between items-center h-12 px-8">
      
        <div className="flex gap-4 justify-center items-center">
          <div>
            <FiMenu
              className="text-white text-xl md:hidden block"
              onClick={() => setOpen(true)}
            />
          </div>
          <img
            alt="Alpha Tech Warriors"
            src="https://i.pinimg.com/564x/a4/70/12/a47012d20bf714a424441cb350e8e7b2.jpg"
            width={40}
            height={40}
            className="bg-white rounded-full my-1"
          />
          <Typography className="text-xl ml-2 " variant="h1">
            {CompanyDetails.title}
          </Typography>
        </div>
        <div className="md:block hidden">
          <div className="flex justify-center items-center gap-4 mr-4">
            {CompanyDetails.NavMenu.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.uri}
                  className={`hover:border-amber-600 hover:border-b-2 hover:scale-105 transition-all ease-in-out py-2 px-6 rounded-sm ${
                    activeTab === item.uri ? "border-b-4 border-green-600" : "" // Add border for active tab
                  }`}
                  onClick={() => handleNavItemClick(item.uri)} // Update activeTab on click
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Drawer
        className=""
        open={open}
        onClose={() => setOpen(false)}
        anchor="left"
      >
        <div className="pt-4 w-52 bg-gray-100 h-screen">
          <div className="flex flex-col justify-center items-center ">
            <Image
              alt="Alpha Tech Warriors"
              src="https://cdn-icons-png.flaticon.com/256/11439/11439412.png"
              width={80}
              height={80}
              className="bg-white rounded-full my-1 border-2 p-2"
            />
            <Typography className="border-2 px-4 text-cyan-500 text-xl">
              Techi Warriors
            </Typography>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 text-slate-950">
            {CompanyDetails.NavMenu.map((item, index) => (
              <div key={index} className="flex flex-col ">
                <Link
                  href={item.uri}
                  className="hover:bg-cyan-400 hover:scale-125 transition-all hover:ease-in-out  py-1 px-8 rounded-sm"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
