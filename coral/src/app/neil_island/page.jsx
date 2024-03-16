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
            ABOUT NEIL ISLAND
          </h2>
          <p className="text-rose-500 text-center font-semibold">
            Experience tranquility in paradise
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
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/neil02.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/neil03.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/neil04.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/neil05.jpg"
                  width={800}
                  height={800}
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>

              <div className="hidden duration-200 ease-linear" data-carousel-item>
                <Image
                  src="https://coralgardenresort.in/wp-content/uploads/2024/01/neil06.jpg"
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
        Neil Island is an island in the Andaman Islands of India, located in
        Ritchie’s Archipelago. It is apparently named after James George Smith
        Neill, a British soldier who had sternly dealt with the insurgents
        during the suppression of the 1857 Mutiny. It occupies an area of 18.9
        square kilometers (7.3 sq mi). The island is located 40 kilometers (25
        mi) north-east of Port Blair, the capital of Andaman and Nicobar
        Islands. It is the southernmost island of Ritchie’s Archipelago, save
        for uninhabited Sir Hugh Rose Island, which is another 3.8 km to the
        southeast of Neil Island. Administratively, the island is in the Neil
        Kendra panchayat, Port Blair sub-district of the South Andaman district,
        in the Union Territory of the Andaman and Nicobar Islands, India.
        Sitapur (267) The population lives in five villages, which are numbered
        1 through 5 (with population at 2001 census in parentheses) Bharatpur
        (564) Neil Kendra (1064) Lakshmanpur (372) Ram Nagar (601) There is
        alone jetty at Bharathpur, which serves as the only entry–exit point of
        the island. The population of the island is 2868 as of the census of
        2001. Agriculture is the primary occupation of the villagers, and the
        island supplies vegetables to the rest of Andaman. Despite its minuscule
        tourist infrastructure, an increasing number of tourists have chosen to
        stay at Neil Island instead of neighboring Havelock Island. There are a
        handful of restaurants and basic beach hotels that cater to
        international and domestic. Neil Island:-This beautiful island with lush
        green forest and sandy beaches is the vegetable bowl of Andamans.
        One.One can feel the sincerity and serenity of village life here.
        Beautiful beaches at Laxmanpur, Bharatpur, Sitapur and the bridge
        formation on the sea-shore (Howrah bridge) are the attractions. Ferry
        Ferry to Neil Island Andaman There are regular Government ferry from
        Port Blair to Neil Island. Usually the timings are at 6:30 AM and 11:00
        AM. Government ferry tickets are not available online by the government.
        However, the Andaman Trip Planner allows ferry tickets for travelers
        visiting Andaman Islands. The second way to reach Neil Island is in
        cruise such as Makruzz, and SeaLink . The cruise are fast and takes
        around 90 minutes to reach Neil Island from Port Blair and around 60
        Minutes from Havelock Island. Ferry details and timings regularly
        changes in Andaman based on season and weather conditions. Local island
        ferry schedule is monitored at where ferry details, schedule and prices
        can be known.
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
