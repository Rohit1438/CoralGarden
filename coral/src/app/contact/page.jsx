"use client";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import React from "react";
import "flowbite";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Input } from "postcss";
import { BsChatRightText } from "react-icons/bs";
import { Chat } from "../components/Chat";
const page = () => {
  return (
    <div className="">
      <Navbar />
      <Chat/>
      <div className=" bg-[#F7D3E8] flex-col md:grid" style={{gridTemplateColumns:"40% 60%"}}>

 <div className=" " >
 <div style={{width:"90%",margin:"auto",paddingTop:"30px",paddingBottom:"20px",borderBottom:"1px solid #B97EBB"}} className="flex ">
    <div className="pt-4">
        <FiPhoneCall className="p-2 size-16 font-thin rounded-full hover:bg-purple-800 hover:transition-all hover:duration-300      hover:text-white" />
      </div>
    <div className="leading-8 hover:transition-all hover:pl-6 hover:duration-300">
       <h3 className="text-[#481C6B]  font-bold text-lg">PHONE</h3>
        <p className="text-md">1234567890</p>
        <p className="text-md">1234567890</p>
        <p className="text-md">1234567890</p>
        <p className="text-md">1234567890</p>
       </div>

    </div>
    <div style={{width:"90%",margin:"auto",paddingTop:"30px",paddingBottom:"20px",borderBottom:"1px solid #B97EBB"}} className="flex ">
    <div className="pt-4">
        <CiMail className="p-2 size-16 font-thin rounded-full hover:bg-purple-800 hover:transition-all hover:duration-300      hover:text-white" />
      </div>
    <div className="leading-8 hover:transition-all hover:pl-6 hover:duration-300">
       <h3 className="text-[#481C6B]  font-bold text-lg">EMAIL</h3>

        <p className="text-md">amar.coralresort@gmail.com</p>
       </div>

    </div>
    <div style={{width:"90%",margin:"auto",paddingTop:"30px",paddingBottom:"20px"}} className="flex ">
    <div className="pt-4">
        <CiLocationOn className="p-2 size-16 font-thin rounded-full hover:bg-purple-800 hover:transition-all hover:duration-300      hover:text-white" />
      </div>
    <div className="leading-8 hover:transition-all hover:pl-6 hover:duration-300">
       <h3 className="text-[#481C6B]  font-bold text-lg">ADDRESS</h3>
       <h3 className="text-black-800 font-bold text-md">CORAL GARDEN RESORT</h3>
        <p className="text-md">
            Neil  Kendra, Andaman and Nicobar Islands,
        </p>
        <p className="text-md">
           India
        </p>
     
       </div>

    </div>
 </div>
   <div style={{ margin: "auto", paddingTop: "30px", paddingBottom: "20px"  }} className="w-[90%] md:w-[80%] ">
  <h3 className="text-[#481C6B] font-bold text-lg">
    Fill in the details. We will contact you as soon as possible.
  </h3>
  <input
    style={{
      width: "100%",
      padding: "8px 0px 8px",
      border: "1px solid #BFBFBF",
      outline: "none",
      marginBottom: "30px", // Change marginTop to marginBottom
    }}
  />
  <div className="flex gap-8">
    <input
      style={{
        width: "100%",
        padding: "8px 0px 8px",
        border: "1px solid #BFBFBF",
        outline: "none",
        marginBottom: "70px", // Change marginTop to marginBottom
      }}
    />
    <input
      style={{
        width: "100%",
        padding: "8px 0px 8px",
        border: "1px solid #BFBFBF",
        outline: "none",
        marginBottom: "70px", // Change marginTop to marginBottom
      }}
    />
  </div>
  <label className="font-bold text-black text-lg " style={{ marginBottom: "12px" }}>
    You may put in your query here:
  </label>
  <textarea
    style={{
      width: "100%",
      minHeight: "25vh",
      padding: "8px 0px 8px",
      border: "1px solid #BFBFBF",
      outline: "none",
      marginBottom: "70px", // Change marginTop to marginBottom
    }}
  />
</div>;

   


      </div>
      <div>
   
   
    <iframe style={{height:"60vh"}}src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62481.72324469445!2d93.00492466907932!3d11.827730038581052!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3088d9c967a1ff19%3A0xd3eea1688ccbc26c!2sCORAL%20GARDEN%20RESORT!5e0!3m2!1sen!2sin!4v1710420231521!5m2!1sen!2sin"  className="w-[100%]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>


    
    <div
        style={{ width: "100%" }}
        className="  sticky -z-20 bottom-0  text-purple-200 text-center  bg-[#4E1D6D] flex flex-col items-center py-24"
      >
        <Image
          src="https://coralgardenresort.in/wp-content/uploads/2024/01/coral-gardan-logo.png"
          width={250}
          height={350}
        />
        <p style={{ width: "60%" }} className="text-normal  font-light">
          CORAL GARDEN RESORT Neil Kendra, Andaman and Nicobar Islands, India.
          For Bookings Contact Us - 03192 282705, 9434262594, 9933293666,
          9476026661
        </p>
        <div className="flex gap-6 mt-4 ">
          <button className="bg-purple-400 p-3 rounded-full">
            <FaFacebook className="text-white text-2xl" />
          </button>
          <button className="bg-purple-400 p-3 rounded-full">
            <CiYoutube className="text-white text-2xl" />
          </button>
        </div>
      </div>
      <div
        style={{ width: "100%" }}
        className="relative -z-20  text-purple-200 text-center  bg-[#4A276B] flex flex-col items-center py-8"
      >
        <p style={{ width: "60%" }} className="text-xs leading-10">
          © Copyright 2024 Coral Garden Resort.
        </p>
        <p className="text-xs">Designed by: OMM DIGITAL SOLUTION PVT. LTD</p>
      </div>



    </div>
  );
};
export default page;
