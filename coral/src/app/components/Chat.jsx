"use client"
import Link from "next/link";
import React, { useState } from "react";
import { BsChatRightText } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
export const Chat = () => {
  const[toggle,setToggle] =useState(false)
  const handelChange=()=>{
    setToggle((pre)=>!pre)
  }
  console.log(toggle);
    return (
    <div className="z-50" >
      <div  className="rounded-full text-3xl md:text-3xl z-50 transition-all duration-1000 text-white p-4 md:p-4 flex justify-center bg-purple-400 fixed  bottom-16  right-12">
        <button onClick={handelChange} className="transition-all duration-1000">
       {toggle?<RxCross2 className="transition-all duration-1000"/>:   <BsChatRightText className="transition-all duration-1000"/>}
        </button>
      </div>


    {/* btn a  */}
    
    {/* <div className={`rounded-full text-3xl md:text-3xl z-40  text-white p-2 flex justify-center p-4 md:p-4 bg-green-400 fixed right-12 ${
    !toggle ? 'bottom-16 transition-all duration-300' : 'bottom-56  rotate-180   transition-all duration-1000'
}`}>
    <button >
        <FaWhatsapp  className="rotate-180"/>
    </button>
</div> */}
<div className={`rounded-full text-3xl md:text-3xl z-40  text-white p-2 flex justify-center bg-green-400 p-4 md:p-4 fixed right-12 ${
    !toggle ? 'bottom-16 transition-all duration-300' : 'bottom-36  rotate-180   transition-all duration-700'
}`}>
   <Link  href="tel:9434262594">
  <IoIosCall className="rotate-180"/>
   </Link>
      
  
</div>





  
   </div>



  );
};
