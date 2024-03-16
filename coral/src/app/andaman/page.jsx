"use client";

import React from "react";
import "flowbite";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
const page = () => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-rose-100 pb-20 mb-8">
        <div className="text-center pt-8 pb-12">
          <h2 className="text-purple-700 text-2xl font-semibold">
            ABOUT ANDAMAN
          </h2>
          <p className="text-rose-500 text-center">
            Where Nature Meets Paradise
          </p>

          <div
            style={{ width: "70%", margin: "auto" }}
            className="grid md:grid-cols-2 pt-4 gap-12 "
          ></div>

          <div
            id="animation-carousel"
     
            style={{
             
              margin: "auto",
              borderRadius: "15px",
              border: "5px solid white",
            }}
            className=" w-[100%] md:w-[70%] relative "
            data-carousel="static"
          >
            <div
              className="relative h-56 overflow-hidden rounded-lg md:h-96"
              style={{}}
            >
              <div className="hidden duration-200 ease-linear " data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman08.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman09.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman10.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman01.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman02.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman03.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman04.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman05.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/andaman06.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>

            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ width: "90%", margin: "auto" }}
        className="text-md text-blackn text-justify pb-12 "
      >
        The Andaman and Nicobar are a group of picturesque Islands, big and
        small, inhabited and uninhabited, a total of 572 islands, islets and
        rocks lying in the South Eastern part of Bay of Bengal. The Andaman and
        Nicobar Islands have great maritime importance. During the British
        period political leaders considered dangerous to the interests of the
        Raj and the other dreaded criminals were deported from mainland to the
        Cellular Jail – The Indian Bastille, situated on the sea coast of
        Atlanta Point in the North-Eastern part of Port Blair. Thus these
        Islands were infamously known as the ‘Black water Prison’ or ‘Kala
        Pani’. The Andaman offers many opportunities for water sports including
        Scuba Diving, Snorkeling, and Swimming etc… You can laze on the tranquil
        beaches; drink a refreshing draught of fresh coconut milk and watches
        the water, birds soar across the azure sky. Feel completely at peace on
        tours to the Andaman’s. You can go Snorkeling or travel on boat cruises
        to witness the amazing marine life of Andaman’s. If you’re lucky you can
        see Dolphin’s cruising by the side of your boat and Dugong or Sea cow, a
        large marine mammal, which feeds on seaweeds near the cost. A visit to
        the pristine beaches and lagoons with profile of an Andaman and Nicobar
        Islands tour is sure to be an unforgettable journey, come and enjoy the
        Enchanting, Marvelous, Eye Catching, World of Flora and Fauna “The
        Island of Dreams”.
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
    </div>
  );
};
export default page;
