"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import { Carousel } from "../components/Carousel";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Chat } from "../components/Chat";
import Slider from "../components/Slider"
const page = () => {
  const dataList=["", "", "","","","","","","","",]
  return (
    <div className="bg-rose-50 ">
      <Navbar />
      <div>
        <div>
          <div
            className="flex flex-col  md:flex-rowjustify-center pt-4 pb-12"
            style={{ width: "90%", margin: "auto" }}
          >
            <div
              className="flex flex-col md:grid  md:grid-cols-2 justify-between mt-8 gap-7"
              style={{ gridTemplateColumns: "60% 40% " }}
            >
              <div className="flex justify-center">
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/about1.png"
                  width={800}
                  height={80}
                  alt="Description of the image"
                />
              </div>
              <div>
                <div className="  text-[#FF82EF]-500 font-bold text-2xl text-center md:text-left ">
                  <Link href="/packages/web_development">OUR SERVICES</Link>
                </div>

                <p  className="text-gray-500  text-md text-justify md:text-left">
                  Coral Garden Resort is a tropical paradise that offers a
                  serene and authentic beachfront experience. Nestled amidst the
                  lush greenery and azure waters of the Andaman Sea, this
                  charming resort showcases the breathtaking beauty of the
                  Eastern Laos region. They The rooms offer air conditioning, a
                  refrigerator, and a desk, and getting online is possible, as
                  free wifi is available, allowing you to rest and refresh with
                  ease.Coral Garden Resort features a 24 hour front desk,
                  baggage storage, and express check-in and check-out. In
                  addition, as a valued Coral Garden Resort guest, you can enjoy
                  an on-site restaurant that is available on-site.If you are
                  looking for a good Mediterranean restaurant, you may want to
                  check out Italiano Koh Kradan while staying at Coral Garden
                  Resort. Coral Garden Resort puts the best of Ko Kradan at your
                  fingertips, making your stay both relaxing and enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bgImageA pb-12 relative z-10">
        <div
          className="text-white px-4 py-4 md:px-16 md:py-20 flex flex-col lg:grid "
          style={{ gridTemplateColumns: "60% 55%", gap: "20px" }}
        >
          <div className="leading-10 text-xl">
            <h3 className="text-center md:text-left text-3xl z-10">AMENITIES</h3>
            <h4>
              We offer a variety of amenities to make your stay with us as
              comfortable as possible. Cable is available in every room with the
              option of pay-per-view movies.
            </h4>

            <div className="grid grid-cols-3 gap-4 text-sm mt-12 mb-12">
              <div className="item">High-speed internet access</div>
              <div className="item">LED TV</div>
              <div className="item">Breakfast</div>
              <div className="item">Attached Bath</div>
              <div className="item">Hot & Cold water</div>
              <div className="item">Air Conditioned</div>
              <div className="item">Shampoo</div>
              <div className="item">Soap</div>
              <div className="item">Free Wi-Fi</div>
            </div>

            <h4 className="text-3xl z-10">100% SATISFACTION GUARANTEED</h4>
            <h4 className="sm:text-md ">
              Whether this is your first visit, or you have been a guest many
              times, we want your experience to be excellent. Our staff is
              always available to help with any questions or concerns you may
              have.
            </h4>
          </div>
          <div>
            <Image
              src="https://coralgardenresort.in/wp-content/uploads/2024/01/the-hotel-1.jpg"
              height={300}
              width={450}
            />
          </div>
        </div>
      </div>

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
        className=" text-purple-200 text-center  bg-[#4A276B] flex flex-col items-center py-8"
      >
        <p style={{ width: "60%" }} className="text-xs leading-10">
          © Copyright 2024 Coral Garden Resort.
        </p>
        <p className="text-xs">Designed by: OMM DIGITAL SOLUTION PVT. LTD</p>
      </div>
      <div>

      <div>
      <Slider/>
      </div>
      
      </div>
      <Chat/>
    </div>
  );
};

export default page;
