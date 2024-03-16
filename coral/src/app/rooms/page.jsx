import React from 'react'
import { Navbar } from '../components/Navbar'
import Image from 'next/image'
import { CiCircleCheck } from "react-icons/ci";
import { CallSharp } from "@mui/icons-material";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { BsChatRightText } from "react-icons/bs";
import {Chat} from "../components/Chat"
 const page = () => {
    const products=[
        {
            url:"https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
            name:"GRAND Suite",
            price:5999,
            desc:"Two double beds, cable television, full bath ,breakfast"
        },
        {
            url:"https://coralgardenresort.in/wp-content/uploads/2024/01/Master-Suite.jpg",
            name:"GRAND Suite",
            price:5999,
            desc:"Two double beds, cable television, full bath ,breakfast"
        },
        {
            url:"https://coralgardenresort.in/wp-content/uploads/2024/01/royal-Suite.jpg",
            name:"GRAND Suite",
            price:5999,
            desc:"Two double beds, cable television, full bath ,breakfast"
        },
        {
            url:"https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg",
            name:"GRAND Suite",
            price:5999,
            desc:"Two double beds, cable television, full bath ,breakfast"
        }
    ]
  return (
    <div>
<Navbar/>

<div className='bg-rose-100 pb-20 mb-8' >
<div className='text-center pt-8 pb-12'>
<h2 className='text-purple-700 text-2xl font-semibold'>ROOM TARIFF</h2>
<p className='text-rose-500 text-center font-semibold'>Where Comfort Meets Value!</p>

<div style={{width:"70%",margin:"auto"}} className='grid md:grid-cols-2 pt-4 gap-12 ' >
  {products.map((el, index) => (
    <div key={index} className='bg-white text-black rounded-xl pb-4' style={{border:"4px solid purple" ,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      <div className="md:flex md:flex-col md:items-stretch">
        <div className="md:w-full">
          <Image src={el.url} width={400} height={200} className="md:w-full rounded-lg" />
        </div>
        <div className="md:w-full md:p-4">
          <div className='grid grid-cols-2 gap-2'>
            <p className='text-grey-600 font-bold'>{el.name}</p>
            <p className=' font-semibold text-xl bg-green-500 rounded-md text-white '>Rs.{el.price}</p>
          </div>
          <p className='text-[#6637AD]-500 text-sm'>{el.desc}</p>
        </div>
      </div>
    </div>
  ))}

</div>




</div>


</div>

<div style={{width:"90%",margin:"auto"}} className="grid md:grid-cols-2 gap-8 justify-center">

    <div  className="flex flex-col items-center  md:items-start  ">
        <h2 className="text-3xl text-purple-800 font-bold ">BOOKING POLICY</h2>
        <ul className="list-disc list-inside text-md text-black-800 leading-8">
        <ul className="list-disc list-inside text-lg text-purple-500">
  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
    Rooms will be blocked for 24 hours.
  </li> 
  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
	
	
    If the booking is within 10 days of checking-in then100 % payment is required.
  </li> 
  
  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
    A confirmation voucher will be issued only after receiving 100 % of the payment.
  </li> 
  
  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
	
    Travel Agents booking will be booked after receiving 100% advance payment .
  </li> 
  

  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
	
    NO Compensation Will be provided in case of power failure , Climate or natural disasters
  </li> 
  


</ul>

          
     
        </ul>
    </div>
    
    <div  className="flex flex-col items-center  md:items-start  ">
        <h2 className="text-3xl text-purple-800 font-bold ">CANCELLATION POLICY</h2>
        <ul className="list-disc list-inside text-md text-black-800 leading-8">
        <ul className="list-disc list-inside text-lg text-purple-500">
  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
    Rooms will be blocked for 24 hours.
  </li> 
  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
	
	
    If the booking is within 10 days of checking-in then100 % payment is required.
  </li> 
  
  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
    A confirmation voucher will be issued only after receiving 100 % of the payment.
  </li> 
  
  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
	
    Travel Agents booking will be booked after receiving 100% advance payment .
  </li> 
  

  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
	
    NO Compensation Will be provided in case of power failure , Climate or natural disasters
  </li> 
  


</ul>

          
     
        </ul>
    </div>

    <div  className="flex flex-col items-center  md:items-start  ">
        <h2 className="text-3xl text-purple-800 font-bold ">CHECK – IN & CHECK – OUT</h2>
        <ul className="list-disc list-inside text-md text-black-800 leading-8">
        <ul className="list-disc list-inside text-lg text-purple-500">
  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
    Rooms will be blocked for 24 hours.
  </li> 
  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
	
	
    If the booking is within 10 days of checking-in then100 % payment is required.
  </li> 
  
  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
    A confirmation voucher will be issued only after receiving 100 % of the payment.
  </li> 
  
  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
	
    Travel Agents booking will be booked after receiving 100% advance payment .
  </li> 
  

  <li className="flex items-center mt-4 ml-4 text-black text-md ">
    <CiCircleCheck className="text-purple-800 text-2xl md:text-2xl mr-2 transition-all ease-in-out duration-300  hover:scale-150" />
	
    NO Compensation Will be provided in case of power failure , Climate or natural disasters
  </li> 
  


</ul>

          
     
        </ul>
    </div>
    <div className="flex flex-col items-center  md:items-start  ">
<Image src="https://coralgardenresort.in/wp-content/uploads/2024/01/room-t.png" height={400} width={600}/>

    </div>
 

</div>
<div style={{width:"90%",margin:"auto"}} className="flex flex-col pb-12 items-center  md:items-start  ">
<h2 className="text-xl text-center md:text-left text-purple-800 font-bold mt-2 ">
For Bookings Contact Us –</h2>
<h2 className="text-xl text-purple-800 text-center md:text-left font-bold ">
03192 282705, 9434262594, 9933293666, 9476026661</h2>
</div>
<div>
    <div
        style={{ width: "100%" }}
        className="    text-purple-200 text-center  bg-[#4E1D6D] flex flex-col items-center py-24"
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
<Chat/>
    </div>
  )
}
export default page